const data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
];
const jobList= document.querySelector('.job-list');
data.forEach(job =>{
    let jobDiv= document.createElement('div');
    jobDiv.classList.add('job');
    jobDiv.innerHTML = makeJobDiv(job);
    jobList.appendChild(jobDiv)
})
function makeJobDiv(data){
    let div = 
    `<div class="logo-description">
          <img src="${data.logo}" alt="company logo" id="logo">
          <div class="job-description">
            <div class="job-info">
              <h4 class="company-name">${data.company}</h4>
              <!-- new? -->
              <!-- featured? -->
            </div>
            <h3 class="job-title">${data.position}</h3>
            <ul>
              <li>${data.postedAt}</li>
              <li>${data.contract}</li>
              <li>${data.location}</li>
            </ul>
          </div>
        </div>
        <div class="tools">
            <!-- tools -->
      </div>`;
      if(data.new){
        div=div.replace('<!-- new? -->','<p id="new">NEW!</p>');
      }
      if(data.featured){
        div=div.replace('<!-- featured? -->',' <p id="featured">FEATURED</p>');
      }
      let dataTools = getToolsString(data);
      div=div.replace('<!-- tools -->',dataTools);
      
      return div;
}

function getToolsString(data){
    let toolsArr = [data.level,data.role,...data.languages];
    let toolsString = '';
    if(data.tools.length){
        for(var i = 0;i<data.tools.length;i++){
            toolsArr.push(data.tools[i]);
        }
    }
    for(let i = 0; i < toolsArr.length;i++){
        toolsString += `<p id='tool-tag' class="tag">${toolsArr[i]}</p>`;
    }
    return toolsString
}
//working here
const tags = document.querySelectorAll('#tool-tag');
const searchDiv = document.querySelector('.search-items');
const toolDivs = document.querySelectorAll('#tool-tag');
const jobDivArr = document.querySelectorAll('.job');
var searchTagsArr = [];

tags.forEach(tag =>{
  tag.addEventListener('click',()=>{
    let tagDiv = getTagDiv(tag);
    if(searchTagsArr.indexOf(tag.innerText) == -1){
      searchTagsArr.push(tag.innerText);
      searchDiv.appendChild(tagDiv);
      upDateListing();
    }
  })
})

function getTagDiv(data){
  let tagDiv = document.createElement('div');
  tagDiv.classList.add('search-tag');
  tagDiv.innerHTML =  `
    <p class="tag">${data.innerText}</p>
    <img src="/images/icon-remove.svg" alt="close-icon" class='close-icon'>
  `;
  return tagDiv;
}

window.addEventListener('click',elem =>{
  const element = elem.target;
  const tagText = element.parentElement.firstElementChild.innerText;
  if(element.classList.contains('close-icon')){
    searchTagsArr.splice(searchTagsArr.indexOf(tagText),1)
    searchDiv.removeChild(element.parentElement);
    // element.parentElement.style.display ='none';
    upDateListing();
  }
  
})

function upDateListing(){
  jobDivArr.forEach(job =>{
    // console.log(searchTagsArr,toolDiv.innerHTML)
    if(searchDiv.children.length){
      job.style.display = 'none';
    }else{
      job.style.display = 'flex';
    }
    
  })
  toolDivs.forEach(toolDiv =>{
    for(let i = 0;i< searchTagsArr.length;i++){
      if(searchTagsArr[i] == toolDiv.innerHTML){
        toolDiv.parentElement.parentElement.style.display = 'flex';
      }
    }
  })
}
const searchClear = ()=>{
  while (searchDiv.firstChild) {
    searchDiv.removeChild(searchDiv.firstChild);
  }
  upDateListing()
  searchTagsArr = [];
}
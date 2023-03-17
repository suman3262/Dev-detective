let defaultuserName="suman3262";
let Api_url="https://api.github.com/users/";

let dataForm=document.querySelector('[data-formContainer]');

let dataSearch=document.querySelector('[data-searchUser]');

let submit_btn=document.querySelector('[data-submit-btn]');

 async function fetchUserData(username)
{
  try{
    let response=await(await fetch(`${Api_url}${username}`)).json();
    console.log(response);
 
     renderOnUI(response);
  }
  catch(err)
  {
      console.log(err);
  }
}

fetchUserData(defaultuserName);


dataForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user=dataSearch.value;
    if(user=="")
    {
        return ;
    }
    else{
        fetchUserData(user);
    }
    console.log(user);
});

function renderOnUI(userData)
{
    let userImg=document.querySelector('[user-image]');
    userImg.src=`${userData?.avatar_url}`;

    let Name=document.querySelector('#name');
    Name.innerText=userData?.name;
    console.log(Name);

    let userName=document.querySelector('#user-name');
     userName.innerText=userData?.login;

     //dates of join
     let join= document.querySelector('[joinDate]');
    let joiningDate= userData?.created_at;
    const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

     const joiningData= joiningDate.split('-');
     const joinDate= joiningData[2].split('T'); 
     const month= months[parseInt(joiningData[1])];    
     join.innerText= `${joinDate[0]} ${month} ${joiningData[0]}`
     console.log(join)

  // user bio
    let userBio=document.querySelector('[user-bioData]');
    let uData=userData?.bio;
   if(uData)
   {
    userBio.innerText=uData;
   }
   else{
    userBio.innerText="This profile has no Bio";
   }

   // repo data

   const repoData=document.querySelector('[repo-data]');
   repoData.innerText=userData?.public_repos;

   const userFllower=document.querySelector('[Followers-data]');
    userFllower.innerText=userData?.followers;

    const userFollowing=document.querySelector('[Following-data]');
    userFollowing.innerText=userData?.following;

     // sociacl data

     const userLocation=document.querySelector('[location-data]');

     const lData=userData?.location;
     if(lData)
     {
        userLocation.innerText=lData;
    }
    else{
        userLocation.innerText="Location not available";
    }
  // website link
    const userWeblink=document.querySelector('[wesite-link]');

    userWeblink.innerText=userData?.html_url;

    //twiteerlink
    const userTwiter=document.querySelector('[twitter-link]');

    const Twitdata=userData?.twitter_username;
    if(Twitdata)
    {
        userTwiter.innerText=Twitdata;
    }
    else{
        userTwiter.innerText="Not available";
    }

     // company

  let   userCompany=document.querySelector('[company-data]');

  let comp=userData?.company;
  if(comp)
  {
    userCompany.innerText=comp;
  }
  else{
    userCompany.innerText="Not available";
  }

}

// UI dark or light

//UI dark or light
let icon= document.querySelector('[theme-img]');
let theme= document.querySelector('[theme]');
icon.src= "./assets/images/moon-icon.svg";

let themeSelector= document.querySelector('#theme-selector');

themeSelector.addEventListener('click',()=>{

   currentTheme = theme.innerText;
    if(currentTheme=="Light")
    {

        makeThemelight();
    }
    else
    {
        makeThemeDark();
    }

})

function makeThemelight()
{
   theme.innerText="Dark";
   icon.src= "./assets/images/moon-icon.svg";
   document.body.classList.remove("Dark")
   
   
}
function makeThemeDark()
{
   theme.innerText="Light";
   icon.src= "./assets/images/sun-icon.svg";
   document.body.classList.add("Dark")

}

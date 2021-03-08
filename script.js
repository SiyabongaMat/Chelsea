//Program with saved contents from main webpages

let images = [];
let articles = [];
let bio = [];
let player = [];
//initialization of array 

function load ()                                        //load function for home, team and contact pages
{
    if (localStorage.getItem('isSavesPageEmpty') === null)
    {
        localStorage.setItem('image', JSON.stringify(images));
        localStorage.setItem('article', JSON.stringify(articles));
        localStorage.setItem('playerBio', JSON.stringify(bio));
        localStorage.setItem('player', JSON.stringify(player));
        localStorage.setItem('isSavesPageEmpty', true);
        //code above makes sure that array content is empty if saves page is empty
    } 
    else 
    {
        //if saves page is empty the page is filled with data stored in the local storage
        images = JSON.parse(localStorage.getItem('image'));
        articles = JSON.parse(localStorage.getItem('article'));
        bio = JSON.parse(localStorage.getItem('playerBio'));
        player = JSON.parse(localStorage.getItem('player'));
    }
}

function loadSave ()                                    //load function for saves page
{
    if (localStorage.getItem('isSavesPageEmpty') === null)
    {
        alert("Nothing added to favourites yet!");
        //alerts if localstorage is empty
    }
    else 
    {
        //loads function intialized below onload of the page if local storage below
        load();
        loadHomeImages();
        loadHomeArticles();
        loadTeamImages();
        loadTeamArticles();
    }
}

function loadHomeImages ()
{
    let saves = document.querySelector('#savesHomeDiv1');               //calls div from saves page

    if (localStorage.getItem('isSavesPageEmpty') === null)              //checks if saves page is empty
    {
        localStorage.setItem('image', JSON.stringify(images));
        localStorage.setItem('isSavesPageEmpty', true);
        //sets items in localstorage
    }
    else
    {
        //parses data from local storage into images array
        images = JSON.parse(localStorage.getItem('image'));
        for (let i=0;i<images.length;i++)                               //loops through correlating array this time being images array
        {
            let imgSrc = images[i];
            let pic = document.createElement('img');
            pic.src = imgSrc.source;
            pic.style.height = "320px";
            pic.style.width = "650px";
            //creates image element and styles it with code above
            saves.appendChild(pic);                                     //appends image into div called in line: 50
        }
    }
}

function loadHomeArticles ()                                            //function to load home page articles to saves page
{
    let saves = document.querySelector('#savesHomeDiv2');               //calls div from saves page

    if (localStorage.getItem('isSavesPageEmpty') === null)              //same as the comment from loadHomeImages() function
    {
        localStorage.setItem('article', JSON.stringify(articles));
        localStorage.setItem('isSavesPageEmpty', true);
    }
    else
    {
        articles = JSON.parse(localStorage.getItem('article'));
        for (let j=0;j<articles.length;j++)
        {
            let art = articles[j];
            let savesSection = document.createElement('article');
            savesSection.innerHTML = art.contents;
            //creates article and sets its innerhtml to the contents found in the object arrays contents variable
            saves.appendChild(savesSection);                            //appends to element called in line 77
        }
    }
}

function loadTeamArticles ()                                            //function to load articles from team page
{                                                                       //code replicates the loadHomeArticles() function above-line75 down
    let saves = document.querySelector('#savesTeamDiv1');

    if (localStorage.getItem('isSavesPageEmpty') === null)
    {
        localStorage.setItem('playerBio', JSON.stringify(bio));
        localStorage.setItem('isSavesPageEmpty', true);
    }
    else
    {
        bio = JSON.parse(localStorage.getItem('playerBio'));
        for (let l=0;l<bio.length;l++)
        {
            let playerBio = bio[l];
            let bioSave = document.createElement('article');
            bioSave.innerHTML = playerBio.contents;
            saves.appendChild(bioSave);
        }
    }
}

function loadTeamImages ()                                              //function to load images from team page to saves page
{                                                                       //code replicates loadHomeImages()-line 48
    let saves = document.querySelector('#savesTeamDiv2');

    if (localStorage.getItem('isSavesPageEmpty') === null)
    {
        localStorage.setItem('player', JSON.stringify(player));
        localStorage.setItem('isSavesPageEmpty', true);
    }
    else
    {
        player = JSON.parse(localStorage.getItem('player'));
        for (let k=0;k<player.length;k++)
        {
            let teamPics = player[k];
            let snap = document.createElement('img');
            snap.src = teamPics.source;
            snap.style.height = "320px";
            snap.style.width = "650px";
            saves.appendChild(snap);
        }
    }
}

function saveImage (name)                               //function to intialize new object
{
    //creates new imgSave object
    let newImage = new imgSave ( 
        document.getElementById(name).getAttribute('src')
    );
    images.push(newImage);                              //adds newly create object to images array
    localStorage.setItem('image', JSON.stringify(images));          //stores object data striginified into localstorage
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    //counter for array
    alert("Articles: "+ x +"\nImages: "+ k);            //alerts the number of elements in array 
}

function saveTeamImages (name)
{
    //creates imgSave object
    let newImage = new imgSave ( 
        document.getElementById(name).getAttribute('src')
    );
    player.push(newImage);                          //saves object into player array
    localStorage.setItem('player', JSON.stringify(player));     //stores stringified data into localstorage
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveStamfordArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newArticle = new articleSave (
        document.getElementById('stamford').innerHTML
    );
    articles.push(newArticle);
    localStorage.setItem('article', JSON.stringify(articles));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveRomanArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newArticle = new articleSave (
        document.getElementById('roman').innerHTML
    );
    articles.push(newArticle);
    localStorage.setItem('article', JSON.stringify(articles));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveCobhamArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newArticle = new articleSave (
        document.getElementById('training').innerHTML
    );
    articles.push(newArticle);
    localStorage.setItem('article', JSON.stringify(articles));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveThomasArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('thomas').innerHTML
    );
    bio.push(newTeamArticle);
    console.log(bio);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveMendyArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('mendy').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveThiagoArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('thiago').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveZoumaArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('zouma').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveRudigerArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('rudiger').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveCesarArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('cesar').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveMountArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('mount').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveKanteArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('kante').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveZiyechArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('ziyech').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function saveGiroudArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('giroud').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function savePulisicArticle ()
{
    //code below initializes new object and pushes it into array and stores stringified data into localstorage and alerts counter
    let newTeamArticle = new articleSave (
        document.getElementById('pulisic').innerHTML
    );
    bio.push(newTeamArticle);
    localStorage.setItem('playerBio', JSON.stringify(bio));
    let x = articles.length + bio.length;
    let k = images.length + player.length;
    alert("Articles: "+ x +"\nImages: "+ k);
}

function show ()
{
    document.getElementsByClassName('dropdown').toggle('show');
}

/* constructor for both the saving of image object as well as the 
  article of content in both the team and home pages */
function imgSave (source)
{
    this.source = source;
}

function articleSave (contents)
{
    this.contents = contents;
}

$('#heading').hover(function (){
    $('.teamList').animate({height: 'toggle'}, 'slow');
    $('.teamList').hover(function (){
        $(this).stop();
    });
});

$('.fa').click(function (){
    let like = $(this).css('color','red');
    sessionStorage.setItem('like', like);
});
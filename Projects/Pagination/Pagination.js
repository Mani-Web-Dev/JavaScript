
var employeeTable = document.getElementById("employeeTable");


var rows = "";

var employees = [
    {
        "id": 1,
        "first_name": "Tamra",
        "last_name": "Shorton",
        "email": "tshorton0@chron.com",
        "gender": "Female"
    },
    {
        "id": 2,
        "first_name": "Athene",
        "last_name": "Gisbey",
        "email": "agisbey1@furl.net",
        "gender": "Female"
    },
    {
        "id": 3,
        "first_name": "Nikki",
        "last_name": "Duddan",
        "email": "nduddan2@shinystat.com",
        "gender": "Male"
    },
    {
        "id": 4,
        "first_name": "Liam",
        "last_name": "Jaram",
        "email": "ljaram3@spotify.com",
        "gender": "Male"
    },
    {
        "id": 5,
        "first_name": "Malissa",
        "last_name": "O'Regan",
        "email": "moregan4@irs.gov",
        "gender": "Female"
    },
    {
        "id": 6,
        "first_name": "Sargent",
        "last_name": "Vogelein",
        "email": "svogelein5@wisc.edu",
        "gender": "Male"
    },
    {
        "id": 7,
        "first_name": "Osbourn",
        "last_name": "Patel",
        "email": "opatel6@nasa.gov",
        "gender": "Male"
    },
    {
        "id": 8,
        "first_name": "Fernande",
        "last_name": "Packwood",
        "email": "fpackwood7@google.ca",
        "gender": "Female"
    },
    {
        "id": 9,
        "first_name": "Virgie",
        "last_name": "Tenpenny",
        "email": "vtenpenny8@printfriendly.com",
        "gender": "Female"
    },
    {
        "id": 10,
        "first_name": "Matelda",
        "last_name": "Crunkhorn",
        "email": "mcrunkhorn9@furl.net",
        "gender": "Genderfluid"
    },
    {
        "id": 11,
        "first_name": "Rolf",
        "last_name": "Faier",
        "email": "rfaiera@istockphoto.com",
        "gender": "Male"
    },
    {
        "id": 12,
        "first_name": "Celle",
        "last_name": "Kitteridge",
        "email": "ckitteridgeb@imageshack.us",
        "gender": "Female"
    },
    {
        "id": 13,
        "first_name": "Orton",
        "last_name": "Bowle",
        "email": "obowlec@tumblr.com",
        "gender": "Male"
    },
    {
        "id": 14,
        "first_name": "Gaelan",
        "last_name": "Jakubiak",
        "email": "gjakubiakd@army.mil",
        "gender": "Male"
    },
    {
        "id": 15,
        "first_name": "Tami",
        "last_name": "MacConneely",
        "email": "tmacconneelye@mapquest.com",
        "gender": "Female"
    },
    {
        "id": 16,
        "first_name": "Celinda",
        "last_name": "Hoovart",
        "email": "choovartf@uol.com.br",
        "gender": "Female"
    },
    {
        "id": 17,
        "first_name": "Jdavie",
        "last_name": "Mackelworth",
        "email": "jmackelworthg@123-reg.co.uk",
        "gender": "Genderqueer"
    },
    {
        "id": 18,
        "first_name": "Renaud",
        "last_name": "Finby",
        "email": "rfinbyh@berkeley.edu",
        "gender": "Polygender"
    },
    {
        "id": 19,
        "first_name": "Jeannette",
        "last_name": "Carren",
        "email": "jcarreni@kickstarter.com",
        "gender": "Female"
    },
    {
        "id": 20,
        "first_name": "Dori",
        "last_name": "Peasby",
        "email": "dpeasbyj@economist.com",
        "gender": "Female"
    },
    {
        "id": 21,
        "first_name": "Jarvis",
        "last_name": "Beardow",
        "email": "jbeardowk@icq.com",
        "gender": "Male"
    },
    {
        "id": 22,
        "first_name": "D'arcy",
        "last_name": "Garrettson",
        "email": "dgarrettsonl@360.cn",
        "gender": "Bigender"
    },
    {
        "id": 23,
        "first_name": "Mitchael",
        "last_name": "Bentall",
        "email": "mbentallm@dropbox.com",
        "gender": "Male"
    },
    {
        "id": 24,
        "first_name": "Tiffi",
        "last_name": "Tomalin",
        "email": "ttomalinn@whitehouse.gov",
        "gender": "Female"
    },
    {
        "id": 25,
        "first_name": "Addison",
        "last_name": "Tandy",
        "email": "atandyo@topsy.com",
        "gender": "Male"
    },
    {
        "id": 26,
        "first_name": "Carl",
        "last_name": "Locks",
        "email": "clocksp@is.gd",
        "gender": "Male"
    },
    {
        "id": 27,
        "first_name": "Gerladina",
        "last_name": "Stodhart",
        "email": "gstodhartq@java.com",
        "gender": "Female"
    },
    {
        "id": 28,
        "first_name": "Caprice",
        "last_name": "Heijnen",
        "email": "cheijnenr@google.pl",
        "gender": "Female"
    },
    {
        "id": 29,
        "first_name": "Dov",
        "last_name": "Dagless",
        "email": "ddaglesss@prweb.com",
        "gender": "Male"
    },
    {
        "id": 30,
        "first_name": "Marinna",
        "last_name": "Minor",
        "email": "mminort@nature.com",
        "gender": "Female"
    },
    {
        "id": 31,
        "first_name": "Mathe",
        "last_name": "Chellam",
        "email": "mchellamu@home.pl",
        "gender": "Agender"
    },
    {
        "id": 32,
        "first_name": "Forster",
        "last_name": "Kewley",
        "email": "fkewleyv@cafepress.com",
        "gender": "Male"
    },
    {
        "id": 33,
        "first_name": "Toby",
        "last_name": "Ivain",
        "email": "tivainw@zimbio.com",
        "gender": "Male"
    },
    {
        "id": 34,
        "first_name": "Wadsworth",
        "last_name": "Ren",
        "email": "wrenx@bluehost.com",
        "gender": "Male"
    },
    {
        "id": 35,
        "first_name": "Gasper",
        "last_name": "Clague",
        "email": "gclaguey@adobe.com",
        "gender": "Male"
    },
    {
        "id": 36,
        "first_name": "Richardo",
        "last_name": "Alvis",
        "email": "ralvisz@shareasale.com",
        "gender": "Male"
    },
    {
        "id": 37,
        "first_name": "Raf",
        "last_name": "Boundley",
        "email": "rboundley10@spotify.com",
        "gender": "Female"
    },
    {
        "id": 38,
        "first_name": "Pansy",
        "last_name": "Breheny",
        "email": "pbreheny11@discuz.net",
        "gender": "Female"
    },
    {
        "id": 39,
        "first_name": "Dilan",
        "last_name": "Belloch",
        "email": "dbelloch12@eepurl.com",
        "gender": "Male"
    },
    {
        "id": 40,
        "first_name": "Jerome",
        "last_name": "Masi",
        "email": "jmasi13@sakura.ne.jp",
        "gender": "Male"
    },
    {
        "id": 41,
        "first_name": "Benyamin",
        "last_name": "Wimpenny",
        "email": "bwimpenny14@newsvine.com",
        "gender": "Genderqueer"
    },
    {
        "id": 42,
        "first_name": "Berny",
        "last_name": "Busfield",
        "email": "bbusfield15@seattletimes.com",
        "gender": "Male"
    },
    {
        "id": 43,
        "first_name": "Stevana",
        "last_name": "Fautly",
        "email": "sfautly16@w3.org",
        "gender": "Female"
    },
    {
        "id": 44,
        "first_name": "Becky",
        "last_name": "Megarry",
        "email": "bmegarry17@dagondesign.com",
        "gender": "Female"
    },
    {
        "id": 45,
        "first_name": "Tallie",
        "last_name": "Valentino",
        "email": "tvalentino18@shareasale.com",
        "gender": "Male"
    },
    {
        "id": 46,
        "first_name": "Nat",
        "last_name": "Beetlestone",
        "email": "nbeetlestone19@vimeo.com",
        "gender": "Non-binary"
    },
    {
        "id": 47,
        "first_name": "Alonzo",
        "last_name": "Kohler",
        "email": "akohler1a@tiny.cc",
        "gender": "Genderqueer"
    },
    {
        "id": 48,
        "first_name": "Warden",
        "last_name": "Iacovino",
        "email": "wiacovino1b@wikispaces.com",
        "gender": "Male"
    },
    {
        "id": 49,
        "first_name": "Jorge",
        "last_name": "Horrod",
        "email": "jhorrod1c@google.com.au",
        "gender": "Male"
    },
    {
        "id": 50,
        "first_name": "Lindsay",
        "last_name": "Keddey",
        "email": "lkeddey1d@guardian.co.uk",
        "gender": "Female"
    },
    {
        "id": 51,
        "first_name": "Tabor",
        "last_name": "Gilbanks",
        "email": "tgilbanks1e@is.gd",
        "gender": "Male"
    },
    {
        "id": 52,
        "first_name": "Joe",
        "last_name": "Dubble",
        "email": "jdubble1f@friendfeed.com",
        "gender": "Male"
    },
    {
        "id": 53,
        "first_name": "Ellynn",
        "last_name": "Katte",
        "email": "ekatte1g@toplist.cz",
        "gender": "Agender"
    },
    {
        "id": 54,
        "first_name": "Linc",
        "last_name": "Trenbey",
        "email": "ltrenbey1h@free.fr",
        "gender": "Male"
    },
    {
        "id": 55,
        "first_name": "Morissa",
        "last_name": "Joseland",
        "email": "mjoseland1i@deviantart.com",
        "gender": "Female"
    },
    {
        "id": 56,
        "first_name": "Mord",
        "last_name": "Kear",
        "email": "mkear1j@odnoklassniki.ru",
        "gender": "Male"
    },
    {
        "id": 57,
        "first_name": "Corrie",
        "last_name": "Teesdale",
        "email": "cteesdale1k@weibo.com",
        "gender": "Genderqueer"
    },
    {
        "id": 58,
        "first_name": "Lorant",
        "last_name": "Cragg",
        "email": "lcragg1l@about.com",
        "gender": "Male"
    },
    {
        "id": 59,
        "first_name": "Tarrah",
        "last_name": "Foulds",
        "email": "tfoulds1m@aol.com",
        "gender": "Female"
    },
    {
        "id": 60,
        "first_name": "Arlyne",
        "last_name": "Flohard",
        "email": "aflohard1n@eventbrite.com",
        "gender": "Female"
    },
    {
        "id": 61,
        "first_name": "Livvy",
        "last_name": "MacDwyer",
        "email": "lmacdwyer1o@altervista.org",
        "gender": "Female"
    },
    {
        "id": 62,
        "first_name": "Juditha",
        "last_name": "Schettini",
        "email": "jschettini1p@army.mil",
        "gender": "Female"
    },
    {
        "id": 63,
        "first_name": "Giles",
        "last_name": "Tommei",
        "email": "gtommei1q@mayoclinic.com",
        "gender": "Male"
    },
    {
        "id": 64,
        "first_name": "Annmaria",
        "last_name": "Undy",
        "email": "aundy1r@cafepress.com",
        "gender": "Female"
    },
    {
        "id": 65,
        "first_name": "Cynthea",
        "last_name": "Pinxton",
        "email": "cpinxton1s@opensource.org",
        "gender": "Polygender"
    },
    {
        "id": 66,
        "first_name": "Amity",
        "last_name": "O'Hollegan",
        "email": "aohollegan1t@spiegel.de",
        "gender": "Female"
    },
    {
        "id": 67,
        "first_name": "Latia",
        "last_name": "Birchner",
        "email": "lbirchner1u@g.co",
        "gender": "Female"
    },
    {
        "id": 68,
        "first_name": "Denys",
        "last_name": "Stucksbury",
        "email": "dstucksbury1v@wix.com",
        "gender": "Bigender"
    },
    {
        "id": 69,
        "first_name": "Emerson",
        "last_name": "Howard",
        "email": "ehoward1w@opensource.org",
        "gender": "Male"
    },
    {
        "id": 70,
        "first_name": "Finley",
        "last_name": "Labden",
        "email": "flabden1x@mapquest.com",
        "gender": "Male"
    },
    {
        "id": 71,
        "first_name": "Adrien",
        "last_name": "Yurasov",
        "email": "ayurasov1y@webnode.com",
        "gender": "Male"
    },
    {
        "id": 72,
        "first_name": "Dorey",
        "last_name": "Berthome",
        "email": "dberthome1z@blog.com",
        "gender": "Female"
    },
    {
        "id": 73,
        "first_name": "Ferdinand",
        "last_name": "Smetoun",
        "email": "fsmetoun20@discovery.com",
        "gender": "Male"
    },
    {
        "id": 74,
        "first_name": "Zebulen",
        "last_name": "Storck",
        "email": "zstorck21@dedecms.com",
        "gender": "Male"
    },
    {
        "id": 75,
        "first_name": "Bank",
        "last_name": "Martinovic",
        "email": "bmartinovic22@t-online.de",
        "gender": "Male"
    },
    {
        "id": 76,
        "first_name": "Orion",
        "last_name": "Sidwell",
        "email": "osidwell23@guardian.co.uk",
        "gender": "Male"
    },
    {
        "id": 77,
        "first_name": "Allie",
        "last_name": "Brownsword",
        "email": "abrownsword24@hubpages.com",
        "gender": "Male"
    },
    {
        "id": 78,
        "first_name": "Roshelle",
        "last_name": "Icom",
        "email": "ricom25@skyrock.com",
        "gender": "Female"
    },
    {
        "id": 79,
        "first_name": "Gerome",
        "last_name": "Vass",
        "email": "gvass26@dropbox.com",
        "gender": "Male"
    },
    {
        "id": 80,
        "first_name": "Lois",
        "last_name": "Marquis",
        "email": "lmarquis27@hatena.ne.jp",
        "gender": "Female"
    },
    {
        "id": 81,
        "first_name": "Dael",
        "last_name": "Freiburger",
        "email": "dfreiburger28@vinaora.com",
        "gender": "Female"
    },
    {
        "id": 82,
        "first_name": "Ebonee",
        "last_name": "Velti",
        "email": "evelti29@bloglovin.com",
        "gender": "Non-binary"
    },
    {
        "id": 83,
        "first_name": "Cherice",
        "last_name": "Jacomb",
        "email": "cjacomb2a@wiley.com",
        "gender": "Female"
    },
    {
        "id": 84,
        "first_name": "Thomas",
        "last_name": "Willcott",
        "email": "twillcott2b@shareasale.com",
        "gender": "Male"
    },
    {
        "id": 85,
        "first_name": "Helenka",
        "last_name": "Wicher",
        "email": "hwicher2c@booking.com",
        "gender": "Female"
    },
    {
        "id": 86,
        "first_name": "Issie",
        "last_name": "Dionisetto",
        "email": "idionisetto2d@icq.com",
        "gender": "Female"
    },
    {
        "id": 87,
        "first_name": "Shellie",
        "last_name": "Dobrovolski",
        "email": "sdobrovolski2e@amazon.com",
        "gender": "Female"
    },
    {
        "id": 88,
        "first_name": "Amie",
        "last_name": "Harvison",
        "email": "aharvison2f@techcrunch.com",
        "gender": "Female"
    },
    {
        "id": 89,
        "first_name": "Coleman",
        "last_name": "Crilley",
        "email": "ccrilley2g@ibm.com",
        "gender": "Male"
    },
    {
        "id": 90,
        "first_name": "Gaye",
        "last_name": "Husbands",
        "email": "ghusbands2h@shinystat.com",
        "gender": "Female"
    },
    {
        "id": 91,
        "first_name": "Editha",
        "last_name": "De Vaan",
        "email": "edevaan2i@quantcast.com",
        "gender": "Female"
    },
    {
        "id": 92,
        "first_name": "Lesli",
        "last_name": "Pimerick",
        "email": "lpimerick2j@omniture.com",
        "gender": "Female"
    },
    {
        "id": 93,
        "first_name": "Samara",
        "last_name": "Aslen",
        "email": "saslen2k@bbb.org",
        "gender": "Female"
    },
    {
        "id": 94,
        "first_name": "Hugo",
        "last_name": "Garlee",
        "email": "hgarlee2l@merriam-webster.com",
        "gender": "Male"
    },
    {
        "id": 95,
        "first_name": "Shela",
        "last_name": "Binnes",
        "email": "sbinnes2m@sitemeter.com",
        "gender": "Female"
    },
    {
        "id": 96,
        "first_name": "Kahlil",
        "last_name": "Theodore",
        "email": "ktheodore2n@edublogs.org",
        "gender": "Male"
    },
    {
        "id": 97,
        "first_name": "Carce",
        "last_name": "Cheale",
        "email": "ccheale2o@rambler.ru",
        "gender": "Male"
    },
    {
        "id": 98,
        "first_name": "Jacquette",
        "last_name": "Maccari",
        "email": "jmaccari2p@constantcontact.com",
        "gender": "Female"
    },
    {
        "id": 99,
        "first_name": "Forester",
        "last_name": "Delve",
        "email": "fdelve2q@army.mil",
        "gender": "Male"
    },
    {
        "id": 100,
        "first_name": "Newton",
        "last_name": "Rooper",
        "email": "nrooper2r@qq.com",
        "gender": "Male"
    }
]

employeeTable.innerHTML = `
<tr>
    <td colspan="4">No Data</td>
</tr>`;

// create pagination HTML blocks

var currentPage = 1;


var paginationCount = employees.length / 20;

var pagination = document.querySelector("#pagination");

function updateList(arr) {
    var itemRange = currentPage * 20;
    employeeTable.innerHTML = "";
    if (itemRange == 20 || currentPage == 1) {
        for (var i = 0; i < itemRange; i++) {
            rows = `
            <tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].first_name + arr[i].last_name}</td>
                <td>${arr[i].email}</td>
                <td>${arr[i].gender}</td>
            </tr > `;
            employeeTable.innerHTML += rows;
        }
    } else if (itemRange > 20) {
        for (var i = itemRange; i <= itemRange + 20 - 1; i++) {
            rows = `
            <tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].first_name + arr[i].last_name}</td>
                <td>${arr[i].email}</td>
                <td>${arr[i].gender}</td>
            </tr > `;
            employeeTable.innerHTML += rows;
        }
    }
}
var getTableData = updateList.bind(this, employees);
getTableData();

var prev = document.createElement("button");
prev.className = "nav prev-button";
prev.textContent = "Prev";
pagination.appendChild(prev)


for (var i = 1; i <= paginationCount - 1; i++) {
    var index = document.createElement("button");
    index.className = "pagination-index";
    index.innerText = i;
    index.id = "item-" + i;
    pagination.appendChild(index);

    index.addEventListener("click", (event) => {
        currentPage = Number(event.target.innerHTML);
        updateList(employees);

        var pageIndexes = document.querySelectorAll(".pagination-index");
        pageIndexes.forEach((index) => {
            if (currentPage == Number(index.innerHTML)) {
                index.classList.add("active")
            } else {
                index.classList.remove("active")
            }
        });
    });
}

var next = document.createElement("button");
next.className = "nav next-button";
next.textContent = "Next";
pagination.appendChild(next);


prev.addEventListener("click", () => {
    if (currentPage >= 1) {
        currentPage -= 1;
    }
    let idIndex = document.getElementById("item-" + currentPage);
    idIndex.click();
    getTableData();
});

next.addEventListener("click", () => {
    currentPage += 1;
    updateList(employees);
    let idIndex = document.getElementById("item-" + currentPage);
    idIndex.click();
});

var firstItem = document.getElementById("item-1")
var indexes = document.querySelectorAll(".pagination-index");
var lasItem = indexes[indexes.length - 1];

currentPage == 1 ? function () {
    firstItem.click();
    prev.style.visibility = "hidden"
}() : "";

window.addEventListener("click", function () {
    currentPage == 1 ? function () {
        firstItem.click();
        prev.style.visibility = "hidden";
    }() : currentPage > 1 ? function () {
        prev.style.visibility = "visible"
    }() : null;


    currentPage == indexes.length ? function () {
        console.log(currentPage)
        next.style.display = "none";
    }() : function () {
        next.style.display = "block";
    }()
})

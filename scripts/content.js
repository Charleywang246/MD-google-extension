document.title = "這裡被千夏醬入侵~~了!"

switch(document.URL){
    case "https://crm.mingdao.edu.tw/CRM/index.asp":
        const stu_img = document.querySelector("body > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1) > img");
        stu_img.src = "./images/stu_img.png";
        const intro = document.querySelector("body > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2) > font > strong");
        intro.innerHTML = "千夏醬(??????)";
        const welcome = document.querySelector("body > table:nth-child(1) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(1) > td > font > strong");
        welcome.innerHTML = "千夏醬 您好"
        break;
}
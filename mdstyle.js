function mdstyle(data){
    return `
# ๐ ${data.project}
================================

## ๐ป -> Author:  
                __${data.author}__
## โน๏ธ -> Contact: 
                  ${data.contact}
## ๐ -> GitHub: 
                  ${data.github}
                  
                  
# Table of contents
1. [Description](#description)
2. [Why this project is here?](#why)
3. [Howto](#howto)
4. [Features](#features)
5. [Credits](#credits)                  



# ๐ Description <a name="description"></a>
----------------	
${data.description}


# โโ Why this project is here? <a name="why"></a>
-------------------------------
  ${data.why}
        **๐งฉ -> Technologies** 
          ${data.technologies}


# ๐คนโโ๏ธ This is a how to for the project :-) <a name="howto"></a>
-----------------------------------------
###      ->  
            ${data.howto}
      
# ๐ Features: <a name="features"></a>
--------------
      ->  
            ${data.features}

## ๐  Credits: <a name="credits"></a>
### ${data.Credits}

------------------
<3 Thank you :-)
------------------


`;
}

module.exports = mdstyle;

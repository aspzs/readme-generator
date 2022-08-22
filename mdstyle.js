function mdstyle(data){
    return `
# 📌 ${data.project}
================================

## 🚻 -> Author:  
                __${data.author}__
## ℹ️ -> Contact: 
                  ${data.contact}
## 🎒 -> GitHub: 
                  ${data.github}
                  
                  
# Table of contents
1. [Description](#description)
2. [Why this project is here?](#why)
3. [Howto](#howto)
4. [Features](#features)
5. [Credits](#credits)                  



# 📝 Description <a name="description"></a>
----------------	
${data.description}


# ❔❔ Why this project is here? <a name="why"></a>
-------------------------------
  ${data.why}
        **🧩 -> Technologies** 
          ${data.technologies}


# 🤹‍♀️ This is a how to for the project :-) <a name="howto"></a>
-----------------------------------------
###      ->  
            ${data.howto}
      
# 🚀 Features: <a name="features"></a>
--------------
      ->  
            ${data.features}

## 🛠 Credits: <a name="credits"></a>
### ${data.Credits}

------------------
<3 Thank you :-)
------------------


`;
}

module.exports = mdstyle;

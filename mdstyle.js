function mdstyle(data){
    return `
# 📌 ${data.project}
================================

## 🚻 -> Author:  
                __${data.author}__
## ℹ️ -> Contact: 
                  ${data.contact}


# 📝 Description
----------------	
${data.description}


# ❔❔ Why this project is here? 
-------------------------------
  ${data.why}
        **🧩 -> Technologies** 
          ${data.technologies}


# 🤹‍♀️ This is a how to for the project :-)
-----------------------------------------
###      ->  
            ${data.howto}
      
# 🚀 Features:
--------------
      ->  
            ${data.features}

## 🛠 Credits:
### ${data.Credits}

------------------
<3 Thank you :-)
------------------


`;
}

module.exports = mdstyle;

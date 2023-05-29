//初始化文字轉語音
const speechInstance = new SpeechSynthesisUtterance();
const langTextobj = [
    { LangID: "default", LangName: "", Langplaceholder: "你好，請在此輸入文字" },
    { LangID: "zh-TW", LangName: " (繁體中文─台灣)", Langplaceholder: "你好，請在此輸入文字" },
    { LangID: "ja-JP", LangName: " (日本語)", Langplaceholder: "こんにちは、ここで文字を書いてください" },
    { LangID: "zh-CN", LangName: " (简体中文─中国)", Langplaceholder: "你好，请在此输入文字" },
    { LangID: "en-US", LangName: " (English US)", Langplaceholder: "Hello, please enter text here" },
    { LangID: "zh-HK", LangName: " (粵語─香港)", Langplaceholder: "你好，請在此輸入文字" }
]
var recognition; // 語音辨識物件
var recognizing = false;    //是否辨識中
var final_transcript="";

function Inithansu(SLangName, SAIerName, STempBox) {
    // 等待onvoiceschanged事件觸發
    speechSynthesis.addEventListener("voiceschanged", () => {
        // 取得所有可用的語音腳色
        var voices = speechSynthesis.getVoices();

        //新增擁有的語系
        let LangArr = new Set();
        voices.forEach(item => {
            if (!LangArr.has(item.lang)) {
                LangArr.add(item.lang);
                let LangTobj = ChangLangNam(item.lang);
                $(`#${SLangName}`).append(`"<option value='${item.lang}'>${item.lang}${LangTobj.LangName}</option>"`);
                $(`#${SLangName}2`).append(`"<option value='${item.lang}'>${item.lang}${LangTobj.LangName}</option>"`);
            }
        });

        speechSynthesis.getVoices().filter(voice=> {
            return voice.lang === $(`#${SLangName}`).val();
        }).forEach(item => {
            $(`#${SAIerName}`).append(`"<option value='${item.voiceURI}'>${item.name}</option>"`);
        });

        //根據語系載入角色
        $(`#${SLangName}`).on("change", () => {
            $(`#${SAIerName}`).empty();
            speechSynthesis.getVoices().filter(voice => {
                return voice.lang === $(`#${SLangName}`).val();
            }).forEach(item => {
                $(`#${SAIerName}`).append(`"<option value='${item.voiceURI}'>${item.name}</option>"`);
            });
            $(`#${STempBox}`).attr("placeholder", ChangLangNam($(`#${SLangName}`).val()).Langplaceholder)
        });
    });
}
function btnToSpeech(slang, sVoice, sText, OptVolume, OptRate, Optpitch, sDefText) {
    speechInstance.lang = slang;
    speechInstance.voice = speechSynthesis.getVoices().filter(voice => { return voice.voiceURI === sVoice;})[0];
    speechSynthesis.cancel();
    speechSynthesis.resume();

    speechInstance.text = (sText == "") ? sDefText : sText;

    speechInstance.volume = OptVolume;
    speechInstance.rate = OptRate;
    speechInstance.pitch = Optpitch;
    speechSynthesis.speak(speechInstance);
}
function ChangLangNam(inLangID) {
    let RetObj = langTextobj[0];
    langTextobj.forEach(item => {
        if (inLangID === item.LangID) RetObj=item;
    });
    return RetObj;
}
function Initkaku(SToText, SToStop, STag, SResult, SProcedure) {
    // 是否支援語音辨識 window.webkitSpeechRecognition
    if (!('webkitSpeechRecognition' in window)) {  
        $(`#${SToText}`).hide();
        $(`#${SToStop}`).hide();
        $(`#${STag}`).removeClass("blinkMask").addClass("alert alert-danger");
        $(`#${STag}`).html("<b>本瀏覽器不支援語音辨識，請更換或更新瀏覽器！</b>");
        return null;
    } else {
        $(`#${SToText}`).show();
        $(`#${SToStop}`).hide();
        $(`#${STag}`).hide();
        recognition = new webkitSpeechRecognition(); // 建立語音辨識物件 webkitSpeechRecognition
        recognition.continuous = true; // 設定連續辨識模式
        recognition.interimResults = true; // 設定輸出中先結果。

        // 開始辨識
        recognition.onstart = () => {
            recognizing = true; // 設定為辨識中
            $(`#${SToText}`).hide();
            $(`#${SToStop}`).show();
            $(`#${STag}`).show();
            //初始化辨識資料
            $(`#${SResult}`).val("");
            $(`#${SProcedure}`).val("");
            final_transcript = "";
        };

         // 辨識完成
        recognition.onend = () => {
            recognizing = false; // 設定為辨識中
            $(`#${SToText}`).show();
            $(`#${SToStop}`).hide();
            $(`#${STag}`).hide();
            $(`#${SResult}`).val(final_transcript); 
        };

         // 辨識有任何結果時
        recognition.onresult = event => {
            let interim_transcript = ""; // 中間結果
             // 對於每一個辨識結果
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    // 如果是最終結果加入最終結果中
                    final_transcript += event.results[i][0].transcript;
                } else {
                     // 反之將其加入中間結果中
                    interim_transcript += event.results[i][0].transcript;
                }
            }

            $(`#${SProcedure}`).val(interim_transcript);
            
            if (final_transcript.trim().length > 0) {
                // 顯示最終辨識文字
                $(`#${SResult}`).val(final_transcript);
                recognition.stop();
            }
        };
        return recognition;
    }
}
function SpeechToText(slang) {
    if (recognizing) {
        recognition.stop();
    } else {
        recognition.lang = slang; // 設定辨識語言
        recognition.start();
    }
}
// set up basic variables for app
var record = document.querySelector('.record');
var stop = document.querySelector('.stop');
var download = document.querySelector('.download');
var soundClips = document.querySelector('.sound-clips');
var senClass = document.querySelector('.sen');
var mainSection = document.querySelector('.main-controls');

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function move(progress) {
  var elem = document.getElementById("myBar");
  var width = 5 * progress;
  elem.style.width = width + '%';
  //var id = setInterval(frame, 10);
}


// disable stop button while not recording

stop.disabled = true;
var SpeakerID = prompt('Please write your ID in the form of: age_m/f_name\nWhere age is your age, m/f is male or female, name is your name. \nExample: 50_m_karim', '50_m_karim');
var sentences = "0#sJuDgqKkASLYMFYuLikCIuHPFLdweAVEZQ$1#QzCOKHNyQyTrmsMaIDgPmkTpyTmilYQUJYoZCzbHJuANiup$2#zLloznosZolRspBUtFUqhtNdGHKnO$3#hQOVsRwAJmKhTfOKORsZTIjjnkmijfHFNgyItwXOZOPxMM$4#GPcOAjOhnsVWBtBbcGaTiwQ$5#LArTMjDzVsbbHAIzRHqsmgejVFlnpuSccvK$6#EWjhuPPBdmdYCmUxvqUrwK$7#CFBomZhBlvZfXjmOCHjXmlqPrkSNdDgVmkBT$8#CsEmiMjaFWTEZWkGEiIhBmSUWickesjCBd$9#CVEeKaKqHpQTLsXHlSaSQsiLogpQfmTVsykkPrJNNVyCiNB$10#WpMJnRcsRaYpWAIIsccNjVpIMeTTqkNSbeRiVzPdObnBSteEQT$11#gkilbTJorfkXwIXRPQYcGRGPTToAFtySD$12#jRNpHZfoKFrAfongxiPnioZICdfmXYwGbsitEAinQdPiZ$13#UFaVQNakIUidwkRIzRwrmKbgVSUAzxAdU$14#IcEPuCTqcDBefXoAQnnauBhXZRyhMbRRvkHSvNikLCubzKWJI$15#dpMSTXEzBKjRsHQPOctHoWAfHFDHlb$16#hjIvWssczhUyZMrivoInuGXNcZShCDhOJ$17#htTUQQouUffquBoHjanFqGsetsylVflFevJhSDEkYzFW$18#tHYyWDkpDeNbJElubObNCWCGqZcgWMfEqm$19#bXKCURnsDQTalxlulyeAucYEbYdHmkiXFcbq$20#EQtnsaESwTRhNCXfnamjN$21#awUJMTKdDuGhdzxbYMjEIoKrhJUmzFmW$22#hHKVlAlshXMBKzhALXgCodVms$23#xfWewoDuqPCpJYUgVXcaNnyrHsNlGyWuyjtyESKggeB$24#wNhfUjxLQPUsRZCtxuRLwLIAEXYnCoTsMdRo$25#QwNRQWodGRfzIWRiqlxPbkSkqMjmgoUF$26#jKRuszNvrVwyWRIuiEqOZpbefeVJEAS$27#kMyJAmuQZvAxcWJIcoOkkCWQCsxterRVMgsYtYrxxGspbwsFh$28#hQdaCJuOCFCxjHcoIFBgBKF$29#oOKuXOXmLYKTSLdHFalgMOXeLBbDjXlsmkDh$30#htVOboEYaRKxjPKrXnEUQcidGgpKVUuavph$31#tSQKOEVOOlSmnVacAQogKEarj$32#EXDIjnIaxMywHJAxUglwSQTcWBqxSUmhnoC$33#kiilYeEvqYIcquPMypUttHjytfVsCjlskDr$34#GhNXMbcrKYiUsNSIrYUBjXoSk$35#caCMBCoBYsoWpWocEByrmCeZPEwbkiIe$36#vFCRrMupMQvrUFocXjqNbFPQkqBxXSVAYQcReS$37#PVGkBWrexVptotufzXYuBIQbgCppFKerLkxNl$38#IoCPhKWktVsZozLAlELrRxsgfZSLsxhAFsgtolVRGvQ$39#eDNucJOrjOsqlyetKGiYvcnJQzXQ$40#tKZZepuZGHIKuhWrNfzZJvvBoMeDsMMPDYvaChOBhTiV$41#dpwOLCSZPcfXEGkiTnLfxtSGt$42#rvspItrKkZXNmxgvcbCFifRggXMAi$43#GEAscdlvxjwPleYllGVxmP$44#GmlQksxLDBVTUuGQFUOPEjNVBtdUPMdjDvE$45#GxHUUrkGeoZqiyQPaQmyyPvjIUiTJeEJzyh$46#idJxjMCrFoOouzUhQDsmBcaFrKSJMCZrSuNJdyCZsXyeR$47#tXLnpQRdyUFilDCxbvpecEjygvNQbkYAKzzC$48#yhYOOyVUAjujaoXDJceyVJWD$49#NqVwtXjSDilQfZpXCvYdzZsfrNqjmrRexroQQ$50#ACaHLDOAWjNXQJuwcGFISINSSytoDUs$51#YJQsUiiNgWorYCeRIOcgHykmzLoHopNmbJhovElMyy$52#sZVVtmzOybwBbTORfwLueLtppWUEKJrbaQtSajKMZej$53#vXPDwCczBSieVAkCGgyKZ$54#yfzdOUtWxgxTunbVPiBsBadefExqGnQk$55#HFodCihwyfpfYOUdAmVpSNwlIgJJJEdmIyRDJ$56#JGKjspvZsOCmUmliCewPlBYQExrslBOZSFOoVoXZYeTfde$57#ZJUJGRJujZJBtFRneUryksEvgxGrituSNNHoZt$58#CskcgHekJDWNZuYFaHksy$59#bVAshEnorbcGVOshEUsSMyBoJeBLkEYIMcP$60#gBAFawGSMZYlZLzImLStU$61#KWqiSTfBjNLGsmVBCDkdHMMAjkWkuKmSN$62#oezbtfndeohzXXkcePopDHhrAQvLTZEKMTL$63#BcdiLWodeXWEBpoMnYTV$64#ERhAwSgajlXjHnSgteUglsgWXuUXcmfqceGLDoArcxaEZXOoF$65#uhWgquEQzcAiNiammFMKvkqtpKeLIYKU$66#VDCyZTnMWKBXGrVRujWzzoEoFYfGVDbwUJdFESyvleC$67#YZOGsiqtwUITLsySBZvhrBTIBslGt$68#ejlrUBRUfadXxIkhUyuMDlyQPjIMagqaxMbawxjeGtcZQuKZtm$69#UvVRahWrnlszhdFTXJGqJrTuAIfaFRALaaB$70#QysFyGhabarwqwaBVfWnYmJXKZObGBmKZlCIvrxq$71#qYGynigoEnDQmiqcRPYhGOYscBaMgIYiwWIIOfshJJVhlImc$72#jkIKWhzgRxjxiERpXwQfVAmYKgSFSqUBCnXeYdSc$73#sgBfzNkQHsXIMlZDOjwdvtIZRcLIzyljMgBktrJuCdfUgU$74#jNgaWiIaNMHXkoyAfoQeuV$75#yBkxgjivxrAzXktLzswuIRBRdbMhoZytBHRRiknXCQfF$76#dPQjJOlUArPCouGyAojNMerlodmoS$77#vaBZcgWTbQucMPHfoUdadhJGJBVZvyHFUPoTFwSKbTvJIsDgsE$78#GDHwTmfeoXBjyDpUqtNsBuiNjLDTpATOanFOcdfuB$79#LLuwHixeAeSRQubuRqiOvtspSfSrxV$80#USayEfAIuqytLHlnFFxAPvKIZWYwlFEGzcGrXI$81#fRqWawoHRbcWaqUgjadhDBMWkFjfTywecco$82#SBjWiucWwcNwTZpqqHSABYjOwvKrwhSBBhSMI$83#dXXHQWsqmSJsiJyBkqMZMipwHhdcMfB$84#vzKprlOOIQaxwXRwGbjnPps$85#DSVpqBqeRIDyRIkTYMYwvOcrt$86#XXedXMxPBZtWxAbhlRjsjcqMCSEBrraRIKRkvqJnGmXSj$87#trLjhIiPQbtKfrZzfnTQMoCl$88#LmNUNvSgyVCYtNhDuhVs$89#awDkRglUBdfGeNYutuTYZUWvNTwzbTqVq$90#JhMOHFFZmtQREidEltcPkqLDFvHyaJugsJQzDBUJDvxqD$91#ESLzQiWpcarpMlYDBnLlNuXSymGSKbrGGmPssaGgLqYHo$92#nMSHQoEJpCVzdjJsWBHIVx$93#QtgqlLrcUdnsvMTibymKWtQeiavkyLXzUdNOXRBuISLT$94#kwETZzdXxxeFIAHSQsRPPVtWHBRJr$95#qHBKHUiunxmUQdzwQmVOZFJIIus$96#KRvZZgTbyIUJYxwwXlAcrY$97#sqLTETUOFRGoXlxAkUSeOVUCOIbTsjGaiHIPGezbFbJFFBllR$98#xAnfhBPieZBVKsMZhDcchbEjQkRKQplqiOXEEUdMwJM$99#RrVQJZlfNlzfMAjXsigdUXEmcdtuIuKUFaQCDR".split("$");

var sentencesDis = shuffle(sentences).slice(0, 20);

var j = 0;
var progressText = document.getElementById("progressText");
progressText.textContent = j + "/20";

var sentence = sentencesDis[j].split("#")[1];

//main block for doing the audio recording
if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.');

  var constraints = { audio: true };
  var chunks = [];

  var onSuccess = function (stream) {
    var mediaRecorder = new MediaRecorder(stream);

    var senContainer = document.createElement('article');
    var sen = document.createElement('sen');
    sen.textContent = sentence;

    senContainer.appendChild(sen);
    senClass.appendChild(senContainer);


    record.onclick = function () {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";

      stop.disabled = false;
      record.disabled = true;
    }

    stop.onclick = function () {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      record.style.background = "";
      record.style.color = "";
      // mediaRecorder.requestData();

      stop.disabled = true;
      record.disabled = false;
    }


    mediaRecorder.onstop = function (e) {
      console.log("data available after MediaRecorder.stop() called.");

      var clipContainer = document.createElement('article');
      var clipLabel = document.createElement('p');
      var audio = document.createElement('audio');
      var deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';

      var clipName = (sentencesDis[j].split("#"))[0] + "_" + SpeakerID;
      clipLabel.textContent = clipName;

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);


      audio.controls = true;
      var blob = new Blob(chunks, { 'type': 'audio/wav; codecs=opus', 'name': clipName });
      chunks = [];
      var audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");
      deleteButton.onclick = function (e) {
        evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
      //HEREEE
      /*
            clipLabel.onclick = function () {
              var existingName = clipLabel.textContent;
              var newClipName = prompt('Enter a new name for your sound clip?');
              if (newClipName === null) {
                clipLabel.textContent = existingName;
              } else {
                clipLabel.textContent = newClipName;
              }
            }
            */
      download.onclick = function () {
        if (stop.disabled)
          saveAs(blob, clipName);
        j++;
        if (j < 21) {
          move(j);
          progressText.textContent = j + "/20";
        }

        if (j < 20) {
          sentence = sentencesDis[j].split("#")[1];
          sen.textContent = sentence;
        }
        else {
          alert("Thank you for your time!");
          location.reload();
        }
      };
    }

    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    }
  }

  var onError = function (err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
  console.log('getUserMedia not supported on your browser!');
}


window.onresize = function () {
  
}

window.onresize();
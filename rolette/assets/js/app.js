const database = {};
database["set"] = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
database["get"] = (name) => {
  let val = null;
  try {
    val = JSON.parse(localStorage.getItem(name));
  } catch {}
  return val;
};
database["remove"] = (name) => {
  return localStorage.removeItem(name);
};
database["clear"] = () => {
  return localStorage.clear();
};
let gameoverd = false;
let teyyip = false;
function Speak(msg, frc) {
  if (frc) {
  } else {
    if (teyyip) {
    } else {
      return;
    }
  }
  if ("speechSynthesis" in window) {
    console.log("alh");
    var voices = window.speechSynthesis.getVoices();
    var spk = new SpeechSynthesisUtterance();

    // Set the text.
    spk.text = msg;

    // Set the attributes.
    spk.volume = 1;
    spk.rate = 1;
    spk.pitch = 1;

    // If voices are available, select the default voice.
    if (voices.length > 0) {
      spk.voice = voices[0];
    }

    // Queue this utterance.
    window.speechSynthesis.speak(spk);
  }
}

const yazilar = [
  "alicengizoyunları",
  "Nahçivanda doğdum, Ben köylüyüm. - Üstad Alizade",
  "O Allah The Almighty (yalanbilgi) - Sami Yusuf",
  "mirsadmuratsarioglu_1453",
  " Din penis gibidir. Sahip olabilirsin, sahip olmakla gurur duyabilirsin. Ancak! Onu toplumun içinde gösterme, onu çocukların kafasına zorla sokmaya çalışma, onunla kanun yazma ve lütfen onunla düşünme. ",
  "Çalışan demir ışıldasaydı yarrağım florasan olurdu",
  " Yarı yâr olanın yar sarar yarasını, yarı yâr olmayanın felek siker anasını. ",
  " Hayat sik gibidir, bazen aşşağı, bazen yukarı. ama hiç bi zaman sonsuza kadar sert değildir! ",
  "sevmeyi beceremedim, becerilmeyi sevdim. - alizade",
  " Aşk dediğin şey sevdiğin birinin sikini senin amına sokmasından ibarettir. ",
  " İşleyen demir paslanmazmış Ama sikim kurudu - a....",
  " Laf sokarım derinden sikin oynar yerinden ",
  "  Ateisti bile cennetime alırım ama animecileri asla (Allah) ) ",
  " Ateşin odunu yakıp kül ettiği gibi animelerde insanın zekasını yakıp yok eder (Hadis-i Şerif) ",
  " Seytan diyor ki Namaz kilmayan Babamdir, israf eden Kardesimdir, imam dan once secdeye egilen Oglumdur, Misafir gorunce sinirlenen kadin Annemdir, Acik ve ciplak gezen bayan esimdir, Besmele'siz yemege baslayan Evladimdır, Bu bilgiyi baskasiyla paylasan Düsmanim'dir Bu bilgiyi ogrenip de susan dostumdur RABBIM CUMLEMIZI SEYTAN DAN UZAK KULLARINDAN EYLESIN ",
  "Dünyanın 🌍💅 Çivisi çıkmış ✈️😢🩻 Çivisi ✨💖 Erkekler erkekliğini 🤨🤑 Kadınlar kadınlığını 🥷🏻🩻 bilecek 🤐🫡😶‍🌫️ Arka kapım ✈️🚪 aralıkğğ 🍆🍆 Nedir bu kalabalık 📕💃🏻",
  "Bu gerçekten, inanılmaz! - (D)Evrim Ağacı",
  "Bu başka bir videonun konusu - (D)Evrim Ağacı",
  "3 kuruşluk hayat bir kere versen nolur yani ? ",
  "a.... küfür etmicektik",
  "benimki miraça kadar, mirsadmuratsarioglu_1453'ün götüne kadar.",
  "Bak GEY900 üm var aramızdaki farka bak a.. p... bak x im var beatsim var elim ayağım nerde vibratör titriyor - Deha Tuzcu",
  "baybay komutanim anem banyo yaptircak",
];
let revents_1 = [
  "Karın",
  "Kocan",
  "oğlun",
  "kızın",
  "Annen",
  "Deha tuzcu",
  "Sokaktaki adam",
  "Eren karayılan",
  "mirsadmuratsarıoglu_1453",
  "eskisehir.saygideger.shitpost",
  "sami yusuf",
  "Eski karın",
  "5. karın",
  "aişe",
  "muamed",
  "dinci",
  "deha tuzcu",
  "enes baturun çarptığı ağac",
  "sikilen egzoz borusu",
  "kemal kılıçdaroglu",
  "götüne motor takılıp araba yapılan hacı murat efendi",
  "alizade",
  "ibn haldun",
  "yarrak-ül gaffariye",
  "üstad necip fazıl",
  "2. elizabeth",
  "prens salmanın siki",
  "karısı gözünün önünde sikilirken ezan okuyan imam (öyle bi okur ki ağlatır)",
  "Ebu cehil",
  "en çok asılan dekoratif ürün",
  "93 yaşındaki eşref amca",
  "tablet reis",
  "ortadoğunun en iyi pilotu",
  "bin ladin ailesi",
  "filistini destekleyen anime kızı (2 dk önce infilak etti)",
  "israil ajanı güvenlik",
  "filistin ajanı güvenlik",
  "Kalın Gelir nickli din kardeşimiz",
  "doeda admini nickli din kardeşimiz",
  "bebek görünce nickli din kardeşimiz",
  "baciyaran4169 nickli din kardeşimiz",
  "baldızterleten4169 nickli din kardeşimiz",
  "azginboga5568 nickli din kardeşimiz",
  "borsa kaplanı",
  "balici",
  "juncooka_asigim_sik_beni_🍆❤️‍🔥",
  "Mihriban 44 İslami evlilik isteyen dul hatun",
  "evrim ağacı",
  "sakso5tl",
];
let revents_2B = [
  "Götünü pazarladı ve sana XYZ TL getirdi+",
  "Anasını pazarladı ve sana XYZ TL getirdi Ama yoldayken soyuldun ve XYZ TL paran gitti.-",
  "Sana bütün parasını verdi ve sana XYZ TL getirdi+",
  "Sülalenden birini sikti ve hastane masraflarını sana kitledi. XYZ TL paran gitti-",
  "Sıra bende dedi ve seni sikti XYZ TL paran gitti-",
  "Sıra bende dedi ve seni sikti bu iş sana XYZ TL getirdi+",
  "Bir anda XYZ TL paranı diyanet işlerine bağışlamaya karar verdi ve bu parayı senden çaldı-",
  "Sülalenden birine vibratör soktu ve hastane masraflarını sana kitledi. XYZ TL paran gitti-",
  "Şarkı çıkartmak için paranı çaldı XYZ TL paran gitti-",
  "Kendini beykamber efendimiz sandı ve bütün paranı iyilik için istedi sende XYZ TL para verdin-",
  "Yeni dükkan açmak için senden XYZ TL para aldı-",
  "Bütün paranla coca colayı boykot etti ve israil ajanları adresi karıştırıp seni öldürdü.0",
  "Yeni sevgili buldu ve senden XYZ TL para çaldı-",
  "Arabanı çalıp reisimizin sarayına girdiği için ömür boyu hapise atıldın.0",
  "Basur olup XYZ TL sakladığın paranla basur ameliyatı oldu-",
  "Senden apple vision pro aldı ve içinden hıyar çıktı. Bu yüzden evine misafir olarak, bir sümmeye gönderdi. Sümmeye kızımız, infilak etti ve öldün0",
  "Sokakta giderken aklına bir fikir geldi ve lucifer michaelson (ibne olan) ile sevgili oldu. bu iş sana XYZ TL para getirdi.+",
  "Adalet bakanı oldu ve ona pandik attığını hatırladı. Hakkında aranma kararı çıkartıldı.1",
  "Ezan okunurken bir anda senin arabanın önünde namaz kılmaya başladı ve sen onu ezdin.0",
  "Arabasındaki ilahi ile dans ederken bir anda önüne çıktın ve seni ezdi.0",
  "Elon musk'a sakso çekti ve sana XYZ TL para getirdi.+",
  "Kanepenin köşesinde sabahlarken girişimci aklını kullanarak yeni bir iş başlatı ve senden XYZ TL para çaldı.-",
  "Dans eden kediyi ezdi ve polisler zenci olduğun için senin ezdiğini sandı.1",
  "Uçağa bomba sokmaya çalıştı, bu yüzden slotların şansı rastgele bir şekilde etkilendi.*",
  "Togg ile giderken arabasının önüne atladın ve 'yerli otomobilimiz ile beni ez' dedin oda seni ezdi.0",
  "Azdı ve seni sikti, XYZ TL kazandın.+",
  "Camide imamın ayaklarına boşaldı ve polise ifade verirken senin ona otuzbir (ayip) çektiğini söyledi bu yüzden polis sana XYZ TL para cezası yazdı.-",
  "Sokakta LGBT yürüyüşüne katıldığı için slotların şansı rastgele bir şekilde etkilendi.*",
  "Dağda eşşek sikerken yakalandı ama suçu senin üstüne yıktı Aranma seviyen değişti.1",
  "X platformunda islama sövdüğü ortaya çıktı ve bunu kuzenim yazdı dedi. kuzeni sen olduğun için aranma seviyen değişti.1",
  "Yutupta porno izlerken yakalandı ve bilgisayarı sana verdi polisler seni arıyor. Aranma seviyen değişti.1",
  "İnternette xbox vs playstation kavgası çıkardığı için slotların şansı rastgele bir şekilde etkilendi.*",
  "Sosyal medyada canlı yayın açmayı bırakıp senden XYZ TL para çaldı.-",
  "Sosyal medyada canlı yayın açıp hottube yayını yaptı ve sana olan XYZ TL borcunu ödedi.+",
  "Döndürüp kendine sokma yayını açıp sana XYZ TL para ödedi.+",
  "İlahi dinlerken miraça yükseldiğinden, slotların şansı rastgele bir şekilde etkilendi.*",
  "Prenses pembesi amı olduğunu idda etti ama bahtından kara çıktı ve sende bu ama bakmak için görevlendirildin ödülün ise XYZ TL.+",
  "31 çekerken siki kırıldı hastane masraflarını sana kitledi XYZ TL gitti.-",
  "Uçan dildo yapmak için senden XYZ TL para çaldı.-",
  "Zeynep bastık fanı olduğu için hapise atılacaktı ama senin spotify hesabından dinlediği ortaya çıktı bu yüzden aranma seviyen değişti.1",
  "Escorta gitmek için arabanı çaldı buda sana XYZ TL'ye patladı (sümmeyekizimiz).-",
  "Spotify premium pro max aboneliğini senin kartından yaptı buda sana XYZ TL'ye patladı.-",
  "Yanlışlıkla evine kargo söyledi sende o kargoyu sattın hesabına XYZ TL para geldi.+",
  "sülalenden birini öldürdü ve XYZ TL kadar mirası sana kaldı.+",
  "Ruletin altına XYZ kadar tl düşürdü sende çaldın.+",
  "Sana büyü yaptı ve yolda giderken cebinden XYZ TL düştü.-",
  "Padişah oldu ve bir ferman imzaladı, fermanda senin adın geçiyor ve gördüğünüz yerde sikin yazıyor.1",
];
let revents_2P = [
  {
    Content: "Seni sikmek istiyor",
    Yes: "İsteğini gerçekleştir",
    OnYes: [
      "Senden XYZ TL çaldı.-",
      "Seni bayılttı ve senin telefonundan ali babacanı aradı.1",
      "Sana orospu muamelesi yaptı ve sana XYZ TL para ödedi.+",
    ],
    No: "Onu döv",
    OnNo: [
      "Feminist obezler derneğini çağırdı ve seni öldürdüler.0",
      "Eline yataktaki dildoyu geçirdin ve kafasına vurdun. XYZ TL kazandın.+",
      "",
    ],
  },
];
const shoplist = [
  {
    id: 0,
    name: "Dildo",
    price: 15000,
    img: "./rolette/assets/cdla/shop/dildo.txt",
    desc: "Ruleti dildo ile çevirerek, Ekstradan +20 şans puanı elde et!",
    expiry: 1,
    use: function () {
      sansdegisikligi += 20;
    },
    whenexpired: function () {
      sansdegisikligi -= 20;
    },
    executionid: 3,
    finishid: 7,
    type: "boost",
  },
  {
    id: 1,
    name: "Uçan otomatik kavramalı dildo",
    price: 3000,
    img: "./rolette/assets/cdla/shop/ucandildo.txt",
    desc: "Ruleti Uçan dildo ile çevirerek, Ekstradan +69 şans puanı elde et!",
    expiry: 1,
    use: function () {
      sansdegisikligi += 69;
    },
    whenexpired: function () {
      sansdegisikligi -= 69;
    },
    executionid: 3,
    finishid: 7,
    type: "boost",
  },
  {
    id: 2,
    name: "İtalyanın gemlik şehrinden çıkan yerli ve milli togg Otomobilimiz",
    price: 20000,
    img: "./rolette/assets/cdla/shop/togg.txt",
    desc: "Rulete togg otomobilin ile giderek, Paranı 2'ye katla!",
    expiry: 1,
    use: function () {
      bankValue *= 2;
    },
    whenexpired: function () {},
    executionid: 3,
    finishid: 3,
    type: "boost",
  },
  {
    id: 3,
    name: "117 yıldır yanan am",
    price: 2000,
    img: "./rolette/assets/cdla/shop/117yil.txt",
    desc: "Casinonun ışığını 117 yıldır yanan am ile değiştirerek, Rastgele olayların gelme olasılığını arttır.",
    expiry: 10,
    use: function () {
      revs = 0.5;
    },
    whenexpired: function () {
      revs = 0.9;
    },
    executionid: 3,
    finishid: 7,
    type: "boost",
  },
  {
    id: 4,
    name: "Gemicik",
    price: 2000,
    img: "./rolette/assets/cdla/shop/gemicik.txt",
    desc: "Casinoyu gemiciğe taşı ve, casionun temasını değiştir!",
    expiry: 0,
    use: function () {
      theme = "gemicik";
      reloadtheme("gemicik");
    },
    whenexpired: function () {
      theme = "classic";
      reloadtheme("classic");
    },
    executionid: 3,
    finishid: 10,
    type: "theme",
  },
  {
    id: 5,
    name: "Teyyip",
    price: 1310,
    img: "./rolette/assets/cdla/shop/teyyip.txt",
    desc: "Casinoya teyyip koy ve teyyip ile ilahi dinle! Dikkat teyyip ana avrat düz girebilir, ilahi çalabilir, senle taşşak geçebilir,Sesli bir şekilde ahlayabilir ve olan olayları okuyabilir! Bu nedenle teyyip +18 bir üründür ve alırken +18 sesler çıkartacağını bilerek almanızı öneririz.",
    expiry: 0,
    use: function () {
      teyyip = true;
    },
    whenexpired: function () {
      teyyip = true;
    },
    executionid: 3,
    finishid: 8,
    type: "addon",
  },
  {
    id: 6,
    name: "yakisikliguvenlik5188'in spesiyal tüylü kelepçesi",
    price: 1000,
    img: "./rolette/assets/cdla/shop/yakisikli.txt",
    desc: "yakisikliguvenlik5188'in spesiyal tüylü kelepçesi ile rastgele olaylarda asla ölme!",
    expiry: 10,
    use: function () {
      olumsuz = true;
    },
    whenexpired: function () {
      olumsuz = false;
    },
    executionid: 3,
    finishid: 11,
    type: "boost",
  },
  {
    id: 7,
    name: "kürtaj olmuş bodrumlu kurpiyer",
    price: 2500,
    img: "./rolette/assets/cdla/shop/kurpiyer.txt",
    desc: "kürtaj olmuş bodrumlu kurpiyer ile ekstra can al!",
    expiry: 1,
    use: function () {
      can = 1;
    },
    whenexpired: function () {
      can = 0;
    },
    executionid: 3,
    finishid: 6,
    type: "boost",
  },
  {
    id: 8,
    name: "Kürt başlıklı kız",
    price: 4999,
    img: "./rolette/assets/cdla/shop/kurtbasliklikiz.txt",
    desc: "Biz o hikayeyi kurttanda dinledik kürt başlıklı kız kaşarlık yapmış diyenlere özel kürt başlıklı kız teması!",
    expiry: 0,
    use: function () {
      theme = "kurtbk";
      reloadtheme("kurtbk");
    },
    whenexpired: function () {
      theme = "classic";
      reloadtheme("classic");
    },
    executionid: 3,
    finishid: 10,
    type: "theme",
  },
];
var teyyipsesi = 0.3;
const themes = {
  classic: "background-color: #016D29;color: #fff;",
  gemicik: "color: #fff;background-image:url('gemicik');",
  kurtbk: "color: #fff;background-image:url('kurtbk');",
};
const themes_RAND = {
  classic: 0,
  gemicik: 15,
  kurtbk: 15,
};
let songs = {};
let song_DURS = {
  win: {
    az: [
      {
        md: "mutlu",
        sb: "pozitif",
      },
      {
        md: "normal",
        sb: "saçma",
      },
    ],
    cok: [
      {
        md: "mutlu",
        sb: "kazanma",
      },
      {
        md: "mutlu",
        sb: "pozitif",
      },
    ],
  },
  lose: {
    az: [
      {
        md: "sinirli",
        sb: "main",
      },
      {
        md: "üzgün",
        sb: "ölüm",
      },
    ],
    cok: [
      {
        md: "üzgün",
        sb: "dalga",
      },
      {
        md: "üzgün",
        sb: "negatif",
      },
    ],
  },
  die: {
    az: [
      {
        md: "üzgün",
        sb: "dalga",
      },
      {
        md: "üzgün",
        sb: "negatif",
      },
    ],
    cok: [
      {
        md: "sinirli",
        sb: "main",
      },
      {
        md: "üzgün",
        sb: "ölüm",
      },
    ],
  },
  paraaz: {
    az: [
      {
        md: "üzgün",
        sb: "dalga",
      },
      {
        md: "üzgün",
        sb: "negatif",
      },
    ],
    cok: [
      {
        md: "sinirli",
        sb: "main",
      },
      {
        md: "üzgün",
        sb: "ölüm",
      },
    ],
  },
  paraart: {
    az: [
      {
        md: "normal",
        sb: "saçma",
      },
      {
        md: "üzgün",
        sb: "dalga",
      },
    ],
    cok: [
      {
        md: "mutlu",
        sb: "kazanma",
      },
      {
        md: "mutlu",
        sb: "pozitif",
      },
    ],
  },
  random: {
    az: [
      {
        md: "Şarkı",
        sb: "az",
      },
      {
        md: "Şarkı",
        sb: "cok",
      },
    ],
    cok: [
      {
        md: "normal",
        sb: "saçma",
      },
      {
        md: "Şarkı",
        sb: "cok",
      },
    ],
  },
}; //random,paraart,paraaz,die,lose,win
loadSongs();
let teyporan = 3
function playTeyyip(durum) {
  if (!teyyip) {
    return;
  }
  let rndm = Math.random();
  let sec = "";
  if (rndm > 0.7) {
    sec = "az";
  } else {
    sec = "cok";
  }
  if (song_DURS[durum] != null) {
    let itm = song_DURS[durum][sec];
    let rndmd = Math.floor(Math.random() * itm.length);
    let sel = itm[rndmd];
    console.log(itm, rndmd);
    let sngs = songs[sel["md"]][sel["sb"]]["_files"];
    let sngsrndm = Math.floor(Math.random() * sngs.length);
    let selsong = sngs[sngsrndm];
    console.log(sel["md"]);
    let aud = new Audio();
    aud.src =
      "https://raw.githubusercontent.com/srpgck/CG/main/CDN/SFX/" +
      sel["md"] +
      "/" +
      sel["sb"] +
      "/" +
      selsong;

    aud.addEventListener(
      "loadedmetadata",
      function () {
        // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
        var duration = audio.duration;
        let drt = Math.floor(Math.random() * duration) + 1;
        if (Math.floor(duration / teyporan) > drt) {
          drt = Math.floor(duration / teyporan);
        }
        console.log("DRT",drt)
        PlayAudio(
          "https://raw.githubusercontent.com/srpgck/CG/main/CDN/SFX/" +
            sel["md"] +
            "/" +
            sel["sb"] +
            "/" +
            selsong,
          drt
        );
      },
      false
    );
    delete aud;
  }
}
function loadSongs() {
  fetch(chrome.extension.getURL("./rolette/assets/cdla/sfx/manifest.json"))
    .then((resp) => resp.json())
    .then(function (jsonData) {
      songs = jsonData;
    });
}
const audio = new Audio();

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url.startsWith("chrome-extension://")) {
    if (changeInfo.mutedInfo && changeInfo.mutedInfo.muted) {
      console.log("Tab muted:", tabId);
      // Burada tab susturulduğunda yapılacak işlemleri gerçekleştirebilirsiniz.
    } else {
      console.log("Tab unmuted:", tabId);
      // Burada tabın sesinin açıldığında yapılacak işlemleri gerçekleştirebilirsiniz.
    }
  }
});

let paus = false;

function PlayAudio(konm, dur) {
  audio.src = konm;
  audio.volume = teyyipsesi;
  audio.play();
  cp = { konm: konm, dur: dur };
  setTimeout(() => {
    if (cp["konm"] == konm) {
      audio.pause();
    }
  }, dur * 1000);
}
let randteyip = 0.8;
setInterval(() => {
  if (audio.paused) {
    if (Math.random() > randteyip) {
      playTeyyip("random");
    }
  }
}, 3000);
setInterval(() => {
  if (document.hidden) {
    paus = true;
    audio.pause();
  } else if (!document.hidden && paus) {
    paus = false;
    audio.play();
  }
}, 100);
let currentBet = 0;
let wager = 5;
let lastWager = 0;
let bet = [];
let numbersBet = [];

let previousNumbers = [];

let bankValue = 1000;
let items = [];
let theme = "classic";
let aranma = 0;
let sansdegisikligi = 0;
let revs = 0.9;
let can = 0;
let olumsuz = false;
let HOLDER = document.createElement("div");
HOLDER.className = "holderr";
let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.append(HOLDER);
HOLDER.appendChild(document.getElementById("AH_SHP"));
HOLDER.appendChild(container);
function reloadBankValue() {
  try {
    document.getElementById("bankSpan").innerText =
      "" + bankValue.toLocaleString("en-GB") + "";
  } catch {}
}

function saveGame() {
  let x = {
    bankValue: bankValue + currentBet,
    items: items,
    theme: theme,
    aranma: aranma,
    sansdegisikligi: sansdegisikligi,
    revs: revs,
    can: can,
    olumsuz: olumsuz,
    randteyip: randteyip,
    teyyip: teyyip,
    teyyipsesi: teyyipsesi,
    teyporan:teyporan,
  };
  database.set("gamesave", x);
}
function purgeSave() {
  database.remove("gamesave");
}
document.getElementById("svysfrl").onclick = (x) => {
  notify(
    "Eminmisin?",
    "Bütün ilerlemen, itemlerin, temaların, eklentilerin. Kaybolacak.",
    "Eminim",
    () => {
      purgeSave();
      location.reload();
    },
    "Yok sikimin keyfine basytım",
    () => {
      Speak("salak.", true);
    }
  );
};
loadSave();
let intgameover = false;
setInterval(function () {
  saveGame();
  reloadBankValue();

  if (!intgameover) {
    if (bankValue + currentBet <= 0) {
      intgameover = true;
      if (gameoverd == false) {
        gameOver();
      }
    }
  }
}, 1000);

function loadSave() {
  let x = {
    bankValue: bankValue + currentBet,
    items: items,
    theme: theme,
    aranma: aranma,
    sansdegisikligi: sansdegisikligi,
    revs: revs,
    can: can,
    olumsuz: olumsuz,
    randteyip: randteyip,
    teyyip: teyyip,
    teyyipsesi: teyyipsesi,
    teyporan:teyporan,
  };
  let xy = database.get("gamesave");
  if (typeof xy == "object" && xy != null) {
    x = xy;
  } else {
  }
  bankValue = x["bankValue"];
  items = x["items"];
  theme = x["theme"];
  aranma = x["aranma"];
  sansdegisikligi = x["sansdegisikligi"];
  revs = x["revs"];
  can = x["can"];
  olumsuz = x["olumsuz"];
  randteyip = x["randteyip"];
  teyyip = x["teyyip"];
  teyyipsesi = x["teyyipsesi"];
  teyporan = x["teyporan"]
  reloadBankValue();
  reloadItems();
  if (bankValue <= 0) {
    if (gameoverd == false) {
      gameOver();
    }
  }
  reloadtheme(theme);
}

let numRed = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
];
let wheelnumbersAC = [
  0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23,
  8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32,
];

function reloadtheme(tn) {
  let theme = themes[tn];
  let bgi = theme.split("'")[1];
  if (theme != null) {
    console.log(themes_RAND[bgi]);
    if (themes_RAND[bgi] == 0 || themes_RAND[bgi] == null) {
      //load colr
      HOLDER.setAttribute("style", theme);
    } else {
      //load img
      let wb64 = "";
      let rndmd = Math.floor(Math.random() * themes_RAND[bgi]) + 1;
      getmedia(
        "./rolette/assets/cdla/themes/" + bgi + "/" + rndmd + ".txt"
      ).then((x) => {
        HOLDER.setAttribute("style", theme.replace(bgi, x));
      });
    }
    return true;
  } else {
    return false;
  }
}
function getrndmcdla() {
  const randomNumber = Math.floor(Math.random() * 115) + 1;
  const url = chrome.runtime.getURL("./cdla/noti/" + randomNumber + ".txt");

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(function (data) {
      return data;
    });
}
function getmedia(konm) {
  console.log(konm);
  const url = chrome.runtime.getURL(konm);

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(function (data) {
      return data;
    });
}
startGame();
function notify(msg, desc, btn, btncb, btn2, btn2cb) {
  let shwd = container;
  if (document.getElementById("shopms").style.visibility == "visible") {
    shwd = document.getElementById("shopms");
  }
  let notification = document.createElement("div");
  notification.setAttribute("id", "notification");
  notification.className = "notification";
  notification.style.zIndex =
    "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";

  let notificati2eon = document.createElement("div");
  notificati2eon.style.height = "100vh";
  notificati2eon.style.width = "100vw";
  notificati2eon.style.justifyContent = "center";
  notificati2eon.style.alignContent = "center";
  notificati2eon.style.zIndex =
    "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
  notificati2eon.style.position = "absolute";

  let nimage = document.createElement("img");

  getrndmcdla().then((x) => {
    nimage.src = x;
  });
  nimage.style.objectFit = "fill";
  nimage.style.display = "flex";
  nimage.style.position = "absolute";
  nimage.style.zIndex = 900;
  nimage.style.width = "100%";
  nimage.style.height = "100%";

  let mdiv = document.createElement("div");
  mdiv.style.position = "absolute";
  mdiv.style.width = "100%";
  mdiv.style.height = "100%";
  mdiv.style.zIndex = "9999999999999999999999999999";

  let nSpan = document.createElement("span");
  nSpan.setAttribute("class", "nSpan");
  nSpan.innerText = msg;

  mdiv.append(nSpan);
  if (desc != null && typeof desc == "string") {
    let nSpana2 = document.createElement("span");
    nSpana2.setAttribute("class", "nSpan");

    nSpana2.innerText = desc;
    nSpana2.style.fontSize = "15px";
    mdiv.append(nSpana2);
  }
  let nBtn = document.createElement("div");
  nBtn.setAttribute("class", "nBtn");
  nBtn.innerText = btn;
  if (btncb == null) {
    nBtn.onclick = function () {
      notification.remove();
      notificati2eon.remove();
    };
  } else {
    nBtn.onclick = function () {
      notification.remove();
      notificati2eon.remove();
      btncb();
    };
  }
  mdiv.append(nBtn);
  if (btn2 != null) {
    let nBtn2 = document.createElement("div");
    nBtn2.setAttribute("class", "nBtn");
    nBtn2.innerText = btn2;
    if (btncb == null) {
      nBtn2.onclick = function () {
        notification.remove();
        notificati2eon.remove();
      };
    } else {
      nBtn2.onclick = function () {
        notification.remove();
        notificati2eon.remove();
        btn2cb();
      };
    }
    mdiv.append(nBtn2);
  }
  notification.appendChild(mdiv);
  notification.appendChild(nimage);

  shwd.prepend(notification);
  shwd.prepend(notificati2eon);
}
function checkFinish(itm, cf) {
  if (itm["expiry"] == 0) {
    return;
  }

  if (cf == itm["finishid"]) {
    let nwit = [];
    items.forEach((x) => {
      if (x["UniqueId"] == itm["UniqueId"]) {
        x["expsay"] = x["expsay"] + 1;
        itm = x;
        nwit.push(x);
      } else {
        nwit.push(x);
      }
    });
    items = nwit;
    if (itm["expsay"] >= itm["expiry"]) {
      document.getElementById(itm["UniqueId"] + itm["id"]).remove();
      itm["whenexpired"]();
      let nwit = [];
      items.forEach((x) => {
        if (x["UniqueId"] != itm["UniqueId"]) {
          nwit.push(x);
        }
      });
      items = nwit;
    }
  }
}
setInterval(function () {
  items.forEach((x) => {
    checkFinish(x, 2);
  });
}, 1000);
function useItem(itm, cf, when) {
  if (cf == itm["executionid"]) {
    if (itm["expiry"] == 0) {
      //0-2-4 on
      //1-3-5 off
      if (itm["executionid"] == 8 || itm["finishid"] == 8) {
        if (itm["expsay"] % 2 == 0) {
          itm["use"]();
          itm["executed"] = true;
        } else {
          itm["whenexpired"]();
        }

        itm["expsay"] = itm["expsay"] + 1;
      } else if (itm["executionid"] == 10 || itm["finishid"] == 10) {
        if (when) {
          itm["whenexpired"]();
        } else {
          itm["use"]();
        }
      }
    } else if (itm["expsay"] <= itm["expiry"]) {
      itm["use"]();
    }
  }
}
function reloadItems() {
  let oit = items;
  items = [];
  for (i = 0; i < 100; i++) {
    document.getElementById("itemholder").childNodes.forEach((x) => {
      x.remove();
    });
  }
  oit.forEach((x) => {
    if (x["executed"]) {
      BuyItem(shoplist[x["id"]], true);
    } else if (x["expiry"] == 0) {
      BuyItem(shoplist[x["id"]], true);
    } else if (x["expsay"] < x["expiry"]) {
      BuyItem(shoplist[x["id"]], true);
    } else {
      console.log(x);
    }
  });
  items.forEach((x) => {
    oit.forEach((x2)=>{
      if(x.id == x2.id){
        x.expsay = x2.expsay
      }
    })
  });
}

function BuyItem(itemce, rld) {
  if (!rld) {
    let found = false;
    items.forEach((x) => {
      if (x["id"] == itemce["id"]) {
        found = true;
      }
    });
    if (found) {
      notify("Hediyelik dükkanımı sandın burayı ?", null, "ossur.dilerim.🌹");
      return;
    }
    if (bankValue >= itemce["price"]) {
      bankValue -= itemce["price"];
    } else {
      notify("fukara.", null, "ossur.dilerim.🌹");
      return;
    }
  }
  let itm = {
    id: itemce["id"],
    expsay: 0,
    expiry: itemce["expiry"],
    use: itemce["use"],
    whenexpired: itemce["whenexpired"],
    executionid: itemce["executionid"],
    finishid: itemce["finishid"] || itemce["exexecutionidi"],
    executed: false,
    finishexecuted: false,
    UniqueId: items.length + 1,
    img: itemce["img"],
    type: itemce["type"],
    /*
0=spin
1=before spin
2=while
3=rn
4=die
5=win
6=lose
7=spin finished
8=click logo
9=revent finish
10=toggle
*/
  };
  let ih = document.getElementById("itemholder");

  let itm_md = document.createElement("div");
  itm_md.style.width = "80px";
  itm_md.style.height = "100%";
  itm_md.style.justifyContent = "center";
  itm_md.style.textAlign = "center";
  itm_md.style.position = "relative";
  itm_md.style.display = "inline-block";
  itm_md.id = itm["UniqueId"] + itm["id"];

  let itm_d = document.createElement("div");
  itm_d.className = "overlay";
  itm_d.style.cursor = "pointer";
  itm_d.innerText = "Tıkla";
  itm_d.onclick = () => {
    if (itemce["type"] == "theme") {
      notify(
        itemce["name"],
        itemce["desc"] +
          "\nCanı : " +
          (itemce["expiry"] == 0 ? "Sonsuz" : (itemce["expiry"]-itemce["expsay"])),
        "Bu temayı Kullan",
        () => {
          useItem(itm, 3, false);
        },
        "Klasik temayı kullan",
        () => {
          useItem(itm, 3, true);
        }
      );
    } else if (itemce["id"] == 5) {
      notify(
        itemce["name"],
        itemce["desc"] +
          "\nCanı : " +
          (itemce["expiry"] == 0 ? "Sonsuz" :(itemce["expiry"]-itemce["expsay"])) +
          "\n\nTeyyipin çenesinin yayını ve konuşma sitilini ayarla",
        "Orospu çocuğunun çenesinin yayını sikeyim az susun (daha az ve sessiz çalar)",
        () => {
          randteyip = 0.8;
          teyyipsesi = 0.5;
          teyporan = 3;
        },
        "bu çalmıyo amk daha çok çalsın (sikim sonik şekilde çalar ve sesi artar)",
        () => {
          randteyip = 0.5;
          teyyipsesi = 0.8;
          teyporan = 2;
        }
      );
    } else {
      let itm = itemce
      items.forEach((x)=>{
        if(x.id == itemce.id){
          itm = x
        }
      })
      notify(
        itemce["name"],
        itemce["desc"] +
          "\nCanı : " +
          (itemce["expiry"] == 0 ? "Sonsuz" : (itm["expiry"]-itm["expsay"])),
        "bu bilgileri götüme sokacağım teşekürler",
        null,
        "napim"
      );
    }
  };
  itm_md.appendChild(itm_d);

  let itm_im = document.createElement("img");

  itm_im.style.borderRadius = "6px";
  itm_im.style.width = "100%";
  itm_im.style.height = "100%";
  getmedia(itemce["img"]).then((x) => {
    itm_im.src = x;
  });

  itm_md.appendChild(itm_im);

  ih.appendChild(itm_md);
  useItem(itm, 3);
  items.push(itm);
  checkFinish(itm, 3);
  if (!rld) {
    notify(itemce["name"] + " Envanterine Eklendi", null, "tamam(tr)");
  }
}
function OpenShop() {
  let ms = document.getElementById("shopms");
  ms.style.visibility = "visible";
  let sit = document.getElementById("shop_itemhandler");
  let fd = shoplist.length / 9;
  if (fd > Math.floor(fd)) {
    fd = Math.floor(fd) + 1;
  }
  if (fd >= 1) {
    let oui = 0;
    for (i = 0; i < fd; i++) {
      let if1 = document.createElement("div");
      //height: 200px; width: 100%; display: flex; position: relative; flex-direction: row; gap: 10px; justify-content: center;
      if1.style.height = "200px";
      if1.style.width = "flex";
      if1.style.position = "relative";
      if1.style.flexDirection = "row";
      if1.style.gap = "40px";
      if1.style.justifyContent = "start";
      if1.style.marginLeft = "5px";
      if1.style.display = "flex";

      for (i2 = 0; i2 < 9; i2++) {
        if (oui >= shoplist.length) {
          break;
        }
        let sitt = document.createElement("div");
        //display: flex; flex-direction: column; height: 148px; width: 148px;
        sitt.style.display = "flex";
        sitt.style.flexDirection = "column";
        sitt.style.height = "148px";
        sitt.style.width = "148px";
        var ce = shoplist[oui];
        let imgd = document.createElement("div");

        let imgdimg = document.createElement("img");

        imgdimg.className = " object-fill h-screen w-screen ";
        getmedia(ce["img"]).then((x) => {
          imgdimg.src = x;
        });
        imgdimg.style.borderRadius = "6px";
        imgdimg.style.height = "120px";
        imgdimg.style.width = "100%";
        imgdimg.style.objectFit = "fill";

        imgd.appendChild(imgdimg);

        sitt.appendChild(imgd);

        let bhd = document.createElement("div");

        let bhdbh = document.createElement("div");

        bhdbh.className = " shopbutton ";
        bhdbh.style.cursor = "pointer";
        let sunii = oui;
        oui += 1;
        bhdbh.addEventListener("click", (ev) => {
          ce = shoplist[sunii];
          console.log(sunii);

          let notification = document.createElement("div");
          notification.id = ce["name"] + "SI" + ce["expiry"];

          notification.setAttribute("id", "notification");
          notification.className = "notification";
          notification.style.zIndex = 999999999999999;

          let notificati2eon = document.createElement("div");
          notificati2eon.style.height = "100vh";
          notificati2eon.style.width = "100vw";
          notificati2eon.style.justifyContent = "center";
          notificati2eon.style.alignContent = "center";
          notificati2eon.style.zIndex = 9999;
          notificati2eon.style.position = "absolute";

          let nimage = document.createElement("img");

          getmedia(ce["img"]).then((x) => {
            nimage.src = x;
          });
          nimage.style.objectFit = "fill";
          nimage.style.display = "flex";
          nimage.style.position = "absolute";
          nimage.style.zIndex = 900;
          nimage.style.width = "100%";
          nimage.style.height = "100%";

          let mdiv = document.createElement("div");
          mdiv.style.position = "absolute";
          mdiv.style.width = "100%";
          mdiv.style.height = "100%";
          mdiv.style.zIndex = 9999;
          let nSpan = document.createElement("span");
          nSpan.setAttribute("class", "nSpan");

          mdiv.append(nSpan);

          let nSpana = document.createElement("span");
          nSpana.setAttribute("class", "nSpan");

          nSpana.innerText = ce["desc"];
          nSpana.style.fontSize = "15px";
          mdiv.append(nSpana);

          let nSpana2 = document.createElement("span");
          nSpana2.setAttribute("class", "nSpan");

          nSpana2.innerText =
            "\nCanı : " + (ce["expiry"] == 0 ? "Sonsuz" : ce["expiry"]);
          nSpana2.style.fontSize = "15px";
          mdiv.append(nSpana2);
          let nBtn = document.createElement("div");
          nBtn.setAttribute("class", "nBtn");
          nBtn.innerText = "Satın al (" + ce["price"] + " TL)";
          nBtn.onclick = function () {
            BuyItem(ce);
            notification.remove();
            notificati2eon.remove();
          };
          mdiv.append(nBtn);
          let nBtn2 = document.createElement("div");
          nBtn2.setAttribute("class", "nBtn");
          nBtn2.innerText = "Siktiri çek";
          nBtn2.onclick = function () {
            notification.remove();
            notificati2eon.remove();
          };
          mdiv.append(nBtn2);
          notification.appendChild(mdiv);
          notification.appendChild(nimage);

          ms.prepend(notification);
          ms.prepend(notificati2eon);
        });

        bhdbh.innerText = ce["name"];

        bhd.appendChild(bhdbh);

        sitt.appendChild(bhd);

        if1.appendChild(sitt);

        // }
      }

      sit.appendChild(if1);
    }
  } else {
    let if1 = document.createElement("div");
    //height: 200px; width: 100%; display: flex; position: relative; flex-direction: row; gap: 10px; justify-content: center;
    if1.style.height = "200px";
    if1.style.width = "flex";
    if1.style.position = "relative";
    if1.style.flexDirection = "row";
    if1.style.gap = "40px";
    if1.style.justifyContent = "center";
    if1.style.display = "flex";
    for (i = 0; i < shoplist.length; i++) {
      let sitt = document.createElement("div");
      //display: flex; flex-direction: column; height: 148px; width: 148px;
      sitt.style.display = "flex";
      sitt.style.flexDirection = "column";
      sitt.style.height = "148px";
      sitt.style.width = "148px";
      var ce = shoplist[i];
      let imgd = document.createElement("div");

      let imgdimg = document.createElement("img");

      imgdimg.className = " object-fill h-screen w-screen ";
      getmedia(ce["img"]).then((x) => {
        imgdimg.src = x;
      });
      imgdimg.style.borderRadius = "6px";
      imgdimg.style.height = "120px";
      imgdimg.style.width = "100%";
      imgdimg.style.objectFit = "fill";

      imgd.appendChild(imgdimg);

      sitt.appendChild(imgd);

      let bhd = document.createElement("div");

      let bhdbh = document.createElement("div");

      bhdbh.className = " shopbutton ";
      bhdbh.style.cursor = "pointer";
      let sunii = i;
      bhdbh.addEventListener("click", (ev) => {
        ce = shoplist[sunii];
        console.log(sunii);

        let notification = document.createElement("div");
        notification.id = ce["name"] + "SI" + ce["expiry"];

        notification.setAttribute("id", "notification");
        notification.className = "notification";
        notification.style.zIndex = 999999999999999;

        let notificati2eon = document.createElement("div");
        notificati2eon.style.height = "100vh";
        notificati2eon.style.width = "100vw";
        notificati2eon.style.justifyContent = "center";
        notificati2eon.style.alignContent = "center";
        notificati2eon.style.zIndex = 9999;
        notificati2eon.style.position = "absolute";

        let nimage = document.createElement("img");

        getmedia(ce["img"]).then((x) => {
          nimage.src = x;
        });
        nimage.style.objectFit = "fill";
        nimage.style.display = "flex";
        nimage.style.position = "absolute";
        nimage.style.zIndex = 900;
        nimage.style.width = "100%";
        nimage.style.height = "100%";

        let mdiv = document.createElement("div");
        mdiv.style.position = "absolute";
        mdiv.style.width = "100%";
        mdiv.style.height = "100%";
        mdiv.style.zIndex = 9999;
        let nSpan = document.createElement("span");
        nSpan.setAttribute("class", "nSpan");

        mdiv.append(nSpan);

        let nSpana = document.createElement("span");
        nSpana.setAttribute("class", "nSpan");

        nSpana.innerText = ce["desc"];
        nSpana.style.fontSize = "15px";
        mdiv.append(nSpana);

        let nSpana2 = document.createElement("span");
        nSpana2.setAttribute("class", "nSpan");

        nSpana2.innerText =
          "\nCanı : " + (ce["expiry"] == 0 ? "Sonsuz" : ce["expiry"]);
        nSpana2.style.fontSize = "15px";
        mdiv.append(nSpana2);
        let nBtn = document.createElement("div");
        nBtn.setAttribute("class", "nBtn");
        nBtn.innerText = "Satın al (" + ce["price"] + " TL)";
        nBtn.onclick = function () {
          BuyItem(ce);
          notification.remove();
          notificati2eon.remove();
        };
        mdiv.append(nBtn);
        let nBtn2 = document.createElement("div");
        nBtn2.setAttribute("class", "nBtn");
        nBtn2.innerText = "Siktiri çek";
        nBtn2.onclick = function () {
          notification.remove();
          notificati2eon.remove();
        };
        mdiv.append(nBtn2);
        notification.appendChild(mdiv);
        notification.appendChild(nimage);

        ms.prepend(notification);
        ms.prepend(notificati2eon);
      });

      bhdbh.innerText = ce["name"];

      bhd.appendChild(bhdbh);

      sitt.appendChild(bhd);

      if1.appendChild(sitt);

      // }

      sit.appendChild(if1);
    }
  }
}

function closeshop() {
  let ms = document.getElementById("shopms");
  ms.style.visibility = "hidden";
  let sit = document.getElementById("shop_itemhandler");
  let child = sit.lastElementChild;
  while (child) {
    sit.removeChild(child);
    child = sit.lastElementChild;
  }
}
document.getElementById("closeshop").addEventListener("click", (ev) => {
  closeshop();
});
document.getElementById("openshop").addEventListener("click", (ev) => {
  OpenShop();
});
let wheel = document.getElementsByClassName("wheel")[0];
let ballTrack = document.getElementsByClassName("ballTrack")[0];

function resetGame() {
  bankValue = 1000;
  intgameover = false;
  gameoverd = false;
  currentBet = 0;
  wager = 5;
  bet = [];
  numbersBet = [];
  previousNumbers = [];
  document.getElementById("betting_board").remove();
  document.getElementById("notification").remove();
  buildBettingBoard();
}

function startGame() {
  buildWheel();
  buildBettingBoard();
}
function gameOver() {
  gameoverd = true;
  playTeyyip("lose");
  if (can > 0) {
    items.forEach((x) => {
      useItem(x, 6);
    });
    items.forEach((x) => {
      checkFinish(x, 6);
    });
    playTeyyip("win");
    Speak("Kürtaj olmuş bodrumlu kurpiyer tarafından kuratrıldın!");
    Speak(
      "bodrumlu kurpiyer 'Senin kumarın burda bitmez' dedi ve sana göt cebinden 1.500 TL uzattı."
    );
    notify(
      "Kürtaj olmuş bodrumlu kurpiyer tarafından kuratrıldın!",
      "bodrumlu kurpiyer 'Senin kumarın burda bitmez' dedi ve sana göt cebinden 1.500 TL uzattı.",
      "sikisekmi",
      () => {
        playTeyyip("die");
        Speak("Öldün");
        Speak(
          "Kürtaj olmuş bodrumlu kurpiyer birdaha kürtaj olmak istemediğiden seni öldürdü"
        );
        notify(
          "Öldün",
          "Kürtaj olmuş bodrumlu kurpiyer birdaha kürtaj olmak istemediğiden seni öldürdü",
          "ah yalan dünya"
        );
        return gameOver();
      },
      "eyvallah bacım",
      () => {
        bankValue = 1500;
      }
    );
    return;
  } else {
    items.forEach((x) => {
      useItem(x, 6);
    });
    items.forEach((x) => {
      checkFinish(x, 6);
    });
  }
  let nwitms = [];
  items.forEach((x) => {
    if (x["type"] == "theme" || x["type"] == "addon") {
      nwitms.push(x);
    }
  });
  items = nwitms;
  reloadItems();
  saveGame();
  let notification = document.createElement("div");
  notification.setAttribute("id", "notification");
  sansdegisikligi = 0;
  let nimage = document.createElement("img");

  getrndmcdla().then((x) => {
    nimage.src = x;
  });
  nimage.style.objectFit = "fill";
  nimage.style.display = "flex";
  nimage.style.position = "absolute";
  nimage.style.zIndex = "-1";
  nimage.style.width = "100%";
  nimage.style.height = "100%";

  let mdiv = document.createElement("div");
  mdiv.style.position = "absolute";
  mdiv.style.width = "100%";
  mdiv.style.height = "100%";
  mdiv.style.zIndex = "1";
  let nSpan = document.createElement("span");
  nSpan.setAttribute("class", "nSpan");
  nSpan.innerText = "Beceriksiz";
  Speak("Beceriksiz");
  mdiv.append(nSpan);

  let nSpana = document.createElement("span");
  nSpana.setAttribute("class", "nSpan");
  const ry = yazilar[Math.floor(Math.random() * yazilar.length)];
  nSpana.innerText = ry;
  Speak(ry);
  nSpana.style.fontSize = "15px";
  mdiv.append(nSpana);
  let nBtn = document.createElement("div");
  nBtn.setAttribute("class", "nBtn");
  nBtn.innerText = "Benim kumarım burda başlar";
  nBtn.onclick = function () {
    resetGame();
    gameoverd = false;
  };
  let yBtn = document.createElement("div");
  yBtn.setAttribute("class", "nBtn");
  yBtn.innerText = "Benim kumarım burda biter";
  yBtn.onclick = function () {
    Speak("Siktir git.", true);
    setTimeout(() => {
      open("https://www.youtube.com/watch?v=uzOJV0MliAw", "_self");
      alert(yazilar[Math.floor(Math.random() * yazilar.length)]);
    }, 1500);
  };
  mdiv.append(nBtn);
  mdiv.append(yBtn);
  notification.appendChild(mdiv);
  notification.appendChild(nimage);

  container.prepend(notification);
}

function buildWheel() {
  let wheel = document.createElement("div");
  wheel.setAttribute("class", "wheel");

  let outerRim = document.createElement("div");
  outerRim.setAttribute("class", "outerRim");
  wheel.append(outerRim);

  let numbers = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
    24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
  ];
  for (i = 0; i < numbers.length; i++) {
    let a = i + 1;
    let spanClass = numbers[i] < 10 ? "single" : "double";
    let sect = document.createElement("div");
    sect.setAttribute("id", "sect" + a);
    sect.setAttribute("class", "sect");
    let span = document.createElement("span");
    span.setAttribute("class", spanClass);
    span.innerText = numbers[i];
    sect.append(span);
    let block = document.createElement("div");
    block.setAttribute("class", "block");
    sect.append(block);
    wheel.append(sect);
  }

  let pocketsRim = document.createElement("div");
  pocketsRim.setAttribute("class", "pocketsRim");
  wheel.append(pocketsRim);

  let ballTrack = document.createElement("div");
  ballTrack.setAttribute("class", "ballTrack");
  let ball = document.createElement("div");
  ball.setAttribute("class", "ball");
  ballTrack.append(ball);
  wheel.append(ballTrack);

  let pockets = document.createElement("div");
  pockets.setAttribute("class", "pockets");
  wheel.append(pockets);

  let cone = document.createElement("div");
  cone.setAttribute("class", "cone");
  wheel.append(cone);

  let turret = document.createElement("div");
  turret.setAttribute("class", "turret");
  wheel.append(turret);

  let turretHandle = document.createElement("div");
  turretHandle.setAttribute("class", "turretHandle");
  let thendOne = document.createElement("div");
  thendOne.setAttribute("class", "thendOne");
  turretHandle.append(thendOne);
  let thendTwo = document.createElement("div");
  thendTwo.setAttribute("class", "thendTwo");
  turretHandle.append(thendTwo);
  wheel.append(turretHandle);

  container.append(wheel);
}

function buildBettingBoard() {
  let bettingBoard = document.createElement("div");
  bettingBoard.setAttribute("id", "betting_board");

  let wl = document.createElement("div");
  wl.setAttribute("class", "winning_lines");

  var wlttb = document.createElement("div");
  wlttb.setAttribute("id", "wlttb_top");
  wlttb.setAttribute("class", "wlttb");
  for (i = 0; i < 11; i++) {
    let j = i;
    var ttbbetblock = document.createElement("div");
    ttbbetblock.setAttribute("class", "ttbbetblock");
    var numA = 1 + 3 * j;
    var numB = 2 + 3 * j;
    var numC = 3 + 3 * j;
    var numD = 4 + 3 * j;
    var numE = 5 + 3 * j;
    var numF = 6 + 3 * j;
    let num =
      numA +
      ", " +
      numB +
      ", " +
      numC +
      ", " +
      numD +
      ", " +
      numE +
      ", " +
      numF;
    var objType = "double_street";
    ttbbetblock.onclick = function () {
      setBet(this, num, objType, 5);
    };
    ttbbetblock.oncontextmenu = function (e) {
      e.preventDefault();
      removeBet(this, num, objType, 5);
    };
    wlttb.append(ttbbetblock);
  }
  wl.append(wlttb);

  for (c = 1; c < 4; c++) {
    let d = c;
    var wlttb = document.createElement("div");
    wlttb.setAttribute("id", "wlttb_" + c);
    wlttb.setAttribute("class", "wlttb");
    for (i = 0; i < 12; i++) {
      let j = i;
      var ttbbetblock = document.createElement("div");
      ttbbetblock.setAttribute("class", "ttbbetblock");
      ttbbetblock.onclick = function () {
        if (d == 1 || d == 2) {
          var numA = 2 - (d - 1) + 3 * j;
          var numB = 3 - (d - 1) + 3 * j;
          var num = numA + ", " + numB;
        } else {
          var numA = 1 + 3 * j;
          var numB = 2 + 3 * j;
          var numC = 3 + 3 * j;
          var num = numA + ", " + numB + ", " + numC;
        }
        var objType = d == 3 ? "street" : "split";
        var odd = d == 3 ? 11 : 17;
        setBet(this, num, objType, odd);
      };
      ttbbetblock.oncontextmenu = function (e) {
        e.preventDefault();
        if (d == 1 || d == 2) {
          var numA = 2 - (d - 1) + 3 * j;
          var numB = 3 - (d - 1) + 3 * j;
          var num = numA + ", " + numB;
        } else {
          var numA = 1 + 3 * j;
          var numB = 2 + 3 * j;
          var numC = 3 + 3 * j;
          var num = numA + ", " + numB + ", " + numC;
        }
        var objType = d == 3 ? "street" : "split";
        var odd = d == 3 ? 11 : 17;
        removeBet(this, num, objType, odd);
      };
      wlttb.append(ttbbetblock);
    }
    wl.append(wlttb);
  }

  for (c = 1; c < 12; c++) {
    let d = c;
    var wlrtl = document.createElement("div");
    wlrtl.setAttribute("id", "wlrtl_" + c);
    wlrtl.setAttribute("class", "wlrtl");
    for (i = 1; i < 4; i++) {
      let j = i;
      var rtlbb = document.createElement("div");
      rtlbb.setAttribute("class", "rtlbb" + i);
      var numA = 3 + 3 * (d - 1) - (j - 1);
      var numB = 6 + 3 * (d - 1) - (j - 1);
      let num = numA + ", " + numB;
      rtlbb.onclick = function () {
        setBet(this, num, "split", 17);
      };
      rtlbb.oncontextmenu = function (e) {
        e.preventDefault();
        removeBet(this, num, "split", 17);
      };
      wlrtl.append(rtlbb);
    }
    wl.append(wlrtl);
  }

  for (c = 1; c < 3; c++) {
    var wlcb = document.createElement("div");
    wlcb.setAttribute("id", "wlcb_" + c);
    wlcb.setAttribute("class", "wlcb");
    for (i = 1; i < 12; i++) {
      let count = c == 1 ? i : i + 11;
      var cbbb = document.createElement("div");
      cbbb.setAttribute("id", "cbbb_" + count);
      cbbb.setAttribute("class", "cbbb");
      var numA = "2";
      var numB = "3";
      var numC = "5";
      var numD = "6";
      let num =
        count >= 1 && count < 12
          ? parseInt(numA) +
            (count - 1) * 3 +
            ", " +
            (parseInt(numB) + (count - 1) * 3) +
            ", " +
            (parseInt(numC) + (count - 1) * 3) +
            ", " +
            (parseInt(numD) + (count - 1) * 3)
          : parseInt(numA) -
            1 +
            (count - 12) * 3 +
            ", " +
            (parseInt(numB) - 1 + (count - 12) * 3) +
            ", " +
            (parseInt(numC) - 1 + (count - 12) * 3) +
            ", " +
            (parseInt(numD) - 1 + (count - 12) * 3);
      var objType = "corner_bet";
      cbbb.onclick = function () {
        setBet(this, num, objType, 8);
      };
      cbbb.oncontextmenu = function (e) {
        e.preventDefault();
        removeBet(this, num, objType, 8);
      };
      wlcb.append(cbbb);
    }
    wl.append(wlcb);
  }

  bettingBoard.append(wl);

  let bbtop = document.createElement("div");
  bbtop.setAttribute("class", "bbtop");
  let bbtopBlocks = ["1 to 18", "19 to 36"];
  for (i = 0; i < bbtopBlocks.length; i++) {
    let f = i;
    var bbtoptwo = document.createElement("div");
    bbtoptwo.setAttribute("class", "bbtoptwo");
    let num =
      f == 0
        ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18"
        : "19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
    var objType = f == 0 ? "outside_low" : "outside_high";
    bbtoptwo.onclick = function () {
      setBet(this, num, objType, 1);
    };
    bbtoptwo.oncontextmenu = function (e) {
      e.preventDefault();
      removeBet(this, num, objType, 1);
    };
    bbtoptwo.innerText = bbtopBlocks[i];
    bbtop.append(bbtoptwo);
  }
  bettingBoard.append(bbtop);

  let numberBoard = document.createElement("div");
  numberBoard.setAttribute("class", "number_board");

  let zero = document.createElement("div");
  zero.setAttribute("class", "number_0");
  var objType = "zero";
  var odds = 35;
  zero.onclick = function () {
    setBet(this, "0", objType, odds);
  };
  zero.oncontextmenu = function (e) {
    e.preventDefault();
    removeBet(this, "0", objType, odds);
  };
  let nbnz = document.createElement("div");
  nbnz.setAttribute("class", "nbn");
  nbnz.innerText = "0";
  zero.append(nbnz);
  numberBoard.append(zero);

  var numberBlocks = [
    3,
    6,
    9,
    12,
    15,
    18,
    21,
    24,
    27,
    30,
    33,
    36,
    "2 to 1",
    2,
    5,
    8,
    11,
    14,
    17,
    20,
    23,
    26,
    29,
    32,
    35,
    "2 to 1",
    1,
    4,
    7,
    10,
    13,
    16,
    19,
    22,
    25,
    28,
    31,
    34,
    "2 to 1",
  ];
  var redBlocks = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  for (i = 0; i < numberBlocks.length; i++) {
    let a = i;
    var nbClass = numberBlocks[i] == "2 to 1" ? "tt1_block" : "number_block";
    var colourClass = redBlocks.includes(numberBlocks[i])
      ? " redNum"
      : nbClass == "number_block"
      ? " blackNum"
      : "";
    var numberBlock = document.createElement("div");
    numberBlock.setAttribute("class", nbClass + colourClass);
    numberBlock.onclick = function () {
      if (numberBlocks[a] != "2 to 1") {
        setBet(this, "" + numberBlocks[a] + "", "inside_whole", 35);
      } else {
        num =
          a == 12
            ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36"
            : a == 25
            ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35"
            : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
        setBet(this, num, "outside_column", 2);
      }
    };
    numberBlock.oncontextmenu = function (e) {
      e.preventDefault();
      if (numberBlocks[a] != "2 to 1") {
        removeBet(this, "" + numberBlocks[a] + "", "inside_whole", 35);
      } else {
        num =
          a == 12
            ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36"
            : a == 25
            ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35"
            : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
        removeBet(this, num, "outside_column", 2);
      }
    };
    var nbn = document.createElement("div");
    nbn.setAttribute("class", "nbn");
    nbn.innerText = numberBlocks[i];
    numberBlock.append(nbn);
    numberBoard.append(numberBlock);
  }
  bettingBoard.append(numberBoard);

  let bo3Board = document.createElement("div");
  bo3Board.setAttribute("class", "bo3_board");
  let bo3Blocks = ["1 to 12", "13 to 24", "25 to 36"];
  for (i = 0; i < bo3Blocks.length; i++) {
    let b = i;
    var bo3Block = document.createElement("div");
    bo3Block.setAttribute("class", "bo3_block");
    bo3Block.onclick = function () {
      num =
        b == 0
          ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
          : b == 1
          ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24"
          : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
      setBet(this, num, "outside_dozen", 2);
    };
    bo3Block.oncontextmenu = function (e) {
      e.preventDefault();
      num =
        b == 0
          ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
          : b == 1
          ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24"
          : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
      removeBet(this, num, "outside_dozen", 2);
    };
    bo3Block.innerText = bo3Blocks[i];
    bo3Board.append(bo3Block);
  }
  bettingBoard.append(bo3Board);

  let otoBoard = document.createElement("div");
  otoBoard.setAttribute("class", "oto_board");
  let otoBlocks = ["EVEN", "RED", "BLACK", "ODD"];
  for (i = 0; i < otoBlocks.length; i++) {
    let d = i;
    var colourClass =
      otoBlocks[i] == "RED"
        ? " redNum"
        : otoBlocks[i] == "BLACK"
        ? " blackNum"
        : "";
    var otoBlock = document.createElement("div");
    otoBlock.setAttribute("class", "oto_block" + colourClass);
    otoBlock.onclick = function () {
      num =
        d == 0
          ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36"
          : d == 1
          ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36"
          : d == 2
          ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35"
          : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
      setBet(this, num, "outside_oerb", 1);
    };
    otoBlock.oncontextmenu = function (e) {
      num =
        d == 0
          ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36"
          : d == 1
          ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36"
          : d == 2
          ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35"
          : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
      e.preventDefault();
      removeBet(this, num, "outside_oerb", 1);
    };
    otoBlock.innerText = otoBlocks[i];
    otoBoard.append(otoBlock);
  }
  bettingBoard.append(otoBoard);

  let chipDeck = document.createElement("div");
  chipDeck.setAttribute("class", "chipDeck");
  let chipValues = [1, 5, 10, 100, 500, "clear"];
  for (i = 0; i < chipValues.length; i++) {
    let cvi = i;
    let chipColour =
      i == 0
        ? "red"
        : i == 1
        ? "blue cdChipActive"
        : i == 2
        ? "orange"
        : i == 3
        ? "gold"
        : i == 4
        ? "pink"
        : i == 5
        ? "clearBet"
        : "";

    let chip = document.createElement("div");
    chip.setAttribute("class", "cdChip " + chipColour);
    chip.onclick = function () {
      if (bhskpl) {
        return;
      }
      if (cvi !== 5) {
        let cdChipActive = document.getElementsByClassName("cdChipActive");
        for (i = 0; i < cdChipActive.length; i++) {
          cdChipActive[i].classList.remove("cdChipActive");
        }
        let curClass = this.getAttribute("class");
        if (!curClass.includes("cdChipActive")) {
          this.setAttribute("class", curClass + " cdChipActive");
        }
        wager = parseInt(chip.childNodes[0].innerText);
      } else {
        bankValue = bankValue + currentBet;
        currentBet = 0;
        document.getElementById("bankSpan").innerText =
          "" + bankValue.toLocaleString("en-GB") + "";
        document.getElementById("betSpan").innerText =
          "" + currentBet.toLocaleString("en-GB") + "";
        clearBet();
        removeChips();
      }
    };
    let chipSpan = document.createElement("span");
    chipSpan.setAttribute("class", "cdChipSpan");
    chipSpan.innerText = chipValues[i];
    chip.append(chipSpan);
    chipDeck.append(chip);
  }
  bettingBoard.append(chipDeck);

  let bankContainer = document.createElement("div");
  bankContainer.setAttribute("class", "bankContainer");

  let bank = document.createElement("div");
  bank.setAttribute("class", "bank");
  let bankSpan = document.createElement("span");
  bankSpan.setAttribute("id", "bankSpan");
  bankSpan.innerText = "" + bankValue.toLocaleString("en-GB") + "";
  bank.append(bankSpan);
  bankContainer.append(bank);

  let bet = document.createElement("div");
  bet.setAttribute("class", "bet");
  let betSpan = document.createElement("span");
  betSpan.setAttribute("id", "betSpan");
  betSpan.innerText = "" + currentBet.toLocaleString("en-GB") + "";
  bet.append(betSpan);
  bankContainer.append(bet);
  bettingBoard.append(bankContainer);

  let pnBlock = document.createElement("div");
  pnBlock.setAttribute("class", "pnBlock");
  let pnContent = document.createElement("div");
  pnContent.setAttribute("id", "pnContent");
  pnContent.onwheel = function (e) {
    e.preventDefault();
    pnContent.scrollLeft += e.deltaY;
  };
  pnBlock.append(pnContent);
  bettingBoard.append(pnBlock);

  container.append(bettingBoard);
}

function clearBet() {
  bet = [];
  numbersBet = [];
}
var bhskpl = false;

function setBet(e, n, t, o) {
  if (bhskpl) {
    return;
  }
  lastWager = wager;
  wager = bankValue < wager ? bankValue : wager;
  if (wager > 0) {
    if (!container.querySelector(".spinBtn")) {
      let spinBtn = document.createElement("div");
      spinBtn.setAttribute("class", "spinBtn");
      spinBtn.innerText = "spin";
      spinBtn.onclick = function () {
        this.remove();
        spin();
      };
      container.append(spinBtn);
    }
    bankValue = bankValue - wager;
    currentBet = currentBet + wager;
    document.getElementById("bankSpan").innerText =
      "" + bankValue.toLocaleString("en-GB") + "";
    document.getElementById("betSpan").innerText =
      "" + currentBet.toLocaleString("en-GB") + "";
    for (i = 0; i < bet.length; i++) {
      if (bet[i].numbers == n && bet[i].type == t) {
        bet[i].amt = bet[i].amt + wager;
        let chipColour =
          bet[i].amt < 5
            ? "red"
            : bet[i].amt < 10
            ? "blue"
            : bet[i].amt < 100
            ? "orange"
            : bet[i].amt < 500
            ? "gold"
            : "pink";
        e.querySelector(".chip").style.cssText = "";
        e.querySelector(".chip").setAttribute("class", "chip " + chipColour);
        let chipSpan = e.querySelector(".chipSpan");
        chipSpan.innerText = bet[i].amt;
        return;
      }
    }
    var obj = {
      amt: wager,
      type: t,
      odds: o,
      numbers: n,
    };
    bet.push(obj);

    let numArray = n.split(",").map(Number);
    for (i = 0; i < numArray.length; i++) {
      if (!numbersBet.includes(numArray[i])) {
        numbersBet.push(numArray[i]);
      }
    }

    if (!e.querySelector(".chip")) {
      let chipColour =
        wager < 5
          ? "red"
          : wager < 10
          ? "blue"
          : wager < 100
          ? "orange"
          : wager < 500
          ? "gold"
          : "pink";
      let chip = document.createElement("div");
      chip.setAttribute("class", "chip " + chipColour);
      let chipSpan = document.createElement("span");
      chipSpan.setAttribute("class", "chipSpan");
      chipSpan.innerText = wager;
      chip.append(chipSpan);
      e.append(chip);
    }
  }
}

function spin() {
  items.forEach((x) => {
    useItem(x, 0);
    useItem(x, 1);
  });
  items.forEach((x) => {
    checkFinish(x, 0);
    checkFinish(x, 1);
  });
  if (Math.random() > randteyip) {
    playTeyyip("random");
  }
  var winningSpin = Math.floor(Math.random() * 37);
  if (sansdegisikligi == 0) {
  } else if (Math.floor(Math.random() * 100) + 1 <= sansdegisikligi) {
    winningSpin = numbersBet[Math.floor(Math.random() * numbersBet.length)];
    sansdegisikligi = 0;
  } else if ((Math.floor(Math.random() * 100) + 1) * -1 <= sansdegisikligi) {
    winningSpin = 0;
    mlsd: do {
      if (numbersBet.includes(winningSpin)) {
        winningSpin++;
        continue mlsd;
      }
      if (winningSpin >= 36) {
        winningSpin = Math.floor(Math.random() * 37);
        break mlsd;
      }
    } while (0);
    sansdegisikligi = 0;
  }
  if (Math.random() > randteyip) {
    playTeyyip("random");
  }
  spinWheel(winningSpin);
  setTimeout(function () {
    if (numbersBet.includes(winningSpin)) {
      let winValue = 0;
      let betTotal = 0;
      for (i = 0; i < bet.length; i++) {
        var numArray = bet[i].numbers.split(",").map(Number);
        if (numArray.includes(winningSpin)) {
          bankValue = bankValue + bet[i].odds * bet[i].amt + bet[i].amt;
          winValue = winValue + bet[i].odds * bet[i].amt;
          betTotal = betTotal + bet[i].amt;
        }
      }
      win(winningSpin, winValue, betTotal);
    }

    currentBet = 0;
    document.getElementById("bankSpan").innerText =
      "" + bankValue.toLocaleString("en-GB") + "";
    document.getElementById("betSpan").innerText =
      "" + currentBet.toLocaleString("en-GB") + "";

    let pnClass = numRed.includes(winningSpin)
      ? "pnRed"
      : winningSpin == 0
      ? "pnGreen"
      : "pnBlack";
    let pnContent = document.getElementById("pnContent");
    let pnSpan = document.createElement("span");
    pnSpan.setAttribute("class", pnClass);
    pnSpan.innerText = winningSpin;
    pnContent.append(pnSpan);
    pnContent.scrollLeft = pnContent.scrollWidth;

    bet = [];
    numbersBet = [];
    removeChips();
    wager = lastWager;
    if (bankValue == 0 && currentBet == 0) {
      if (gameoverd == false) {
        gameOver();
      }
    }
  }, 6000);
}

function revent() {
  items.forEach((x) => {
    useItem(x, 4);
  });
  items.forEach((x) => {
    checkFinish(x, 4);
  });
  var rndmd = Math.floor(Math.random() * 2);
  var evnt = "";
  if (rndmd >= 1) {
    evnt =
      revents_1[Math.floor(Math.random() * revents_1.length)] +
      " " +
      revents_2B[Math.floor(Math.random() * revents_2B.length)];
  } else {
    evnt =
      revents_1[Math.floor(Math.random() * revents_1.length)] +
      " " +
      revents_2B[Math.floor(Math.random() * revents_2B.length)];
  }

  let notification = document.createElement("div");
  notification.setAttribute("id", "notification");
  notification.className = "notification";
  notification.style.zIndex = 999999;

  let notificati2eon = document.createElement("div");
  notificati2eon.style.height = "100vh";
  notificati2eon.style.width = "100vw";
  notificati2eon.style.justifyContent = "center";
  notificati2eon.style.alignContent = "center";
  notificati2eon.style.zIndex = 9999;
  notificati2eon.style.position = "absolute";

  let ram =
    Math.floor(
      Math.random() * (bankValue / (Math.floor(Math.random() * 4) + 1))
    ) + 1;
  let nimage = document.createElement("img");

  getrndmcdla().then((x) => {
    nimage.src = x;
  });
  nimage.style.objectFit = "fill";
  nimage.style.display = "flex";
  nimage.style.position = "absolute";
  nimage.style.zIndex = 900;
  nimage.style.width = "100%";
  nimage.style.height = "100%";

  //<img src="https://media1.tenor.com/m/h9HkhpDMVSYAAAAC/onlydoja-doja-cat-car.gif" class="object-fill h-screen w-screen ">
  let mdiv = document.createElement("div");
  mdiv.style.position = "absolute";
  mdiv.style.width = "100%";
  mdiv.style.height = "100%";
  mdiv.style.zIndex = 9999;
  let nbnvl = 0;
  let nSpan = document.createElement("span");
  nSpan.setAttribute("class", "nSpan");
  let pm = "";
  let durum = "ERR " + evnt.substring(0, evnt.length - 1);
  if (evnt.substring(evnt.length - 1, evnt.length) == "0") {
    if (olumsuz) {
      items.forEach((x) => {
        checkFinish(x, 11);
      });
      durum =
        "Yakisikliguvenlik5188'in spesyal kelepçesi tarafından kurtarıldın";
    } else {
      durum = "Öldün";
      bankValue = 0;
      saveGame();
      pm = "die";
    }
  } else if (evnt.substring(evnt.length - 1, evnt.length) == "-") {
    durum = "Paran azaldı";
    bankValue = bankValue - ram;
    pm = "paraaz";
  } else if (evnt.substring(evnt.length - 1, evnt.length) == "+") {
    durum = "Paran arttı";
    bankValue = bankValue + ram;
    pm = "paraart";
  } else if (evnt.substring(evnt.length - 1, evnt.length) == "1") {
    durum =
      "Aranıyorsun (Şans değişkenliğini rastgele bir yönde 1 puan arttırır)";
    if (Math.floor(Math.random() * 100) > 5) {
      sansdegisikligi++;
    } else {
      sansdegisikligi--;
    }
    pm = "random";
  } else if (evnt.substring(evnt.length - 1, evnt.length) == "*") {
    durum =
      "Şans değişikliği (Şans değişkenliğini rastgele bir şekilde belirler)";
    if (Math.floor(Math.random() * 100) > 50) {
      sansdegisikligi = Math.floor(Math.random() * 100) + 1;
    } else {
      sansdegisikligi = (Math.floor(Math.random() * 100) + 1) * -1;
    }
    pm = "random";
  }
  if (olumsuz) {
    if (bankValue <= 0) {
      bankValue = 1000;
      durum = "Bodrumlu kurpiyer tarafından kurtarıldın";
      items.forEach((x) => {
        checkFinish(x, 11);
      });
    }
  }

  nSpan.innerText = durum;

  mdiv.append(nSpan);

  playTeyyip(pm);

  let nSpana = document.createElement("span");
  nSpana.setAttribute("class", "nSpan");
  let evntST = evnt.substring(0, evnt.length - 1).replace("XYZ", ram);
  evntST =
    evntST.substring(0, 1).toLowerCase() +
    evntST.substring(1, evntST.length).toLowerCase();
  Speak(durum);
  Speak(evntST);
  if (durum == "Öldün" || bankValue + currentBet == 0) {
    if (gameoverd == false && intgameover == false) {
      gameOver();
    }
  }
  nSpana.innerText = evntST;
  nSpana.style.fontSize = "15px";
  mdiv.append(nSpana);
  let nBtn = document.createElement("div");
  nBtn.setAttribute("class", "nBtn");
  nBtn.innerText = "Analyaladım.";
  nBtn.onclick = function () {
    notification.remove();
    notificati2eon.remove();
    /*if (durum == "Öldün") {
      gameOver();
    }*/
  };
  mdiv.append(nBtn);
  notification.appendChild(mdiv);
  notification.appendChild(nimage);

  container.prepend(notification);
  container.prepend(notificati2eon);
  items.forEach((x) => {
    useItem(x, 9);
  });
  items.forEach((x) => {
    checkFinish(x, 9);
  });
}

function win(winningSpin, winValue, betTotal) {
  items.forEach((x) => {
    useItem(x, 5);
  });
  items.forEach((x) => {
    checkFinish(x, 5);
  });
  playTeyyip("win");
  if (winValue > 0) {
    let notification = document.createElement("div");
    notification.setAttribute("id", "notification");
    let nimage = document.createElement("img");
    const rndimg = Math.floor(Math.random() * 111) + 1;

    getrndmcdla().then((x) => {
      nimage.src = x;
    });
    nimage.style.objectFit = "fill";
    nimage.style.display = "flex";
    nimage.style.position = "absolute";
    nimage.style.zIndex = "-1";
    nimage.style.width = "100%";
    nimage.style.height = "100%";
    let mdiv = document.createElement("div");
    mdiv.style.position = "absolute";
    mdiv.style.width = "100%";
    mdiv.style.height = "100%";
    mdiv.style.zIndex = "1";
    let nSpan = document.createElement("div");
    nSpan.setAttribute("class", "nSpan");
    let nsnumber = document.createElement("span");
    nsnumber.setAttribute("class", "nsnumber");
    nsnumber.style.cssText = numRed.includes(winningSpin)
      ? "color:red"
      : "color:black";
    nsnumber.innerText = winningSpin;
    nSpan.append(nsnumber);
    let nsTxt = document.createElement("span");
    nsTxt.innerText = " Win";
    nSpan.append(nsTxt);
    let nsWin = document.createElement("div");
    nsWin.setAttribute("class", "nsWin");
    let nsWinBlock = document.createElement("div");
    nsWinBlock.setAttribute("class", "nsWinBlock");
    nsWinBlock.innerText = "Bet: " + betTotal;
    nSpan.append(nsWinBlock);
    nsWin.append(nsWinBlock);
    nsWinBlock = document.createElement("div");
    nsWinBlock.setAttribute("class", "nsWinBlock");
    nsWinBlock.innerText = "Win: " + winValue;
    nSpan.append(nsWinBlock);
    nsWin.append(nsWinBlock);
    nsWinBlock = document.createElement("div");
    nsWinBlock.setAttribute("class", "nsWinBlock");
    nsWinBlock.innerText = "Payout: " + (winValue + betTotal);
    nsWin.append(nsWinBlock);
    nSpan.append(nsWin);
    nSpan.style.backgroundColor = "#3636367c";
    mdiv.append(nSpan);
    notification.appendChild(mdiv);
    notification.appendChild(nimage);
    container.prepend(notification);
    setTimeout(function () {
      notification.style.cssText = "opacity:0";
    }, 5000);
    setTimeout(function () {
      notification.remove();
    }, 6000);
  }
}
function removeBet(e, n, t, o) {
  if (bhskpl) {
    return;
  }
  wager = wager == 0 ? 100 : wager;
  for (i = 0; i < bet.length; i++) {
    if (bet[i].numbers == n && bet[i].type == t) {
      if (bet[i].amt != 0) {
        wager = bet[i].amt > wager ? wager : bet[i].amt;
        bet[i].amt = bet[i].amt - wager;
        bankValue = bankValue + wager;
        currentBet = currentBet - wager;
        document.getElementById("bankSpan").innerText =
          "" + bankValue.toLocaleString("en-GB") + "";
        document.getElementById("betSpan").innerText =
          "" + currentBet.toLocaleString("en-GB") + "";
        if (bet[i].amt == 0) {
          e.querySelector(".chip").style.cssText = "display:none";
        } else {
          let chipColour =
            bet[i].amt < 5
              ? "red"
              : bet[i].amt < 10
              ? "blue"
              : bet[i].amt < 100
              ? "orange"
              : bet[i].amt < 500
              ? "gold"
              : "pink";
          e.querySelector(".chip").setAttribute("class", "chip " + chipColour);
          let chipSpan = e.querySelector(".chipSpan");
          chipSpan.innerText = bet[i].amt;
        }
      }
    }
  }

  if (currentBet == 0 && container.querySelector(".spinBtn")) {
    document.getElementsByClassName("spinBtn")[0].remove();
  }
}

function spinWheel(winningSpin) {
  bhskpl = true;
  for (i = 0; i < wheelnumbersAC.length; i++) {
    if (wheelnumbersAC[i] == winningSpin) {
      var degree = i * 9.73 + 362;
    }
  }
  wheel.style.cssText = "animation: wheelRotate 2s linear infinite;";
  ballTrack.style.cssText = "animation: ballRotate 1s linear infinite;";

  setTimeout(function () {
    ballTrack.style.cssText = "animation: ballRotate 1s linear infinite;";
    style = document.createElement("style");
    style.type = "text/css";
    style.innerText =
      "@keyframes ballStop {from {transform: rotate(0deg);}to{transform: rotate(-" +
      degree +
      "deg);}}";
    document.head.appendChild(style);
  }, 2000);
  setTimeout(function () {
    ballTrack.style.cssText = "animation: ballStop 2s linear;";
  }, 3000);
  setTimeout(function () {
    ballTrack.style.cssText = "transform: rotate(-" + degree + "deg);";
  }, 5000);
  setTimeout(function () {
    wheel.style.cssText = "";
    style.remove();
    bhskpl = false;
    items.forEach((x) => {
      useItem(x, 7);
    });
    items.forEach((x) => {
      checkFinish(x, 7);
    });
    if (Math.random() <= revs) {
      revent();
    }
  }, 6000);
}

function removeChips() {
  if (bhskpl) {
    return;
  }
  var chips = document.getElementsByClassName("chip");
  if (chips.length > 0) {
    for (i = 0; i < chips.length; i++) {
      chips[i].remove();
    }
    removeChips();
  }
}

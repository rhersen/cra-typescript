interface Geometry {
  SWEREF99TM?: string;
  WGS84: string;
}

interface TrainStation {
  AdvertisedShortLocationName: string;
  Geometry: Geometry;
  LocationSignature: string;
}

const raw: { RESPONSE: { RESULT: { TrainStation: TrainStation[] }[] } } = {
  RESPONSE: {
    RESULT: [
      {
        TrainStation: [
          {
            AdvertisedShortLocationName: "Abborrträsk",
            Geometry: {
              SWEREF99TM: "POINT (704378 7265372)",
              WGS84: "POINT (19.41057490018656 65.446451078360056)"
            },
            LocationSignature: "Abb"
          },
          {
            AdvertisedShortLocationName: "Almedal",
            Geometry: {
              SWEREF99TM: "POINT (321386 6397481)",
              WGS84: "POINT (12.003992324656123 57.684028973333469)"
            },
            LocationSignature: "Am"
          },
          {
            AdvertisedShortLocationName: "Astrid Lindgrens värld",
            Geometry: {
              SWEREF99TM: "POINT (550107 6392583)",
              WGS84: "POINT (15.840063951305682 57.672707295232549)"
            },
            LocationSignature: "Alv"
          },
          {
            AdvertisedShortLocationName: "Almnäs",
            Geometry: {
              SWEREF99TM: "POINT (643349 6561610)",
              WGS84: "POINT (17.507802824548527 59.169404149769846)"
            },
            LocationSignature: "Alä"
          },
          {
            AdvertisedShortLocationName: "Arnemark",
            Geometry: {
              SWEREF99TM: "POINT (787450 7277419)",
              WGS84: "POINT (21.217933827304552 65.491275571655123)"
            },
            LocationSignature: "Amk"
          },
          {
            AdvertisedShortLocationName: "Aneby",
            Geometry: {
              SWEREF99TM: "POINT (488831 6410627)",
              WGS84: "POINT (14.811896268710351 57.837434576066045)"
            },
            LocationSignature: "Any"
          },
          {
            AdvertisedShortLocationName: "Arvån",
            Geometry: {
              SWEREF99TM: "POINT (691781 7165289)",
              WGS84: "POINT (19.003010968874246 64.558357343031545)"
            },
            LocationSignature: "An"
          },
          {
            AdvertisedShortLocationName: "Anundsjö",
            Geometry: {
              SWEREF99TM: "POINT (656867 7036977)",
              WGS84: "POINT (18.143823651881625 63.426648848641761)"
            },
            LocationSignature: "Anö"
          },
          {
            AdvertisedShortLocationName: "Aplared",
            Geometry: {
              SWEREF99TM: "POINT (385085 6391514)",
              WGS84: "POINT (13.074416477742151 57.6512374770022)"
            },
            LocationSignature: "Apd"
          },
          {
            AdvertisedShortLocationName: "Aspeå",
            Geometry: {
              SWEREF99TM: "POINT (625607 7031250)",
              WGS84: "POINT (17.513645657598339 63.3876933956481)"
            },
            LocationSignature: "Ap"
          },
          {
            AdvertisedShortLocationName: "Aspen",
            Geometry: {
              SWEREF99TM: "POINT (335801 6404715)",
              WGS84: "POINT (12.240512241673448 57.754422056779553)"
            },
            LocationSignature: "Apn"
          },
          {
            AdvertisedShortLocationName: "Arvika",
            Geometry: {
              SWEREF99TM: "POINT (364238 6615302)",
              WGS84: "POINT (12.59080337767365 59.653634163769432)"
            },
            LocationSignature: "Ar"
          },
          {
            AdvertisedShortLocationName: "Arnäsvall",
            Geometry: {
              SWEREF99TM: "POINT (689662 7025510)",
              WGS84: "POINT (18.785943419604941 63.308020684331325)"
            },
            LocationSignature: "Ara"
          },
          {
            AdvertisedShortLocationName: "Arlanda",
            Geometry: {
              SWEREF99TM: "POINT (665036 6615971)",
              WGS84: "POINT (17.928489392445165 59.649072120867778)"
            },
            LocationSignature: "Arnc"
          },
          {
            AdvertisedShortLocationName: "Aptas",
            Geometry: {
              SWEREF99TM: "POINT (729627 7526670)",
              WGS84: "POINT (20.443372763603172 67.764096702974271)"
            },
            LocationSignature: "Apt"
          },
          {
            AdvertisedShortLocationName: "Arboga",
            Geometry: {
              SWEREF99TM: "POINT (547732 6584582)",
              WGS84: "POINT (15.840525578708135 59.397189387512292)"
            },
            LocationSignature: "Arb"
          },
          {
            AdvertisedShortLocationName: "Arlanda nedre",
            Geometry: {
              SWEREF99TM: "POINT (664813 6614137)",
              WGS84: "POINT (17.923106648878097 59.632712921589757)"
            },
            LocationSignature: "Arne"
          },
          {
            AdvertisedShortLocationName: "Arlanda N",
            Geometry: {
              SWEREF99TM: "POINT (665100 6616247)",
              WGS84: "POINT (17.929839291864006 59.651521946991636)"
            },
            LocationSignature: "Arnn"
          },
          {
            AdvertisedShortLocationName: "Arlanda S",
            Geometry: {
              SWEREF99TM: "POINT (665038 6615720)",
              WGS84: "POINT (17.928328521669549 59.646820357358884)"
            },
            LocationSignature: "Arns"
          },
          {
            AdvertisedShortLocationName: "Aspedalen",
            Geometry: {
              SWEREF99TM: "POINT (336906 6405568)",
              WGS84: "POINT (12.258478364737194 57.762478066627452)"
            },
            LocationSignature: "Asd"
          },
          {
            AdvertisedShortLocationName: "Attarp",
            Geometry: {
              SWEREF99TM: "POINT (428453 6221947)",
              WGS84: "POINT (13.848710498300447 56.137202938010475)"
            },
            LocationSignature: "Atp"
          },
          {
            AdvertisedShortLocationName: "Assberg",
            Geometry: {
              SWEREF99TM: "POINT (360272 6374815)",
              WGS84: "POINT (12.668601530814378 57.494351721465591)"
            },
            LocationSignature: "Asb"
          },
          {
            AdvertisedShortLocationName: "Alvesta",
            Geometry: {
              SWEREF99TM: "POINT (472966 6306122)",
              WGS84: "POINT (14.556191772126336 56.898021929413062)"
            },
            LocationSignature: "Av"
          },
          {
            AdvertisedShortLocationName: "Avaviken",
            Geometry: {
              SWEREF99TM: "POINT (668186 7280779)",
              WGS84: "POINT (18.650923725268491 65.605119831401467)"
            },
            LocationSignature: "Ava"
          },
          {
            AdvertisedShortLocationName: "Almvik",
            Geometry: {
              SWEREF99TM: "POINT (587081 6410622)",
              WGS84: "POINT (16.466310525988412 57.829056229282116)"
            },
            LocationSignature: "Avk"
          },
          {
            AdvertisedShortLocationName: "Avesta Krylbo",
            Geometry: {
              SWEREF99TM: "POINT (567566 6666459)",
              WGS84: "POINT (16.216147851939283 60.129533243485056)"
            },
            LocationSignature: "Avky"
          },
          {
            AdvertisedShortLocationName: "Axmarby",
            Geometry: {
              SWEREF99TM: "POINT (614275 6765454)",
              WGS84: "POINT (17.113590037738035 61.007386390699317)"
            },
            LocationSignature: "Ax"
          },
          {
            AdvertisedShortLocationName: "Alby",
            Geometry: {
              SWEREF99TM: "POINT (524463 6928875)",
              WGS84: "POINT (15.474700355693072 62.49014843973216)"
            },
            LocationSignature: "Ay"
          },
          {
            AdvertisedShortLocationName: "Alväng",
            Geometry: {
              SWEREF99TM: "POINT (532160 6582393)",
              WGS84: "POINT (15.566005650156104 59.379010567049832)"
            },
            LocationSignature: "Aä"
          },
          {
            AdvertisedShortLocationName: "Björnlunda",
            Geometry: {
              SWEREF99TM: "POINT (623541 6549344)",
              WGS84: "POINT (17.154658166569 59.065550410038206)"
            },
            LocationSignature: "B"
          },
          {
            AdvertisedShortLocationName: "Barkåkra",
            Geometry: {
              SWEREF99TM: "POINT (365370 6240890)",
              WGS84: "POINT (12.82463192214527 56.293655747656992)"
            },
            LocationSignature: "Baa"
          },
          {
            AdvertisedShortLocationName: "Badsta",
            Geometry: {
              SWEREF99TM: "POINT (459941 6601231)",
              WGS84: "POINT (14.291454388831607 59.547485916116692)"
            },
            LocationSignature: "Bad"
          },
          {
            AdvertisedShortLocationName: "Backsjön",
            Geometry: {
              SWEREF99TM: "POINT (615159 7023835)",
              WGS84: "POINT (17.299451329057007 63.32472291232866)"
            },
            LocationSignature: "Baö"
          },
          {
            AdvertisedShortLocationName: "Blyberg",
            Geometry: {
              SWEREF99TM: "POINT (453592 6780166)",
              WGS84: "POINT (14.137781476652821 61.153276117780926)"
            },
            LocationSignature: "Bbe"
          },
          {
            AdvertisedShortLocationName: "Blidstena",
            Geometry: {
              SWEREF99TM: "POINT (581269 6433909)",
              WGS84: "POINT (16.37646058090267 58.039256537785676)"
            },
            LocationSignature: "Bda"
          },
          {
            AdvertisedShortLocationName: "Badabruk",
            Geometry: {
              SWEREF99TM: "POINT (394016 6659863)",
              WGS84: "POINT (13.096135539789634 60.062187374974791)"
            },
            LocationSignature: "Bdb"
          },
          {
            AdvertisedShortLocationName: "Bodafors",
            Geometry: {
              SWEREF99TM: "POINT (481711 6373766)",
              WGS84: "POINT (14.694780136411504 57.506100139535356)"
            },
            LocationSignature: "Bdf"
          },
          {
            AdvertisedShortLocationName: "Broddbo",
            Geometry: {
              SWEREF99TM: "POINT (582684 6650880)",
              WGS84: "POINT (16.481882451382702 59.986915853150151)"
            },
            LocationSignature: "Bdo"
          },
          {
            AdvertisedShortLocationName: "Bodens södra",
            Geometry: {
              SWEREF99TM: "POINT (803308 7316533)",
              WGS84: "POINT (21.647366893624461 65.825475329736136)"
            },
            LocationSignature: "Bds"
          },
          {
            AdvertisedShortLocationName: "Bredaryd",
            Geometry: {
              SWEREF99TM: "POINT (423681 6337744)",
              WGS84: "POINT (13.737651016592572 57.176536756737271)"
            },
            LocationSignature: "Bdy"
          },
          {
            AdvertisedShortLocationName: "Boden",
            Geometry: {
              SWEREF99TM: "POINT (806029 7317197)",
              WGS84: "POINT (21.708053326414298 65.828802335470925)"
            },
            LocationSignature: "Bdn"
          },
          {
            AdvertisedShortLocationName: "Backe",
            Geometry: {
              SWEREF99TM: "POINT (570269 7076329)",
              WGS84: "POINT (16.426909512343318 63.807321858640343)"
            },
            LocationSignature: "Be"
          },
          {
            AdvertisedShortLocationName: "Bengtsfors",
            Geometry: {
              SWEREF99TM: "POINT (341299 6546555)",
              WGS84: "POINT (12.234869527899678 59.028904004215477)"
            },
            LocationSignature: "Bef"
          },
          {
            AdvertisedShortLocationName: "Bredviken",
            Geometry: {
              SWEREF99TM: "POINT (875190 7326436)",
              WGS84: "POINT (23.233153872313103 65.837382965702332)"
            },
            LocationSignature: "Ben"
          },
          {
            AdvertisedShortLocationName: "Bruksberget",
            Geometry: {
              SWEREF99TM: "POINT (849336 7341843)",
              WGS84: "POINT (22.713627361914185 66.003649736578907)"
            },
            LocationSignature: "Bet"
          },
          {
            AdvertisedShortLocationName: "Brunflo",
            Geometry: {
              SWEREF99TM: "POINT (491542 6994065)",
              WGS84: "POINT (14.832583929611941 63.075973294569224)"
            },
            LocationSignature: "Bf"
          },
          {
            AdvertisedShortLocationName: "Billingsfors",
            Geometry: {
              SWEREF99TM: "POINT (341933 6541296)",
              WGS84: "POINT (12.249669582513393 58.981964377368307)"
            },
            LocationSignature: "Bfo"
          },
          {
            AdvertisedShortLocationName: "Bergfors",
            Geometry: {
              SWEREF99TM: "POINT (698501 7566979)",
              WGS84: "POINT (19.782687856496558 68.147270584493924)"
            },
            LocationSignature: "Bfs"
          },
          {
            AdvertisedShortLocationName: "Berga",
            Geometry: {
              SWEREF99TM: "POINT (562413 6341963)",
              WGS84: "POINT (16.033442979973792 57.216532807734083)"
            },
            LocationSignature: "Bg"
          },
          {
            AdvertisedShortLocationName: "Brogården",
            Geometry: {
              SWEREF99TM: "POINT (443967 6419884)",
              WGS84: "POINT (14.054206207982483 57.917202708653321)"
            },
            LocationSignature: "Bgd"
          },
          {
            AdvertisedShortLocationName: "Berghem",
            Geometry: {
              SWEREF99TM: "POINT (355956 6371922)",
              WGS84: "POINT (12.598364454832875 57.467036793064715)"
            },
            LocationSignature: "Bgm"
          },
          {
            AdvertisedShortLocationName: "Bryngenäs",
            Geometry: {
              SWEREF99TM: "POINT (351089 6420094)",
              WGS84: "POINT (12.487553829743899 57.897760384092891)"
            },
            LocationSignature: "Bgs"
          },
          {
            AdvertisedShortLocationName: "Bälgviken",
            Geometry: {
              SWEREF99TM: "POINT (583297 6569101)",
              WGS84: "POINT (16.460636576860814 59.252678211310347)"
            },
            LocationSignature: "Bgv"
          },
          {
            AdvertisedShortLocationName: "Bohus",
            Geometry: {
              SWEREF99TM: "POINT (323196 6417465)",
              WGS84: "POINT (12.019564385027421 57.864005566109533)"
            },
            LocationSignature: "Bhs"
          },
          {
            AdvertisedShortLocationName: "Bräkne-Hoby",
            Geometry: {
              SWEREF99TM: "POINT (507195 6231837)",
              WGS84: "POINT (15.116058353150356 56.231370135773936)"
            },
            LocationSignature: "Bhb"
          },
          {
            AdvertisedShortLocationName: "Birsta",
            Geometry: {
              SWEREF99TM: "POINT (619331 6926127)",
              WGS84: "POINT (17.312612828803847 62.4471206965861)"
            },
            LocationSignature: "Bia"
          },
          {
            AdvertisedShortLocationName: "Billeberga",
            Geometry: {
              SWEREF99TM: "POINT (374640 6194958)",
              WGS84: "POINT (12.995848263441582 55.883760199238544)"
            },
            LocationSignature: "Bib"
          },
          {
            AdvertisedShortLocationName: "Billesholm",
            Geometry: {
              SWEREF99TM: "POINT (374013 6214203)",
              WGS84: "POINT (12.976830160760777 56.056405403464062)"
            },
            LocationSignature: "Bih"
          },
          {
            AdvertisedShortLocationName: "Björna",
            Geometry: {
              SWEREF99TM: "POINT (678675 7052051)",
              WGS84: "POINT (18.596871908021676 63.551403054899886)"
            },
            LocationSignature: "Bj"
          },
          {
            AdvertisedShortLocationName: "Bjästa",
            Geometry: {
              SWEREF99TM: "POINT (673148 7013812)",
              WGS84: "POINT (18.444524046377495 63.211586609396704)"
            },
            LocationSignature: "Bja"
          },
          {
            AdvertisedShortLocationName: "Björneborg",
            Geometry: {
              SWEREF99TM: "POINT (457239 6567502)",
              WGS84: "POINT (14.250384990924363 59.244355078508534)"
            },
            LocationSignature: "Bjb"
          },
          {
            AdvertisedShortLocationName: "Bjurhem",
            Geometry: {
              SWEREF99TM: "POINT (341178 6479627)",
              WGS84: "POINT (12.280053125646678 58.428466200409758)"
            },
            LocationSignature: "Bjh"
          },
          {
            AdvertisedShortLocationName: "Bjärnum",
            Geometry: {
              SWEREF99TM: "POINT (419790 6239437)",
              WGS84: "POINT (13.704058721808993 56.292926880432667)"
            },
            LocationSignature: "Bjm"
          },
          {
            AdvertisedShortLocationName: "Björnkulla",
            Geometry: {
              SWEREF99TM: "POINT (667224 6566413)",
              WGS84: "POINT (17.928581196472948 59.203755842684181)"
            },
            LocationSignature: "Bjn"
          },
          {
            AdvertisedShortLocationName: "Björketorp",
            Geometry: {
              SWEREF99TM: "POINT (351335 6367730)",
              WGS84: "POINT (12.523944501737624 57.427925967946379)"
            },
            LocationSignature: "Bjo"
          },
          {
            AdvertisedShortLocationName: "Bjuv",
            Geometry: {
              SWEREF99TM: "POINT (370007 6217236)",
              WGS84: "POINT (12.911074025042494 56.082567437311837)"
            },
            LocationSignature: "Bjuv"
          },
          {
            AdvertisedShortLocationName: "Björnsjö",
            Geometry: {
              SWEREF99TM: "POINT (672160 7046809)",
              WGS84: "POINT (18.460313302983852 63.50766867606913)"
            },
            LocationSignature: "Bjö"
          },
          {
            AdvertisedShortLocationName: "Björköby",
            Geometry: {
              SWEREF99TM: "POINT (494643 6375393)",
              WGS84: "POINT (14.910562163614289 57.5210524686644)"
            },
            LocationSignature: "Bjy"
          },
          {
            AdvertisedShortLocationName: "Barkarby",
            Geometry: {
              SWEREF99TM: "POINT (662554 6588698)",
              WGS84: "POINT (17.86367834371055 59.4054464125127)"
            },
            LocationSignature: "Bkb"
          },
          {
            AdvertisedShortLocationName: "Ballingslöv",
            Geometry: {
              SWEREF99TM: "POINT (428576 6230498)",
              WGS84: "POINT (13.848391969821044 56.214033924447747)"
            },
            LocationSignature: "Bl"
          },
          {
            AdvertisedShortLocationName: "Blädinge",
            Geometry: {
              SWEREF99TM: "POINT (469763 6299853)",
              WGS84: "POINT (14.504356836603698 56.841507600561947)"
            },
            LocationSignature: "Bld"
          },
          {
            AdvertisedShortLocationName: "Borlänge",
            Geometry: {
              SWEREF99TM: "POINT (523385 6705273)",
              WGS84: "POINT (15.42547212652746 60.482943134927282)"
            },
            LocationSignature: "Blg"
          },
          {
            AdvertisedShortLocationName: "Björkliden",
            Geometry: {
              SWEREF99TM: "POINT (651311 7592925)",
              WGS84: "POINT (18.686353433375523 68.4083872371577)"
            },
            LocationSignature: "Bln"
          },
          {
            AdvertisedShortLocationName: "Burlöv",
            Geometry: {
              SWEREF99TM: "POINT (379179 6167787)",
              WGS84: "POINT (13.080395596992465 55.640918231225484)"
            },
            LocationSignature: "Blv"
          },
          {
            AdvertisedShortLocationName: "Blomstermåla",
            Geometry: {
              SWEREF99TM: "POINT (580962 6316028)",
              WGS84: "POINT (16.332114010417143 56.980711165337908)"
            },
            LocationSignature: "Bma"
          },
          {
            AdvertisedShortLocationName: "Båramo",
            Geometry: {
              SWEREF99TM: "POINT (445434 6368241)",
              WGS84: "POINT (14.090655698146163 57.45356036001008)"
            },
            LocationSignature: "Bmo"
          },
          {
            AdvertisedShortLocationName: "Bromölla",
            Geometry: {
              SWEREF99TM: "POINT (467726 6213676)",
              WGS84: "POINT (14.48161953808914 56.067164587471218)"
            },
            LocationSignature: "Bml"
          },
          {
            AdvertisedShortLocationName: "Blomberg",
            Geometry: {
              SWEREF99TM: "POINT (402233 6490072)",
              WGS84: "POINT (13.32052028569632 58.540152712581012)"
            },
            LocationSignature: "Bmb"
          },
          {
            AdvertisedShortLocationName: "Bollnäs",
            Geometry: {
              SWEREF99TM: "POINT (574440 6802509)",
              WGS84: "POINT (16.391720410683643 61.349484744524425)"
            },
            LocationSignature: "Bn"
          },
          {
            AdvertisedShortLocationName: "Brunna",
            Geometry: {
              SWEREF99TM: "POINT (636027 6638465)",
              WGS84: "POINT (17.428941542129181 59.861356328250849)"
            },
            LocationSignature: "Bna"
          },
          {
            AdvertisedShortLocationName: "Blattnicksele",
            Geometry: {
              SWEREF99TM: "POINT (620525 7249354)",
              WGS84: "POINT (17.589835935876906 65.344755835833155)"
            },
            LocationSignature: "Bnk"
          },
          {
            AdvertisedShortLocationName: "Borgstena",
            Geometry: {
              SWEREF99TM: "POINT (382286 6417409)",
              WGS84: "POINT (13.014832928384235 57.882975231064876)"
            },
            LocationSignature: "Boa"
          },
          {
            AdvertisedShortLocationName: "Boda",
            Geometry: {
              SWEREF99TM: "POINT (606574 6830204)",
              WGS84: "POINT (17.008064210049056 61.5904846664003)"
            },
            LocationSignature: "Boda"
          },
          {
            AdvertisedShortLocationName: "Bofors",
            Geometry: {
              SWEREF99TM: "POINT (474222 6577255)",
              WGS84: "POINT (14.546926136891264 59.333310868482819)"
            },
            LocationSignature: "Bof"
          },
          {
            AdvertisedShortLocationName: "Bodaborg",
            Geometry: {
              SWEREF99TM: "POINT (570957 6926109)",
              WGS84: "POINT (16.375557510628752 62.459348157543673)"
            },
            LocationSignature: "Bog"
          },
          {
            AdvertisedShortLocationName: "Bomansberget",
            Geometry: {
              SWEREF99TM: "POINT (622562 6725979)",
              WGS84: "POINT (17.24179487616588 60.650761815337113)"
            },
            LocationSignature: "Bom"
          },
          {
            AdvertisedShortLocationName: "Botorp",
            Geometry: {
              SWEREF99TM: "POINT (469440 6575440)",
              WGS84: "POINT (14.463138775048815 59.316693358424992)"
            },
            LocationSignature: "Bop"
          },
          {
            AdvertisedShortLocationName: "Bor",
            Geometry: {
              SWEREF99TM: "POINT (449655 6330620)",
              WGS84: "POINT (14.168643533803387 57.116131557536093)"
            },
            LocationSignature: "Bor"
          },
          {
            AdvertisedShortLocationName: "Bollebygd",
            Geometry: {
              SWEREF99TM: "POINT (355055 6394294)",
              WGS84: "POINT (12.570010936961378 57.667530503780583)"
            },
            LocationSignature: "Boy"
          },
          {
            AdvertisedShortLocationName: "Born",
            Geometry: {
              SWEREF99TM: "POINT (480772 6777907)",
              WGS84: "POINT (14.642970546979571 61.135270417756523)"
            },
            LocationSignature: "Born"
          },
          {
            AdvertisedShortLocationName: "Brännarp",
            Geometry: {
              SWEREF99TM: "POINT (361218 6296104)",
              WGS84: "POINT (12.728098805015531 56.788125737368212)"
            },
            LocationSignature: "Bp"
          },
          {
            AdvertisedShortLocationName: "Brännland",
            Geometry: {
              SWEREF99TM: "POINT (748187 7093557)",
              WGS84: "POINT (20.056619107214942 63.880649420314832)"
            },
            LocationSignature: "Brd"
          },
          {
            AdvertisedShortLocationName: "Brista",
            Geometry: {
              SWEREF99TM: "POINT (661774 6611469)",
              WGS84: "POINT (17.867244912541 59.609974570890515)"
            },
            LocationSignature: "Bra"
          },
          {
            AdvertisedShortLocationName: "Bränninge",
            Geometry: {
              SWEREF99TM: "POINT (650758 6558674)",
              WGS84: "POINT (17.635236550549021 59.14050116995778)"
            },
            LocationSignature: "Bre"
          },
          {
            AdvertisedShortLocationName: "Brännberg",
            Geometry: {
              SWEREF99TM: "POINT (784589 7309851)",
              WGS84: "POINT (21.225706346771691 65.783076363457752)"
            },
            LocationSignature: "Brg"
          },
          {
            AdvertisedShortLocationName: "Agnesberg",
            Geometry: {
              SWEREF99TM: "POINT (322050 6408268)",
              WGS84: "POINT (12.007126103824072 57.78105359528368)"
            },
            LocationSignature: "Agb"
          },
          {
            AdvertisedShortLocationName: "Brattheden",
            Geometry: {
              SWEREF99TM: "POINT (566295 6628396)",
              WGS84: "POINT (16.181052461125322 59.788034889005132)"
            },
            LocationSignature: "Brh"
          },
          {
            AdvertisedShortLocationName: "Brinellskolan",
            Geometry: {
              SWEREF99TM: "POINT (482160 6391946)",
              WGS84: "POINT (14.700936325969137 57.669420274461267)"
            },
            LocationSignature: "Brin"
          },
          {
            AdvertisedShortLocationName: "Brokind",
            Geometry: {
              SWEREF99TM: "POINT (540196 6453424)",
              WGS84: "POINT (15.68424108161552 58.220144591128324)"
            },
            LocationSignature: "Brk"
          },
          {
            AdvertisedShortLocationName: "Brålanda",
            Geometry: {
              SWEREF99TM: "POINT (345779 6494109)",
              WGS84: "POINT (12.348971725150546 58.56004200574592)"
            },
            LocationSignature: "Brl"
          },
          {
            AdvertisedShortLocationName: "Bro Nygård",
            Geometry: {
              SWEREF99TM: "POINT (651265 6598512)",
              WGS84: "POINT (17.672002311768015 59.497689369386769)"
            },
            LocationSignature: "Brny"
          },
          {
            AdvertisedShortLocationName: "Brånan",
            Geometry: {
              SWEREF99TM: "POINT (469752 6951614)",
              WGS84: "POINT (14.409008789134221 62.693811925944921)"
            },
            LocationSignature: "Brn"
          },
          {
            AdvertisedShortLocationName: "Bro",
            Geometry: {
              SWEREF99TM: "POINT (648991 6600050)",
              WGS84: "POINT (17.632958348706719 59.51230001368409)"
            },
            LocationSignature: "Bro"
          },
          {
            AdvertisedShortLocationName: "Baggetorp",
            Geometry: {
              SWEREF99TM: "POINT (561163 6541610)",
              WGS84: "POINT (16.06491302338619 59.009615593399189)"
            },
            LocationSignature: "Bt"
          },
          {
            AdvertisedShortLocationName: "Brattsbacka",
            Geometry: {
              SWEREF99TM: "POINT (706196 7079794)",
              WGS84: "POINT (19.185762533975904 63.784786368868311)"
            },
            LocationSignature: "Brs"
          },
          {
            AdvertisedShortLocationName: "Bankeryd",
            Geometry: {
              SWEREF99TM: "POINT (448271 6413497)",
              WGS84: "POINT (14.128233659324156 57.860359884866135)"
            },
            LocationSignature: "Bry"
          },
          {
            AdvertisedShortLocationName: "Brattby",
            Geometry: {
              SWEREF99TM: "POINT (739353 7096259)",
              WGS84: "POINT (19.881636766662776 63.910972937880366)"
            },
            LocationSignature: "Btb"
          },
          {
            AdvertisedShortLocationName: "Bjurå",
            Geometry: {
              SWEREF99TM: "POINT (823475 7342347)",
              WGS84: "POINT (22.149498195737561 66.035552669808027)"
            },
            LocationSignature: "Brå"
          },
          {
            AdvertisedShortLocationName: "Bratteborg",
            Geometry: {
              SWEREF99TM: "POINT (447694 6382023)",
              WGS84: "POINT (14.12535619399881 57.577612153060663)"
            },
            LocationSignature: "Btg"
          },
          {
            AdvertisedShortLocationName: "Basthagen",
            Geometry: {
              SWEREF99TM: "POINT (557251 6452003)",
              WGS84: "POINT (15.974171193251644 58.205498482987679)"
            },
            LocationSignature: "Bth"
          },
          {
            AdvertisedShortLocationName: "Bredsjö",
            Geometry: {
              SWEREF99TM: "POINT (484691 6632737)",
              WGS84: "POINT (14.726917964388218 59.83203417649348)"
            },
            LocationSignature: "Brö"
          },
          {
            AdvertisedShortLocationName: "Biskopstorp",
            Geometry: {
              SWEREF99TM: "POINT (369073 6291561)",
              WGS84: "POINT (12.858906409770492 56.74961513327154)"
            },
            LocationSignature: "Btp"
          },
          {
            AdvertisedShortLocationName: "Borås",
            Geometry: {
              SWEREF99TM: "POINT (376764 6399456)",
              WGS84: "POINT (12.931025017416324 57.720331646291847)"
            },
            LocationSignature: "Bs"
          },
          {
            AdvertisedShortLocationName: "Betåsen",
            Geometry: {
              SWEREF99TM: "POINT (590118 7048373)",
              WGS84: "POINT (16.813650794092961 63.552017734319008)"
            },
            LocationSignature: "Btå"
          },
          {
            AdvertisedShortLocationName: "Buddbyn",
            Geometry: {
              SWEREF99TM: "POINT (805636 7320994)",
              WGS84: "POINT (21.708368657816369 65.863010741573092)"
            },
            LocationSignature: "Bud"
          },
          {
            AdvertisedShortLocationName: "Bensjöbacken",
            Geometry: {
              SWEREF99TM: "POINT (523244 6952643)",
              WGS84: "POINT (15.454293299792115 62.703557075703067)"
            },
            LocationSignature: "Bsb"
          },
          {
            AdvertisedShortLocationName: "Brastad",
            Geometry: {
              SWEREF99TM: "POINT (294524 6476632)",
              WGS84: "POINT (11.485280073022983 58.382196571335072)"
            },
            LocationSignature: "Bsa"
          },
          {
            AdvertisedShortLocationName: "Brunsbergstunneln",
            Geometry: {
              SWEREF99TM: "POINT (384175 6611150)",
              WGS84: "POINT (12.946590551026139 59.622392726126449)"
            },
            LocationSignature: "Bu"
          },
          {
            AdvertisedShortLocationName: "Algutsgården",
            Geometry: {
              SWEREF99TM: "POINT (361175 6429802)",
              WGS84: "POINT (12.651869975240636 57.988136297600022)"
            },
            LocationSignature: "Agg"
          },
          {
            AdvertisedShortLocationName: "Bispgården",
            Geometry: {
              SWEREF99TM: "POINT (582015 6989817)",
              WGS84: "POINT (16.6208847104738 63.028664976206613)"
            },
            LocationSignature: "Bsg"
          },
          {
            AdvertisedShortLocationName: "Brunnsgård",
            Geometry: {
              SWEREF99TM: "POINT (506420 6364429)",
              WGS84: "POINT (15.106897221371735 57.422551298433341)"
            },
            LocationSignature: "Bsd"
          },
          {
            AdvertisedShortLocationName: "Brunsberg",
            Geometry: {
              SWEREF99TM: "POINT (384989 6610594)",
              WGS84: "POINT (12.961313407331897 59.617628286934746)"
            },
            LocationSignature: "Buk"
          },
          {
            AdvertisedShortLocationName: "Buresjön",
            Geometry: {
              SWEREF99TM: "POINT (631712 7273147)",
              WGS84: "POINT (17.853017608548981 65.553657380141175)"
            },
            LocationSignature: "Bur"
          },
          {
            AdvertisedShortLocationName: "Buterud",
            Geometry: {
              SWEREF99TM: "POINT (350027 6526609)",
              WGS84: "POINT (12.400256256684678 58.853113147831188)"
            },
            LocationSignature: "But"
          },
          {
            AdvertisedShortLocationName: "Barva",
            Geometry: {
              SWEREF99TM: "POINT (601963 6579665)",
              WGS84: "POINT (16.792764360140207 59.343415817433844)"
            },
            LocationSignature: "Bva"
          },
          {
            AdvertisedShortLocationName: "Bestorp",
            Geometry: {
              SWEREF99TM: "POINT (542970 6455193)",
              WGS84: "POINT (15.731784496661543 58.23577032146121)"
            },
            LocationSignature: "Bsp"
          },
          {
            AdvertisedShortLocationName: "Bastuträsk",
            Geometry: {
              SWEREF99TM: "POINT (739417 7194482)",
              WGS84: "POINT (20.041511423083406 64.789038504833286)"
            },
            LocationSignature: "Bst"
          },
          {
            AdvertisedShortLocationName: "Blackvreten",
            Geometry: {
              SWEREF99TM: "POINT (664059 6611304)",
              WGS84: "POINT (17.907555581954057 59.607603208902582)"
            },
            LocationSignature: "Bvr"
          },
          {
            AdvertisedShortLocationName: "Bjärka-Säby",
            Geometry: {
              SWEREF99TM: "POINT (544162 6459088)",
              WGS84: "POINT (15.752823546749028 58.270633139893796)"
            },
            LocationSignature: "Bsä"
          },
          {
            AdvertisedShortLocationName: "Byarum",
            Geometry: {
              SWEREF99TM: "POINT (448737 6377405)",
              WGS84: "POINT (14.143768479917531 57.536254261754145)"
            },
            LocationSignature: "Bym"
          },
          {
            AdvertisedShortLocationName: "Byälven",
            Geometry: {
              SWEREF99TM: "POINT (381114 6557339)",
              WGS84: "POINT (12.922128233057077 59.138625190765964)"
            },
            LocationSignature: "Byä"
          },
          {
            AdvertisedShortLocationName: "Dala-Floda",
            Geometry: {
              SWEREF99TM: "POINT (488458 6705861)",
              WGS84: "POINT (14.789965497460905 60.488735658603474)"
            },
            LocationSignature: "Dfl"
          },
          {
            AdvertisedShortLocationName: "Boxholm",
            Geometry: {
              SWEREF99TM: "POINT (503153 6450190)",
              WGS84: "POINT (15.053630708431465 58.19291890976195)"
            },
            LocationSignature: "Bx"
          },
          {
            AdvertisedShortLocationName: "Bergåsa",
            Geometry: {
              SWEREF99TM: "POINT (537284 6226478)",
              WGS84: "POINT (15.600635395304282 56.181817089155317)"
            },
            LocationSignature: "Båa"
          },
          {
            AdvertisedShortLocationName: "Bruzaholm",
            Geometry: {
              SWEREF99TM: "POINT (516428 6388847)",
              WGS84: "POINT (15.275182946234725 57.641637411144806)"
            },
            LocationSignature: "Bz"
          },
          {
            AdvertisedShortLocationName: "Degermyr",
            Geometry: {
              SWEREF99TM: "POINT (726168 7090909)",
              WGS84: "POINT (19.60594176206061 63.871912595389112)"
            },
            LocationSignature: "Dgm"
          },
          {
            AdvertisedShortLocationName: "Degerfors",
            Geometry: {
              SWEREF99TM: "POINT (468061 6565672)",
              WGS84: "POINT (14.440355348694279 59.228876279534717)"
            },
            LocationSignature: "Dg"
          },
          {
            AdvertisedShortLocationName: "Byvalla",
            Geometry: {
              SWEREF99TM: "POINT (578165 6690898)",
              WGS84: "POINT (16.416298319631643 60.347014038834352)"
            },
            LocationSignature: "By"
          },
          {
            AdvertisedShortLocationName: "Diö Norra",
            Geometry: {
              SWEREF99TM: "POINT (452225 6277147)",
              WGS84: "POINT (14.221130155853638 56.63606700565262)"
            },
            LocationSignature: "Diö"
          },
          {
            AdvertisedShortLocationName: "Daglösen",
            Geometry: {
              SWEREF99TM: "POINT (454415 6611836)",
              WGS84: "POINT (14.191440670749305 59.642141978237994)"
            },
            LocationSignature: "Dgö"
          },
          {
            AdvertisedShortLocationName: "Dalgränsen",
            Geometry: {
              SWEREF99TM: "POINT (580129 6694923)",
              WGS84: "POINT (16.453479310012309 60.382758412848567)"
            },
            LocationSignature: "Dgn"
          },
          {
            AdvertisedShortLocationName: "Dala-Järna",
            Geometry: {
              SWEREF99TM: "POINT (465043 6712576)",
              WGS84: "POINT (14.362710503857672 60.547672004081178)"
            },
            LocationSignature: "Dj"
          },
          {
            AdvertisedShortLocationName: "Bålsta",
            Geometry: {
              SWEREF99TM: "POINT (643031 6606187)",
              WGS84: "POINT (17.531884549633357 59.56943227548269)"
            },
            LocationSignature: "Bål"
          },
          {
            AdvertisedShortLocationName: "Aitik",
            Geometry: {
              SWEREF99TM: "POINT (750449 7451255)",
              WGS84: "POINT (20.768235953833813 67.0740146634426)"
            },
            LocationSignature: "Aik"
          },
          {
            AdvertisedShortLocationName: "Diö",
            Geometry: {
              SWEREF99TM: "POINT (451798 6276820)",
              WGS84: "POINT (14.214230624461944 56.633085760931053)"
            },
            LocationSignature: "Dis"
          },
          {
            AdvertisedShortLocationName: "Båstad",
            Geometry: {
              SWEREF99TM: "POINT (370821 6256000)",
              WGS84: "POINT (12.90521282050196 56.430835003232588)"
            },
            LocationSignature: "Bån"
          },
          {
            AdvertisedShortLocationName: "Brågarp",
            Geometry: {
              SWEREF99TM: "POINT (388403 6168551)",
              WGS84: "POINT (13.226554466853987 55.649984351274789)"
            },
            LocationSignature: "Båp"
          },
          {
            AdvertisedShortLocationName: "Helsingör",
            Geometry: {
              SWEREF99TM: "POINT (350463 6212388)",
              WGS84: "POINT (12.600007547221239 56.033336971048257)"
            },
            LocationSignature: "Dk.hg"
          },
          {
            AdvertisedShortLocationName: "Dockmyr",
            Geometry: {
              SWEREF99TM: "POINT (537491 6980748)",
              WGS84: "POINT (15.739025090276016 62.954615733751211)"
            },
            LocationSignature: "Dk"
          },
          {
            AdvertisedShortLocationName: "Österport",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Dk.kk"
          },
          {
            AdvertisedShortLocationName: "Dagarn",
            Geometry: {
              SWEREF99TM: "POINT (540106 6641390)",
              WGS84: "POINT (15.717053946258057 59.908066683094674)"
            },
            LocationSignature: "Dn"
          },
          {
            AdvertisedShortLocationName: "Cph Airport",
            Geometry: {
              SWEREF99TM: "POINT (351856 6167258)",
              WGS84: "POINT (12.646945195249197 55.628613606316236)"
            },
            LocationSignature: "Dk.cph"
          },
          {
            AdvertisedShortLocationName: "Tårnby",
            Geometry: {
              SWEREF99TM: "POINT (348919 6167884)",
              WGS84: "POINT (12.599996951760893 55.633330413220996)"
            },
            LocationSignature: "Dk.tåt"
          },
          {
            AdvertisedShortLocationName: "Örestad",
            Geometry: {
              SWEREF99TM: "POINT (347431 6167379)",
              WGS84: "POINT (12.576662812506168 55.628332371047975)"
            },
            LocationSignature: "Dk.øre"
          },
          {
            AdvertisedShortLocationName: "Köpenhamn H",
            Geometry: {
              SWEREF99TM: "POINT (347093 6172713)",
              WGS84: "POINT (12.568332091787717 55.676111547688819)"
            },
            LocationSignature: "Dk.kh"
          },
          {
            AdvertisedShortLocationName: "Dynäs",
            Geometry: {
              SWEREF99TM: "POINT (638800 6984791)",
              WGS84: "POINT (17.737695151856368 62.966317895759659)"
            },
            LocationSignature: "Dns"
          },
          {
            AdvertisedShortLocationName: "Bräcke",
            Geometry: {
              SWEREF99TM: "POINT (521334 6957805)",
              WGS84: "POINT (15.417618065421234 62.750003907737842)"
            },
            LocationSignature: "Bä"
          },
          {
            AdvertisedShortLocationName: "Dingle",
            Geometry: {
              SWEREF99TM: "POINT (300842 6492745)",
              WGS84: "POINT (11.579114455639367 58.529574092963166)"
            },
            LocationSignature: "Dl"
          },
          {
            AdvertisedShortLocationName: "Derome",
            Geometry: {
              SWEREF99TM: "POINT (338237 6346233)",
              WGS84: "POINT (12.320145360130217 57.23055867486589)"
            },
            LocationSignature: "Dre"
          },
          {
            AdvertisedShortLocationName: "Bäckebron",
            Geometry: {
              SWEREF99TM: "POINT (396677 6615090)",
              WGS84: "POINT (13.166164371563617 59.66103813249547)"
            },
            LocationSignature: "Bäb"
          },
          {
            AdvertisedShortLocationName: "Bäckefors",
            Geometry: {
              SWEREF99TM: "POINT (335901 6521746)",
              WGS84: "POINT (12.159292585129252 58.8043367046528)"
            },
            LocationSignature: "Bäf"
          },
          {
            AdvertisedShortLocationName: "Dals Långed",
            Geometry: {
              SWEREF99TM: "POINT (344921 6534651)",
              WGS84: "POINT (12.306247608273843 58.92344672881881)"
            },
            LocationSignature: "Dld"
          },
          {
            AdvertisedShortLocationName: "Dingtuna",
            Geometry: {
              SWEREF99TM: "POINT (578515 6604520)",
              WGS84: "POINT (16.389779014511614 59.571564426714247)"
            },
            LocationSignature: "Dt"
          },
          {
            AdvertisedShortLocationName: "Bällsta",
            Geometry: {
              SWEREF99TM: "POINT (673739 6602430)",
              WGS84: "POINT (18.07156718518678 59.524115560852458)"
            },
            LocationSignature: "Bäl"
          },
          {
            AdvertisedShortLocationName: "Dorotea",
            Geometry: {
              SWEREF99TM: "POINT (568126 7126537)",
              WGS84: "POINT (16.405896529478792 64.2581772034087)"
            },
            LocationSignature: "Dta"
          },
          {
            AdvertisedShortLocationName: "Dannemora",
            Geometry: {
              SWEREF99TM: "POINT (657882 6676656)",
              WGS84: "POINT (17.848019671309068 60.196093645075614)"
            },
            LocationSignature: "Dma"
          },
          {
            AdvertisedShortLocationName: "Duved",
            Geometry: {
              SWEREF99TM: "POINT (395938 7030708)",
              WGS84: "POINT (12.917487969797371 63.389765121016467)"
            },
            LocationSignature: "Du"
          },
          {
            AdvertisedShortLocationName: "Brännögård",
            Geometry: {
              SWEREF99TM: "POINT (384653 6319603)",
              WGS84: "POINT (13.100795510458294 57.0055108065048)"
            },
            LocationSignature: "Bög"
          },
          {
            AdvertisedShortLocationName: "Dorotea camping",
            Geometry: {
              SWEREF99TM: "POINT (567363 7126316)",
              WGS84: "POINT (16.390056697411868 64.256345070801416)"
            },
            LocationSignature: "Dtc"
          },
          {
            AdvertisedShortLocationName: "Duvbo",
            Geometry: {
              SWEREF99TM: "POINT (666612 6585006)",
              WGS84: "POINT (17.932196987513084 59.370748674053949)"
            },
            LocationSignature: "Duo"
          },
          {
            AdvertisedShortLocationName: "Björkhult",
            Geometry: {
              SWEREF99TM: "POINT (539433 6412041)",
              WGS84: "POINT (15.66432478782094 57.8485363954598)"
            },
            LocationSignature: "Bök"
          },
          {
            AdvertisedShortLocationName: "Bodsjön",
            Geometry: {
              SWEREF99TM: "POINT (521475 6965008)",
              WGS84: "POINT (15.421300060153808 62.814644925553836)"
            },
            LocationSignature: "Bön"
          },
          {
            AdvertisedShortLocationName: "Dysjön",
            Geometry: {
              SWEREF99TM: "POINT (526445 6944245)",
              WGS84: "POINT (15.515540589911376 62.62796570903685)"
            },
            LocationSignature: "Dy"
          },
          {
            AdvertisedShortLocationName: "Eslöv",
            Geometry: {
              SWEREF99TM: "POINT (393873 6189313)",
              WGS84: "POINT (13.305373334593368 55.837681384251411)"
            },
            LocationSignature: "E"
          },
          {
            AdvertisedShortLocationName: "Eldsberga",
            Geometry: {
              SWEREF99TM: "POINT (377065 6273638)",
              WGS84: "POINT (12.998062853920722 56.590869212050173)"
            },
            LocationSignature: "Ea"
          },
          {
            AdvertisedShortLocationName: "Enstaberga",
            Geometry: {
              SWEREF99TM: "POINT (606991 6513804)",
              WGS84: "POINT (16.849075264036287 58.751014164260674)"
            },
            LocationSignature: "Ebg"
          },
          {
            AdvertisedShortLocationName: "Djurås",
            Geometry: {
              SWEREF99TM: "POINT (507597 6713797)",
              WGS84: "POINT (15.138550072374871 60.560082893531423)"
            },
            LocationSignature: "Då"
          },
          {
            AdvertisedShortLocationName: "Dånviken",
            Geometry: {
              SWEREF99TM: "POINT (655058 6564353)",
              WGS84: "POINT (17.714339760889871 59.189898010841262)"
            },
            LocationSignature: "Dån"
          },
          {
            AdvertisedShortLocationName: "Callans såg",
            Geometry: {
              SWEREF99TM: "POINT (551134 6931777)",
              WGS84: "POINT (15.99304382956859 62.513474747622013)"
            },
            LocationSignature: "Cas"
          },
          {
            AdvertisedShortLocationName: "Björbo",
            Geometry: {
              SWEREF99TM: "POINT (485081 6701907)",
              WGS84: "POINT (14.728809880527523 60.453123712483418)"
            },
            LocationSignature: "Böo"
          },
          {
            AdvertisedShortLocationName: "Edsbyverken",
            Geometry: {
              SWEREF99TM: "POINT (545074 6804515)",
              WGS84: "POINT (15.843274977786594 61.372002683054284)"
            },
            LocationSignature: "Edv"
          },
          {
            AdvertisedShortLocationName: "Edsbjörke",
            Geometry: {
              SWEREF99TM: "POINT (397687 6641827)",
              WGS84: "POINT (13.170993179161853 59.901252470753548)"
            },
            LocationSignature: "Ebk"
          },
          {
            AdvertisedShortLocationName: "Ed",
            Geometry: {
              SWEREF99TM: "POINT (323384 6534469)",
              WGS84: "POINT (11.932872334363978 58.91348999950911)"
            },
            LocationSignature: "Ed"
          },
          {
            AdvertisedShortLocationName: "Ekeby",
            Geometry: {
              SWEREF99TM: "POINT (654689 6629785)",
              WGS84: "POINT (17.7553140479258 59.776942406174726)"
            },
            LocationSignature: "Eby"
          },
          {
            AdvertisedShortLocationName: "Drömme",
            Geometry: {
              SWEREF99TM: "POINT (661659 7017559)",
              WGS84: "POINT (18.22015181180026 63.250510459115588)"
            },
            LocationSignature: "Döe"
          },
          {
            AdvertisedShortLocationName: "Döljebro",
            Geometry: {
              SWEREF99TM: "POINT (591246 6763294)",
              WGS84: "POINT (16.686870042833114 60.994000948919116)"
            },
            LocationSignature: "Döl"
          },
          {
            AdvertisedShortLocationName: "Charlottenberg",
            Geometry: {
              SWEREF99TM: "POINT (348856 6641478)",
              WGS84: "POINT (12.299264087384611 59.8831304389512)"
            },
            LocationSignature: "Cg"
          },
          {
            AdvertisedShortLocationName: "Dals Rostock",
            Geometry: {
              SWEREF99TM: "POINT (346820 6511170)",
              WGS84: "POINT (12.355291043412036 58.713474616250139)"
            },
            LocationSignature: "Drt"
          },
          {
            AdvertisedShortLocationName: "Dösjebro",
            Geometry: {
              SWEREF99TM: "POINT (376765 6188129)",
              WGS84: "POINT (13.0328995389856 55.822984922965325)"
            },
            LocationSignature: "Dös"
          },
          {
            AdvertisedShortLocationName: "Edsbyn",
            Geometry: {
              SWEREF99TM: "POINT (543881 6804583)",
              WGS84: "POINT (15.820974265740876 61.372749608016463)"
            },
            LocationSignature: "Edn"
          },
          {
            AdvertisedShortLocationName: "Edsvalla",
            Geometry: {
              SWEREF99TM: "POINT (398620 6589939)",
              WGS84: "POINT (13.212631680519577 59.435773108691023)"
            },
            LocationSignature: "El"
          },
          {
            AdvertisedShortLocationName: "Emmaboda",
            Geometry: {
              SWEREF99TM: "POINT (532818 6276305)",
              WGS84: "POINT (15.534935513798624 56.629789589946874)"
            },
            LocationSignature: "Em"
          },
          {
            AdvertisedShortLocationName: "Erikslund",
            Geometry: {
              SWEREF99TM: "POINT (546968 6933266)",
              WGS84: "POINT (15.912559695218755 62.5273896737415)"
            },
            LocationSignature: "Ei"
          },
          {
            AdvertisedShortLocationName: "Ekeryd",
            Geometry: {
              SWEREF99TM: "POINT (446576 6385580)",
              WGS84: "POINT (14.105880339757105 57.609428711545192)"
            },
            LocationSignature: "Eky"
          },
          {
            AdvertisedShortLocationName: "Eneryda",
            Geometry: {
              SWEREF99TM: "POINT (459575 6285062)",
              WGS84: "POINT (14.339704009280497 56.707862379469589)"
            },
            LocationSignature: "Era"
          },
          {
            AdvertisedShortLocationName: "Ekolsund",
            Geometry: {
              SWEREF99TM: "POINT (633723 6610818)",
              WGS84: "POINT (17.370210482695857 59.614062634390081)"
            },
            LocationSignature: "Eko"
          },
          {
            AdvertisedShortLocationName: "Edsbyns södra",
            Geometry: {
              SWEREF99TM: "POINT (544540 6804733)",
              WGS84: "POINT (15.833337863840919 61.374021113218163)"
            },
            LocationSignature: "Eds"
          },
          {
            AdvertisedShortLocationName: "Eskilstuna",
            Geometry: {
              SWEREF99TM: "POINT (585559 6582152)",
              WGS84: "POINT (16.505455902288542 59.369387591614931)"
            },
            LocationSignature: "Et"
          },
          {
            AdvertisedShortLocationName: "Eksjö",
            Geometry: {
              SWEREF99TM: "POINT (498534 6391276)",
              WGS84: "POINT (14.975428370414759 57.663752980497442)"
            },
            LocationSignature: "Ek"
          },
          {
            AdvertisedShortLocationName: "Edane",
            Geometry: {
              SWEREF99TM: "POINT (377579 6611852)",
              WGS84: "POINT (12.829341349582482 59.626809024598778)"
            },
            LocationSignature: "En"
          },
          {
            AdvertisedShortLocationName: "Erikstad",
            Geometry: {
              SWEREF99TM: "POINT (349671 6501915)",
              WGS84: "POINT (12.41062152958858 58.631439908562854)"
            },
            LocationSignature: "Erk"
          },
          {
            AdvertisedShortLocationName: "Ekenässjön",
            Geometry: {
              SWEREF99TM: "POINT (501134 6371989)",
              WGS84: "POINT (15.018916911499558 57.490505417101765)"
            },
            LocationSignature: "Esn"
          },
          {
            AdvertisedShortLocationName: "Ekträsk",
            Geometry: {
              SWEREF99TM: "POINT (730899 7161058)",
              WGS84: "POINT (19.809644902672911 64.496155157071087)"
            },
            LocationSignature: "Etk"
          },
          {
            AdvertisedShortLocationName: "Enafors",
            Geometry: {
              SWEREF99TM: "POINT (366496 7020648)",
              WGS84: "POINT (12.337325380480964 63.289778882467509)"
            },
            LocationSignature: "Ens"
          },
          {
            AdvertisedShortLocationName: "Finnerödja",
            Geometry: {
              SWEREF99TM: "POINT (467926 6531967)",
              WGS84: "POINT (14.442915930479661 58.926191505433486)"
            },
            LocationSignature: "Fa"
          },
          {
            AdvertisedShortLocationName: "Enköping",
            Geometry: {
              SWEREF99TM: "POINT (617735 6613682)",
              WGS84: "POINT (17.088656482917344 59.644579845608128)"
            },
            LocationSignature: "Ep"
          },
          {
            AdvertisedShortLocationName: "Falköping",
            Geometry: {
              SWEREF99TM: "POINT (414834 6449191)",
              WGS84: "POINT (13.552006182330869 58.175743838976565)"
            },
            LocationSignature: "F"
          },
          {
            AdvertisedShortLocationName: "Flodala",
            Geometry: {
              SWEREF99TM: "POINT (411340 6370743)",
              WGS84: "POINT (13.52174537803268 57.470651408241437)"
            },
            LocationSignature: "Faa"
          },
          {
            AdvertisedShortLocationName: "Framnäs city",
            Geometry: {
              SWEREF99TM: "POINT (392052 6486726)",
              WGS84: "POINT (13.147312245825955 58.507712096269458)"
            },
            LocationSignature: "Fc"
          },
          {
            AdvertisedShortLocationName: "Falkenbergs godsstation",
            Geometry: {
              SWEREF99TM: "POINT (346989 6309248)",
              WGS84: "POINT (12.487511687459685 56.901637921679693)"
            },
            LocationSignature: "Fabg"
          },
          {
            AdvertisedShortLocationName: "Arvidsjaur",
            Geometry: {
              SWEREF99TM: "POINT (692122 7280435)",
              WGS84: "POINT (19.168451956162333 65.588705755191725)"
            },
            LocationSignature: "Ajr"
          },
          {
            AdvertisedShortLocationName: "Falkenberg",
            Geometry: {
              SWEREF99TM: "POINT (348353 6311189)",
              WGS84: "POINT (12.508724315820682 56.919506641795827)"
            },
            LocationSignature: "Fabp"
          },
          {
            AdvertisedShortLocationName: "Fästad",
            Geometry: {
              SWEREF99TM: "POINT (581340 6423298)",
              WGS84: "POINT (16.374008597884739 57.943962315024706)"
            },
            LocationSignature: "Fad"
          },
          {
            AdvertisedShortLocationName: "Fellingsbro",
            Geometry: {
              SWEREF99TM: "POINT (533756 6588400)",
              WGS84: "POINT (15.59503810973915 59.43282614654759)"
            },
            LocationSignature: "Feb"
          },
          {
            AdvertisedShortLocationName: "Fredriksdal",
            Geometry: {
              SWEREF99TM: "POINT (475772 6386018)",
              WGS84: "POINT (14.594446905739815 57.6158745862139)"
            },
            LocationSignature: "Fdl"
          },
          {
            AdvertisedShortLocationName: "Furudal",
            Geometry: {
              SWEREF99TM: "POINT (507261 6781697)",
              WGS84: "POINT (15.134970289693332 61.169699666692892)"
            },
            LocationSignature: "Fda"
          },
          {
            AdvertisedShortLocationName: "Annedal",
            Geometry: {
              SWEREF99TM: "POINT (371312 6222207)",
              WGS84: "POINT (12.929634020359369 56.127554578318879)"
            },
            LocationSignature: "Aal"
          },
          {
            AdvertisedShortLocationName: "Fågelsjö",
            Geometry: {
              SWEREF99TM: "POINT (483240 6852120)",
              WGS84: "POINT (14.682078466488159 61.80160457201157)"
            },
            LocationSignature: "Feö"
          },
          {
            AdvertisedShortLocationName: "Floda",
            Geometry: {
              SWEREF99TM: "POINT (343238 6410613)",
              WGS84: "POINT (12.361481828587378 57.810002556308859)"
            },
            LocationSignature: "Fd"
          },
          {
            AdvertisedShortLocationName: "Ervalla",
            Geometry: {
              SWEREF99TM: "POINT (514052 6586511)",
              WGS84: "POINT (15.247585921008847 59.416983448109406)"
            },
            LocationSignature: "Er"
          },
          {
            AdvertisedShortLocationName: "Falerum",
            Geometry: {
              SWEREF99TM: "POINT (571068 6445338)",
              WGS84: "POINT (16.207194185243125 58.143638420762429)"
            },
            LocationSignature: "Fal"
          },
          {
            AdvertisedShortLocationName: "Finspång",
            Geometry: {
              SWEREF99TM: "POINT (544931 6507709)",
              WGS84: "POINT (15.775494771471818 58.707198609971215)"
            },
            LocationSignature: "Fg"
          },
          {
            AdvertisedShortLocationName: "Fagersta",
            Geometry: {
              SWEREF99TM: "POINT (545497 6650639)",
              WGS84: "POINT (15.815465855713567 59.990548754843736)"
            },
            LocationSignature: "Fgc"
          },
          {
            AdvertisedShortLocationName: "Farsta strand",
            Geometry: {
              SWEREF99TM: "POINT (677073 6570533)",
              WGS84: "POINT (18.104137121732695 59.236704960342763)"
            },
            LocationSignature: "Fas"
          },
          {
            AdvertisedShortLocationName: "Forsbacka",
            Geometry: {
              SWEREF99TM: "POINT (603284 6724145)",
              WGS84: "POINT (16.888461227455348 60.639742501281731)"
            },
            LocationSignature: "Fb"
          },
          {
            AdvertisedShortLocationName: "Fågelsta",
            Geometry: {
              SWEREF99TM: "POINT (502298 6479775)",
              WGS84: "POINT (15.039382028679153 58.458644561184052)"
            },
            LocationSignature: "Fgl"
          },
          {
            AdvertisedShortLocationName: "Frändefors",
            Geometry: {
              SWEREF99TM: "POINT (341455 6486949)",
              WGS84: "POINT (12.279719498996997 58.494254516855136)"
            },
            LocationSignature: "Fdf"
          },
          {
            AdvertisedShortLocationName: "Flemingsberg",
            Geometry: {
              SWEREF99TM: "POINT (668247 6568187)",
              WGS84: "POINT (17.947841798445623 59.219261489884843)"
            },
            LocationSignature: "Flb"
          },
          {
            AdvertisedShortLocationName: "Fagersta N",
            Geometry: {
              SWEREF99TM: "POINT (543235 6652627)",
              WGS84: "POINT (15.775344885430442 60.008641991538482)"
            },
            LocationSignature: "Fgn"
          },
          {
            AdvertisedShortLocationName: "Frufällan",
            Geometry: {
              SWEREF99TM: "POINT (379942 6405683)",
              WGS84: "POINT (12.981226972481714 57.777090545540204)"
            },
            LocationSignature: "Ffl"
          },
          {
            AdvertisedShortLocationName: "Finnforsfallet",
            Geometry: {
              SWEREF99TM: "POINT (753349 7194321)",
              WGS84: "POINT (20.333101780753033 64.777374199552952)"
            },
            LocationSignature: "Ffs"
          },
          {
            AdvertisedShortLocationName: "Frinnaryd",
            Geometry: {
              SWEREF99TM: "POINT (489454 6421754)",
              WGS84: "POINT (14.821895120871879 57.937394321048508)"
            },
            LocationSignature: "Frd"
          },
          {
            AdvertisedShortLocationName: "Floby",
            Geometry: {
              SWEREF99TM: "POINT (401807 6445371)",
              WGS84: "POINT (13.332227221530667 58.138743614062761)"
            },
            LocationSignature: "Fby"
          },
          {
            AdvertisedShortLocationName: "Flen",
            Geometry: {
              SWEREF99TM: "POINT (590922 6547472)",
              WGS84: "POINT (16.585278232245919 59.056946593019575)"
            },
            LocationSignature: "Fle"
          },
          {
            AdvertisedShortLocationName: "Frånö",
            Geometry: {
              SWEREF99TM: "POINT (643655 6978290)",
              WGS84: "POINT (17.827686335147686 62.906153993471605)"
            },
            LocationSignature: "Fnö"
          },
          {
            AdvertisedShortLocationName: "Friluftsgården",
            Geometry: {
              SWEREF99TM: "POINT (341903 6537821)",
              WGS84: "POINT (12.251632094858746 58.950781336463542)"
            },
            LocationSignature: "Flgd"
          },
          {
            AdvertisedShortLocationName: "Fagersanna",
            Geometry: {
              SWEREF99TM: "POINT (459041 6481174)",
              WGS84: "POINT (14.297844300054503 58.46929423626765)"
            },
            LocationSignature: "Fgs"
          },
          {
            AdvertisedShortLocationName: "Forsheda",
            Geometry: {
              SWEREF99TM: "POINT (429415 6336165)",
              WGS84: "POINT (13.832917516042627 57.163272965327344)"
            },
            LocationSignature: "Fod"
          },
          {
            AdvertisedShortLocationName: "Folkesta",
            Geometry: {
              SWEREF99TM: "POINT (580301 6585752)",
              WGS84: "POINT (16.414317837235856 59.402740779512925)"
            },
            LocationSignature: "Fok"
          },
          {
            AdvertisedShortLocationName: "Fagerås",
            Geometry: {
              SWEREF99TM: "POINT (399185 6599283)",
              WGS84: "POINT (13.218175056020563 59.5197774491083)"
            },
            LocationSignature: "Fgå"
          },
          {
            AdvertisedShortLocationName: "Fångsjöbacken",
            Geometry: {
              SWEREF99TM: "POINT (590035 6992858)",
              WGS84: "POINT (16.780963397008676 63.054042238047508)"
            },
            LocationSignature: "Fgö"
          },
          {
            AdvertisedShortLocationName: "Falun",
            Geometry: {
              SWEREF99TM: "POINT (535140 6718768)",
              WGS84: "POINT (15.641726698028318 60.603247307025484)"
            },
            LocationSignature: "Fln"
          },
          {
            AdvertisedShortLocationName: "Fredrikslund",
            Geometry: {
              SWEREF99TM: "POINT (558152 6288570)",
              WGS84: "POINT (15.950602714500736 56.737503155037629)"
            },
            LocationSignature: "Fre"
          },
          {
            AdvertisedShortLocationName: "Flens övre",
            Geometry: {
              SWEREF99TM: "POINT (591460 6547998)",
              WGS84: "POINT (16.594873300320689 59.061553559225658)"
            },
            LocationSignature: "Fsö"
          },
          {
            AdvertisedShortLocationName: "Fritsla",
            Geometry: {
              SWEREF99TM: "POINT (367762 6381627)",
              WGS84: "POINT (12.789767544953259 57.557743030698056)"
            },
            LocationSignature: "Frl"
          },
          {
            AdvertisedShortLocationName: "Fiskeby",
            Geometry: {
              SWEREF99TM: "POINT (565308 6496625)",
              WGS84: "POINT (16.123924534642104 58.605074610159129)"
            },
            LocationSignature: "Fi"
          },
          {
            AdvertisedShortLocationName: "Forshem",
            Geometry: {
              SWEREF99TM: "POINT (412399 6498511)",
              WGS84: "POINT (13.49182635604396 58.618083175192361)"
            },
            LocationSignature: "Fhm"
          },
          {
            AdvertisedShortLocationName: "Flackarp",
            Geometry: {
              SWEREF99TM: "POINT (384205 6172747)",
              WGS84: "POINT (13.158110078373847 55.686685859249955)"
            },
            LocationSignature: "Flp"
          },
          {
            AdvertisedShortLocationName: "Furet",
            Geometry: {
              SWEREF99TM: "POINT (370661 6284282)",
              WGS84: "POINT (12.88852141420451 56.684708883298569)"
            },
            LocationSignature: "Fur"
          },
          {
            AdvertisedShortLocationName: "Flisby",
            Geometry: {
              SWEREF99TM: "POINT (488152 6405097)",
              WGS84: "POINT (14.800735027043244 57.78774517173931)"
            },
            LocationSignature: "Fls"
          },
          {
            AdvertisedShortLocationName: "Frykåsen",
            Geometry: {
              SWEREF99TM: "POINT (397621 6611211)",
              WGS84: "POINT (13.184790839941465 59.626456230353519)"
            },
            LocationSignature: "Frå"
          },
          {
            AdvertisedShortLocationName: "Foodia",
            Geometry: {
              SWEREF99TM: "POINT (385754 6166422)",
              WGS84: "POINT (13.185365613650545 55.630248507363994)"
            },
            LocationSignature: "Foo"
          },
          {
            AdvertisedShortLocationName: "Fränsta",
            Geometry: {
              SWEREF99TM: "POINT (560149 6929982)",
              WGS84: "POINT (16.167448853511388 62.496012603410612)"
            },
            LocationSignature: "Ft"
          },
          {
            AdvertisedShortLocationName: "Fristad",
            Geometry: {
              SWEREF99TM: "POINT (381736 6411237)",
              WGS84: "POINT (13.008626149200433 57.827424983928175)"
            },
            LocationSignature: "Fra"
          },
          {
            AdvertisedShortLocationName: "Avesta centrum",
            Geometry: {
              SWEREF99TM: "POINT (565001 6668391)",
              WGS84: "POINT (16.17060693896951 60.1472930337373)"
            },
            LocationSignature: "Acm"
          },
          {
            AdvertisedShortLocationName: "Frillesås",
            Geometry: {
              SWEREF99TM: "POINT (329558 6356401)",
              WGS84: "POINT (12.169561951524733 57.318640421897371)"
            },
            LocationSignature: "Få"
          },
          {
            AdvertisedShortLocationName: "Frövi",
            Geometry: {
              SWEREF99TM: "POINT (520611 6592180)",
              WGS84: "POINT (15.363694373556891 59.467619969073219)"
            },
            LocationSignature: "Fv"
          },
          {
            AdvertisedShortLocationName: "Fors",
            Geometry: {
              SWEREF99TM: "POINT (572694 6675131)",
              WGS84: "POINT (16.311520708368544 60.206499483429354)"
            },
            LocationSignature: "Fs"
          },
          {
            AdvertisedShortLocationName: "Forserum",
            Geometry: {
              SWEREF99TM: "POINT (468654 6395194)",
              WGS84: "POINT (14.474112547817956 57.69785663130731)"
            },
            LocationSignature: "Fm"
          },
          {
            AdvertisedShortLocationName: "Fosieby",
            Geometry: {
              SWEREF99TM: "POINT (375852 6159121)",
              WGS84: "POINT (13.031472999437421 55.562257667368542)"
            },
            LocationSignature: "Fsb"
          },
          {
            AdvertisedShortLocationName: "Fliskär",
            Geometry: {
              SWEREF99TM: "POINT (622659 6729964)",
              WGS84: "POINT (17.246057607686389 60.686483377579414)"
            },
            LocationSignature: "Fär"
          },
          {
            AdvertisedShortLocationName: "Garnudden",
            Geometry: {
              SWEREF99TM: "POINT (658267 6564870)",
              WGS84: "POINT (17.770814702592229 59.193351223695139)"
            },
            LocationSignature: "Gau"
          },
          {
            AdvertisedShortLocationName: "Forsmo",
            Geometry: {
              SWEREF99TM: "POINT (609386 7016856)",
              WGS84: "POINT (17.179547308764644 63.263943521433838)"
            },
            LocationSignature: "Fsm"
          },
          {
            AdvertisedShortLocationName: "Filipstad",
            Geometry: {
              SWEREF99TM: "POINT (452706 6619231)",
              WGS84: "POINT (14.159470306207027 59.708349420466632)"
            },
            LocationSignature: "Fid"
          },
          {
            AdvertisedShortLocationName: "Förslöv",
            Geometry: {
              SWEREF99TM: "POINT (364149.9 6247810)",
              WGS84: "POINT (12.801364209710243 56.355434840273475)"
            },
            LocationSignature: "För"
          },
          {
            AdvertisedShortLocationName: "Furuvik",
            Geometry: {
              SWEREF99TM: "POINT (627363 6726219)",
              WGS84: "POINT (17.329682449998796 60.651416395414977)"
            },
            LocationSignature: "Fvk"
          },
          {
            AdvertisedShortLocationName: "Abisko turist",
            Geometry: {
              SWEREF99TM: "POINT (655634 7587481)",
              WGS84: "POINT (18.78326035226819 68.357316241403325)"
            },
            LocationSignature: "Akt"
          },
          {
            AdvertisedShortLocationName: "Göteborgs norra",
            Geometry: {
              SWEREF99TM: "POINT (320850 6401250)",
              WGS84: "POINT (11.99221235399647 57.717624341022436)"
            },
            LocationSignature: "Gb"
          },
          {
            AdvertisedShortLocationName: "Grillby",
            Geometry: {
              SWEREF99TM: "POINT (625984 6612210)",
              WGS84: "POINT (17.233992978801197 59.62896063211938)"
            },
            LocationSignature: "Gib"
          },
          {
            AdvertisedShortLocationName: "Geijersdal",
            Geometry: {
              SWEREF99TM: "POINT (441682 6607145)",
              WGS84: "POINT (13.966922605331646 59.598438004835593)"
            },
            LocationSignature: "Gdl"
          },
          {
            AdvertisedShortLocationName: "Graninge",
            Geometry: {
              SWEREF99TM: "POINT (593962 6996978)",
              WGS84: "POINT (16.860953952122021 63.090002814392349)"
            },
            LocationSignature: "Ga"
          },
          {
            AdvertisedShortLocationName: "Grängesberg",
            Geometry: {
              SWEREF99TM: "POINT (500191 6659768)",
              WGS84: "POINT (15.003432099602906 60.075037517036044)"
            },
            LocationSignature: "Gg"
          },
          {
            AdvertisedShortLocationName: "Finja",
            Geometry: {
              SWEREF99TM: "POINT (419000 6225730)",
              WGS84: "POINT (13.695489589255935 56.169672730332962)"
            },
            LocationSignature: "Fin"
          },
          {
            AdvertisedShortLocationName: "Gårdsjö",
            Geometry: {
              SWEREF99TM: "POINT (461584 6526005)",
              WGS84: "POINT (14.333802396998625 58.872130487582865)"
            },
            LocationSignature: "Gdö"
          },
          {
            AdvertisedShortLocationName: "Göteborg",
            Geometry: {
              SWEREF99TM: "POINT (319716 6400328)",
              WGS84: "POINT (11.973894352578421 57.708900775522473)"
            },
            LocationSignature: "G"
          },
          {
            AdvertisedShortLocationName: "Fillan",
            Geometry: {
              SWEREF99TM: "POINT (622995 6923926)",
              WGS84: "POINT (17.381977133825281 62.426186975145185)"
            },
            LocationSignature: "Fil"
          },
          {
            AdvertisedShortLocationName: "Gröndalsviken",
            Geometry: {
              SWEREF99TM: "POINT (668892 6532535)",
              WGS84: "POINT (17.931729038968886 58.899253202251622)"
            },
            LocationSignature: "Gdv"
          },
          {
            AdvertisedShortLocationName: "Grängesbergs malmbangård",
            Geometry: {
              SWEREF99TM: "POINT (498981 6658496)",
              WGS84: "POINT (14.98169590738792 60.063614793995662)"
            },
            LocationSignature: "Ggm"
          },
          {
            AdvertisedShortLocationName: "Göteborg Combiterminal",
            Geometry: {
              SWEREF99TM: "POINT (320850 6401250)",
              WGS84: "POINT (11.99221235399647 57.717624341022436)"
            },
            LocationSignature: "Gbco"
          },
          {
            AdvertisedShortLocationName: "Gåsträsken",
            Geometry: {
              SWEREF99TM: "POINT (832259 7344670)",
              WGS84: "POINT (22.347711155156059 66.047140372521284)"
            },
            LocationSignature: "Gen"
          },
          {
            AdvertisedShortLocationName: "Gimonäs",
            Geometry: {
              SWEREF99TM: "POINT (761757 7084219)",
              WGS84: "POINT (20.315893185363944 63.787311016796835)"
            },
            LocationSignature: "Gim"
          },
          {
            AdvertisedShortLocationName: "Göteborg Marieholm",
            Geometry: {
              SWEREF99TM: "POINT (321696 6403195)",
              WGS84: "POINT (12.004951460699219 57.73540764234302)"
            },
            LocationSignature: "Gbm"
          },
          {
            AdvertisedShortLocationName: "Gottne",
            Geometry: {
              SWEREF99TM: "POINT (669123 7038615)",
              WGS84: "POINT (18.390689062882306 63.435718626227249)"
            },
            LocationSignature: "Ge"
          },
          {
            AdvertisedShortLocationName: "Granstanda",
            Geometry: {
              SWEREF99TM: "POINT (574843 6717317)",
              WGS84: "POINT (16.366054922604807 60.584780508444723)"
            },
            LocationSignature: "Gad"
          },
          {
            AdvertisedShortLocationName: "Gula huset",
            Geometry: {
              SWEREF99TM: "POINT (670685 6585712)",
              WGS84: "POINT (18.004324812598888 59.375450332677566)"
            },
            LocationSignature: "Ghu"
          },
          {
            AdvertisedShortLocationName: "Arlövs industrispår",
            Geometry: {
              SWEREF99TM: "POINT (378666 6167855)",
              WGS84: "POINT (13.072220213141129 55.641401161689046)"
            },
            LocationSignature: "Ali"
          },
          {
            AdvertisedShortLocationName: "Gimo",
            Geometry: {
              SWEREF99TM: "POINT (676617 6675264)",
              WGS84: "POINT (18.184191124633394 60.175932379539134)"
            },
            LocationSignature: "Gmo"
          },
          {
            AdvertisedShortLocationName: "Aleholm",
            Geometry: {
              SWEREF99TM: "POINT (479775 6361765)",
              WGS84: "POINT (14.663463013204055 57.398216699534224)"
            },
            LocationSignature: "Ahm"
          },
          {
            AdvertisedShortLocationName: "Glumslöv",
            Geometry: {
              SWEREF99TM: "POINT (363490 6202006)",
              WGS84: "POINT (12.814172051479417 55.944011512306396)"
            },
            LocationSignature: "Glv"
          },
          {
            AdvertisedShortLocationName: "Gamleby",
            Geometry: {
              SWEREF99TM: "POINT (583558 6418113)",
              WGS84: "POINT (16.409637011339289 57.896993500806659)"
            },
            LocationSignature: "Gal"
          },
          {
            AdvertisedShortLocationName: "Gnarp",
            Geometry: {
              SWEREF99TM: "POINT (617248 6882374)",
              WGS84: "POINT (17.242918328115653 62.055350730775736)"
            },
            LocationSignature: "Gnp"
          },
          {
            AdvertisedShortLocationName: "Grythyttan",
            Geometry: {
              SWEREF99TM: "POINT (473578 6618523)",
              WGS84: "POINT (14.530485448013597 59.703842280449891)"
            },
            LocationSignature: "Ghy"
          },
          {
            AdvertisedShortLocationName: "Gnosjö",
            Geometry: {
              SWEREF99TM: "POINT (423897 6358003)",
              WGS84: "POINT (13.734999980662558 57.358517145176947)"
            },
            LocationSignature: "Gnö"
          },
          {
            AdvertisedShortLocationName: "Gemla",
            Geometry: {
              SWEREF99TM: "POINT (478436 6303056)",
              WGS84: "POINT (14.646249049504545 56.870765167956023)"
            },
            LocationSignature: "Gm"
          },
          {
            AdvertisedShortLocationName: "Grythyttans norra",
            Geometry: {
              SWEREF99TM: "POINT (472737 6622431)",
              WGS84: "POINT (14.515034028270259 59.738879194665209)"
            },
            LocationSignature: "Ghyn"
          },
          {
            AdvertisedShortLocationName: "Gamlarp",
            Geometry: {
              SWEREF99TM: "POINT (481325 6393216)",
              WGS84: "POINT (14.686840574075086 57.680794047700211)"
            },
            LocationSignature: "Gmp"
          },
          {
            AdvertisedShortLocationName: "Göteborg Kville",
            Geometry: {
              SWEREF99TM: "POINT (320324 6402352)",
              WGS84: "POINT (11.982571941979433 57.727299371817288)"
            },
            LocationSignature: "Gk"
          },
          {
            AdvertisedShortLocationName: "Gantofta",
            Geometry: {
              SWEREF99TM: "POINT (363326 6207027)",
              WGS84: "POINT (12.809001260660173 55.989045610735779)"
            },
            LocationSignature: "Gan"
          },
          {
            AdvertisedShortLocationName: "Alfta",
            Geometry: {
              SWEREF99TM: "POINT (557312 6801747)",
              WGS84: "POINT (16.071339801158693 61.3455456378038)"
            },
            LocationSignature: "Aft"
          },
          {
            AdvertisedShortLocationName: "Grönåsen",
            Geometry: {
              SWEREF99TM: "POINT (619622 7025206)",
              WGS84: "POINT (17.389495424120316 63.335552941510329)"
            },
            LocationSignature: "Gnå"
          },
          {
            AdvertisedShortLocationName: "Gistad",
            Geometry: {
              SWEREF99TM: "POINT (553325 6482344)",
              WGS84: "POINT (15.914390095843844 58.478465933750286)"
            },
            LocationSignature: "Gi"
          },
          {
            AdvertisedShortLocationName: "Filsbäck",
            Geometry: {
              SWEREF99TM: "POINT (397829 6484951)",
              WGS84: "POINT (13.247201112574858 58.493169816516371)"
            },
            LocationSignature: "Fiä"
          },
          {
            AdvertisedShortLocationName: "Godegård",
            Geometry: {
              SWEREF99TM: "POINT (509559 6511704)",
              WGS84: "POINT (15.165163531307268 58.745305676713755)"
            },
            LocationSignature: "Go"
          },
          {
            AdvertisedShortLocationName: "Gunsen",
            Geometry: {
              SWEREF99TM: "POINT (790236 7190997)",
              WGS84: "POINT (21.097881415997719 64.717881948706591)"
            },
            LocationSignature: "Gse"
          },
          {
            AdvertisedShortLocationName: "Gamlestaden",
            Geometry: {
              SWEREF99TM: "POINT (321670 6403270)",
              WGS84: "POINT (12.004459750884305 57.736070084565725)"
            },
            LocationSignature: "Gas"
          },
          {
            AdvertisedShortLocationName: "Gideåbacka",
            Geometry: {
              SWEREF99TM: "POINT (704366 7029724)",
              WGS84: "POINT (19.083947586527735 63.337659637965771)"
            },
            LocationSignature: "Gia"
          },
          {
            AdvertisedShortLocationName: "Geogr. Polcirkeln",
            Geometry: {
              SWEREF99TM: "POINT (717927 7390164)",
              WGS84: "POINT (19.912261579941081 66.553316009288565)"
            },
            LocationSignature: "Gpc"
          },
          {
            AdvertisedShortLocationName: "Grums",
            Geometry: {
              SWEREF99TM: "POINT (392752 6580879)",
              WGS84: "POINT (13.113764769946908 59.353001507934081)"
            },
            LocationSignature: "Gms"
          },
          {
            AdvertisedShortLocationName: "Gripenberg",
            Geometry: {
              SWEREF99TM: "POINT (492021 6428562)",
              WGS84: "POINT (14.865017811514887 57.99859763984454)"
            },
            LocationSignature: "Gp"
          },
          {
            AdvertisedShortLocationName: "Arlöv",
            Geometry: {
              SWEREF99TM: "POINT (378403 6167023)",
              WGS84: "POINT (13.068412053761493 55.633863798691216)"
            },
            LocationSignature: "Al"
          },
          {
            AdvertisedShortLocationName: "Glommersträsk",
            Geometry: {
              SWEREF99TM: "POINT (714967 7246135)",
              WGS84: "POINT (19.607916050792682 65.267594683306939)"
            },
            LocationSignature: "Glk"
          },
          {
            AdvertisedShortLocationName: "Grästorp",
            Geometry: {
              SWEREF99TM: "POINT (364503 6468292)",
              WGS84: "POINT (12.685777460021194 58.334593433452206)"
            },
            LocationSignature: "Gop"
          },
          {
            AdvertisedShortLocationName: "Grevaryd",
            Geometry: {
              SWEREF99TM: "POINT (475126 6334142)",
              WGS84: "POINT (14.588881843618251 57.149852748454826)"
            },
            LocationSignature: "Grd"
          },
          {
            AdvertisedShortLocationName: "Göteborg Volvo",
            Geometry: {
              SWEREF99TM: "POINT (310794 6402610)",
              WGS84: "POINT (11.822599074862227 57.725702603278378)"
            },
            LocationSignature: "Gvo"
          },
          {
            AdvertisedShortLocationName: "Gnesta",
            Geometry: {
              SWEREF99TM: "POINT (632674 6547755)",
              WGS84: "POINT (17.312841134340005 59.048549276804543)"
            },
            LocationSignature: "Gn"
          },
          {
            AdvertisedShortLocationName: "Göteborg Skandiahamnen",
            Geometry: {
              SWEREF99TM: "POINT (312839 6399576)",
              WGS84: "POINT (11.859241531778217 57.69934701410272)"
            },
            LocationSignature: "Gsh"
          },
          {
            AdvertisedShortLocationName: "Gastsjön",
            Geometry: {
              SWEREF99TM: "POINT (543443 6981231)",
              WGS84: "POINT (15.856463462337892 62.958287953538054)"
            },
            LocationSignature: "Gsn"
          },
          {
            AdvertisedShortLocationName: "Gullträsk",
            Geometry: {
              SWEREF99TM: "POINT (778469 7355495)",
              WGS84: "POINT (21.1910168000432 66.195598574267351)"
            },
            LocationSignature: "Glt"
          },
          {
            AdvertisedShortLocationName: "Gunnesbo",
            Geometry: {
              SWEREF99TM: "POINT (384974 6177077)",
              WGS84: "POINT (13.168516659784945 55.725755500557518)"
            },
            LocationSignature: "Gnb"
          },
          {
            AdvertisedShortLocationName: "Grimsås",
            Geometry: {
              SWEREF99TM: "POINT (412680 6372024)",
              WGS84: "POINT (13.543621611946001 57.482414490959279)"
            },
            LocationSignature: "Grm"
          },
          {
            AdvertisedShortLocationName: "Gålnäs",
            Geometry: {
              SWEREF99TM: "POINT (680930 7022087)",
              WGS84: "POINT (18.608223958290907 63.281877820956709)"
            },
            LocationSignature: "Gån"
          },
          {
            AdvertisedShortLocationName: "Gäddmyr",
            Geometry: {
              SWEREF99TM: "POINT (719877 7516356)",
              WGS84: "POINT (20.192992600928097 67.679482796419862)"
            },
            LocationSignature: "Gy"
          },
          {
            AdvertisedShortLocationName: "Gyttorp",
            Geometry: {
              SWEREF99TM: "POINT (498371 6595915)",
              WGS84: "POINT (14.971226414337908 59.50166298232147)"
            },
            LocationSignature: "Gyt"
          },
          {
            AdvertisedShortLocationName: "Gävle",
            Geometry: {
              SWEREF99TM: "POINT (617548 6728634)",
              WGS84: "POINT (17.151750038549078 60.67608613345503)"
            },
            LocationSignature: "Gä"
          },
          {
            AdvertisedShortLocationName: "Gärsnäs",
            Geometry: {
              SWEREF99TM: "POINT (448360 6155912)",
              WGS84: "POINT (14.181556623063974 55.546497528179785)"
            },
            LocationSignature: "Gss"
          },
          {
            AdvertisedShortLocationName: "Anneberg",
            Geometry: {
              SWEREF99TM: "POINT (326462 6381052)",
              WGS84: "POINT (12.10077643689166 57.538628927780955)"
            },
            LocationSignature: "Ag"
          },
          {
            AdvertisedShortLocationName: "Grycksbo",
            Geometry: {
              SWEREF99TM: "POINT (526230 6728073)",
              WGS84: "POINT (15.480261558376503 60.687469898508652)"
            },
            LocationSignature: "Gyo"
          },
          {
            AdvertisedShortLocationName: "Gräsberg",
            Geometry: {
              SWEREF99TM: "POINT (512368 6676412)",
              WGS84: "POINT (15.223250669201263 60.22429720511952)"
            },
            LocationSignature: "Gäg"
          },
          {
            AdvertisedShortLocationName: "Granbergsdal",
            Geometry: {
              SWEREF99TM: "POINT (477345 6584704)",
              WGS84: "POINT (14.601029876095229 59.400381474075679)"
            },
            LocationSignature: "Gr"
          },
          {
            AdvertisedShortLocationName: "Gällö",
            Geometry: {
              SWEREF99TM: "POINT (511660 6975720)",
              WGS84: "POINT (15.229499500583367 62.911233823777742)"
            },
            LocationSignature: "Gö"
          },
          {
            AdvertisedShortLocationName: "Göringen",
            Geometry: {
              SWEREF99TM: "POINT (520043 6788043)",
              WGS84: "POINT (15.373236362409553 61.226225327341787)"
            },
            LocationSignature: "Grn"
          },
          {
            AdvertisedShortLocationName: "Harrå",
            Geometry: {
              SWEREF99TM: "POINT (718567 7485657)",
              WGS84: "POINT (20.102669103346678 67.406203043509748)"
            },
            LocationSignature: "Har"
          },
          {
            AdvertisedShortLocationName: "Gåvetorp",
            Geometry: {
              SWEREF99TM: "POINT (474408 6311060)",
              WGS84: "POINT (14.579365197864306 56.942463585538249)"
            },
            LocationSignature: "Gåp"
          },
          {
            AdvertisedShortLocationName: "Gärdala",
            Geometry: {
              SWEREF99TM: "POINT (542044 6448574)",
              WGS84: "POINT (15.714820771436147 58.176414013208081)"
            },
            LocationSignature: "Gäd"
          },
          {
            AdvertisedShortLocationName: "Alvhem",
            Geometry: {
              SWEREF99TM: "POINT (332074 6433451)",
              WGS84: "POINT (12.157685045241994 58.010841208432964)"
            },
            LocationSignature: "Alh"
          },
          {
            AdvertisedShortLocationName: "Hallinden",
            Geometry: {
              SWEREF99TM: "POINT (297455 6485099)",
              WGS84: "POINT (11.527838629410684 58.459467742827137)"
            },
            LocationSignature: "Hal"
          },
          {
            AdvertisedShortLocationName: "Genevad",
            Geometry: {
              SWEREF99TM: "POINT (379073 6271363)",
              WGS84: "POINT (13.031802074007457 56.570964240279295)"
            },
            LocationSignature: "Gnd"
          },
          {
            AdvertisedShortLocationName: "Gagnef",
            Geometry: {
              SWEREF99TM: "POINT (504438 6718099)",
              WGS84: "POINT (15.081034651318967 60.598755558855437)"
            },
            LocationSignature: "Gnf"
          },
          {
            AdvertisedShortLocationName: "Helsingborg",
            Geometry: {
              SWEREF99TM: "POINT (356429 6213321)",
              WGS84: "POINT (12.695170384465698 56.043537688378294)"
            },
            LocationSignature: "Hb"
          },
          {
            AdvertisedShortLocationName: "Harasjön",
            Geometry: {
              SWEREF99TM: "POINT (643012 7008076)",
              WGS84: "POINT (17.840943136058986 63.173417554768072)"
            },
            LocationSignature: "Han"
          },
          {
            AdvertisedShortLocationName: "Gårdsjön",
            Geometry: {
              SWEREF99TM: "POINT (623771 6898560)",
              WGS84: "POINT (17.378936989786084 62.198437743469277)"
            },
            LocationSignature: "Gön"
          },
          {
            AdvertisedShortLocationName: "Gammelstad",
            Geometry: {
              SWEREF99TM: "POINT (822832 7297961)",
              WGS84: "POINT (22.026120624438043 65.641023675721485)"
            },
            LocationSignature: "Gst"
          },
          {
            AdvertisedShortLocationName: "Gullringen",
            Geometry: {
              SWEREF99TM: "POINT (541678 6407213)",
              WGS84: "POINT (15.701300316997514 57.804969514646189)"
            },
            LocationSignature: "Gng"
          },
          {
            AdvertisedShortLocationName: "Gubbero",
            Geometry: {
              SWEREF99TM: "POINT (321168 6400299)",
              WGS84: "POINT (11.998249637855931 57.709220349785859)"
            },
            LocationSignature: "Gro"
          },
          {
            AdvertisedShortLocationName: "Tåghallen",
            Geometry: {
              SWEREF99TM: "POINT (617548 6728634)",
              WGS84: "POINT (17.151750038549078 60.67608613345503)"
            },
            LocationSignature: "Gä.f"
          },
          {
            AdvertisedShortLocationName: "Högboda",
            Geometry: {
              SWEREF99TM: "POINT (389860 6603750)",
              WGS84: "POINT (13.051155006569576 59.557519929480357)"
            },
            LocationSignature: "Hbd"
          },
          {
            AdvertisedShortLocationName: "Göteborg Sävenäs",
            Geometry: {
              SWEREF99TM: "POINT (322457 6401971)",
              WGS84: "POINT (12.018618481158455 57.7247293992538)"
            },
            LocationSignature: "Gsv"
          },
          {
            AdvertisedShortLocationName: "Garsås",
            Geometry: {
              SWEREF99TM: "POINT (490198 6753144)",
              WGS84: "POINT (14.819261810298539 60.913301051913763)"
            },
            LocationSignature: "Gså"
          },
          {
            AdvertisedShortLocationName: "Gävle hamn",
            Geometry: {
              SWEREF99TM: "POINT (617548 6728634)",
              WGS84: "POINT (17.151750038549078 60.67608613345503)"
            },
            LocationSignature: "Gä.h"
          },
          {
            AdvertisedShortLocationName: "Hamra",
            Geometry: {
              SWEREF99TM: "POINT (336988 6329401)",
              WGS84: "POINT (12.310470907034384 57.079076883613872)"
            },
            LocationSignature: "Haa"
          },
          {
            AdvertisedShortLocationName: "Hedemora",
            Geometry: {
              SWEREF99TM: "POINT (554221 6682341)",
              WGS84: "POINT (15.980235493393721 60.274104352676964)"
            },
            LocationSignature: "Hdm"
          },
          {
            AdvertisedShortLocationName: "Gasklockorna",
            Geometry: {
              SWEREF99TM: "POINT (617548 6728634)",
              WGS84: "POINT (17.151750038549078 60.67608613345503)"
            },
            LocationSignature: "Gä.g"
          },
          {
            AdvertisedShortLocationName: "Gransjö",
            Geometry: {
              SWEREF99TM: "POINT (789703 7341863)",
              WGS84: "POINT (21.40800587939518 66.063925396164777)"
            },
            LocationSignature: "Grs"
          },
          {
            AdvertisedShortLocationName: "Holmsveden",
            Geometry: {
              SWEREF99TM: "POINT (592621 6777338)",
              WGS84: "POINT (16.719091859105532 61.119708857328568)"
            },
            LocationSignature: "Hdn"
          },
          {
            AdvertisedShortLocationName: "Halmstad",
            Geometry: {
              SWEREF99TM: "POINT (369157 6282646)",
              WGS84: "POINT (12.864818980582479 56.66960291358604)"
            },
            LocationSignature: "Hd"
          },
          {
            AdvertisedShortLocationName: "Holsbybrunn",
            Geometry: {
              SWEREF99TM: "POINT (511725 6365020)",
              WGS84: "POINT (15.195256753851522 57.427754273274175)"
            },
            LocationSignature: "Hbr"
          },
          {
            AdvertisedShortLocationName: "Hagge",
            Geometry: {
              SWEREF99TM: "POINT (517225 6666083)",
              WGS84: "POINT (15.310046165940761 60.131377823735917)"
            },
            LocationSignature: "Hge"
          },
          {
            AdvertisedShortLocationName: "Högbränna",
            Geometry: {
              SWEREF99TM: "POINT (718259 7078813)",
              WGS84: "POINT (19.428406378265478 63.768713877112965)"
            },
            LocationSignature: "Hbä"
          },
          {
            AdvertisedShortLocationName: "Hamrångefjärden",
            Geometry: {
              SWEREF99TM: "POINT (611888 6753532)",
              WGS84: "POINT (17.062537893894397 60.901104770560572)"
            },
            LocationSignature: "Hfj"
          },
          {
            AdvertisedShortLocationName: "Järnvägsmuseum",
            Geometry: {
              SWEREF99TM: "POINT (617548 6728634)",
              WGS84: "POINT (17.151750038549078 60.67608613345503)"
            },
            LocationSignature: "Gä.j"
          },
          {
            AdvertisedShortLocationName: "Grundbro",
            Geometry: {
              SWEREF99TM: "POINT (619747 6574277)",
              WGS84: "POINT (17.102236921191274 59.29039081077763)"
            },
            LocationSignature: "Gru"
          },
          {
            AdvertisedShortLocationName: "Gävle godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (617740 6729212)",
              WGS84: "POINT (17.155608679158611 60.681215463942728)"
            },
            LocationSignature: "Gäb"
          },
          {
            AdvertisedShortLocationName: "Hallstavik",
            Geometry: {
              SWEREF99TM: "POINT (700193 6662511)",
              WGS84: "POINT (18.595816739384155 60.050768783089786)"
            },
            LocationSignature: "Hak"
          },
          {
            AdvertisedShortLocationName: "Hagaström",
            Geometry: {
              SWEREF99TM: "POINT (612999 6727856)",
              WGS84: "POINT (17.068096210568964 60.670416694698567)"
            },
            LocationSignature: "Hg"
          },
          {
            AdvertisedShortLocationName: "Häggvik",
            Geometry: {
              SWEREF99TM: "POINT (666342 6593076)",
              WGS84: "POINT (17.933708229792504 59.443229737156024)"
            },
            LocationSignature: "Hgv"
          },
          {
            AdvertisedShortLocationName: "Abisko Ö",
            Geometry: {
              SWEREF99TM: "POINT (657629 7586635)",
              WGS84: "POINT (18.830346214296274 68.3486410812835)"
            },
            LocationSignature: "Ak"
          },
          {
            AdvertisedShortLocationName: "Hemfosa",
            Geometry: {
              SWEREF99TM: "POINT (670634 6551515)",
              WGS84: "POINT (17.976580294148828 59.068788682531618)"
            },
            LocationSignature: "Hfa"
          },
          {
            AdvertisedShortLocationName: "Grimstorp",
            Geometry: {
              SWEREF99TM: "POINT (481879 6379414)",
              WGS84: "POINT (14.697163474137138 57.556840604305144)"
            },
            LocationSignature: "Gt"
          },
          {
            AdvertisedShortLocationName: "Gamla Tortuna",
            Geometry: {
              SWEREF99TM: "POINT (596811 6616343)",
              WGS84: "POINT (16.718895209887446 59.673848840192079)"
            },
            LocationSignature: "Gttu"
          },
          {
            AdvertisedShortLocationName: "Ramlösa",
            Geometry: {
              SWEREF99TM: "POINT (358034 6211439)",
              WGS84: "POINT (12.72190928115989 56.027119858243218)"
            },
            LocationSignature: "Hbgb"
          },
          {
            AdvertisedShortLocationName: "Halmstads rangerbangård",
            Geometry: {
              SWEREF99TM: "POINT (370417 6280810)",
              WGS84: "POINT (12.886287671660318 56.653470244778973)"
            },
            LocationSignature: "Hdr"
          },
          {
            AdvertisedShortLocationName: "Gustafs",
            Geometry: {
              SWEREF99TM: "POINT (532769 6696260)",
              WGS84: "POINT (15.594716980892446 60.40136915544786)"
            },
            LocationSignature: "Gtf"
          },
          {
            AdvertisedShortLocationName: "Hagalund",
            Geometry: {
              SWEREF99TM: "POINT (670775 6585341)",
              WGS84: "POINT (18.005611850474132 59.372086830711993)"
            },
            LocationSignature: "Hgl"
          },
          {
            AdvertisedShortLocationName: "Horndal",
            Geometry: {
              SWEREF99TM: "POINT (578123 6686190)",
              WGS84: "POINT (16.413709069554191 60.304762753071586)"
            },
            LocationSignature: "Hl"
          },
          {
            AdvertisedShortLocationName: "Gryttje",
            Geometry: {
              SWEREF99TM: "POINT (619160 6884269)",
              WGS84: "POINT (17.280734526502403 62.0717495118879)"
            },
            LocationSignature: "Gry"
          },
          {
            AdvertisedShortLocationName: "Heberg",
            Geometry: {
              SWEREF99TM: "POINT (356437 6305761)",
              WGS84: "POINT (12.644467933715198 56.873359445794513)"
            },
            LocationSignature: "He"
          },
          {
            AdvertisedShortLocationName: "Helgum",
            Geometry: {
              SWEREF99TM: "POINT (598246 7003907)",
              WGS84: "POINT (16.949907263391403 63.15101679583848)"
            },
            LocationSignature: "Hlm"
          },
          {
            AdvertisedShortLocationName: "Högsjö",
            Geometry: {
              SWEREF99TM: "POINT (541469 6545852)",
              WGS84: "POINT (15.722857462745507 59.050072589442934)"
            },
            LocationSignature: "Hgö"
          },
          {
            AdvertisedShortLocationName: "Hillared",
            Geometry: {
              SWEREF99TM: "POINT (390005 6389001)",
              WGS84: "POINT (13.157952390028395 57.629903672254777)"
            },
            LocationSignature: "Hil"
          },
          {
            AdvertisedShortLocationName: "Hjulsbro",
            Geometry: {
              SWEREF99TM: "POINT (541905 6471174)",
              WGS84: "POINT (15.716545033933006 58.379396969068345)"
            },
            LocationSignature: "Hj"
          },
          {
            AdvertisedShortLocationName: "Hasslarp",
            Geometry: {
              SWEREF99TM: "POINT (364291 6223331)",
              WGS84: "POINT (12.816196275437939 56.13570240154904)"
            },
            LocationSignature: "Hlp"
          },
          {
            AdvertisedShortLocationName: "Hallstahammar",
            Geometry: {
              SWEREF99TM: "POINT (568847 6609130)",
              WGS84: "POINT (16.220194436890022 59.614655928127767)"
            },
            LocationSignature: "Hh"
          },
          {
            AdvertisedShortLocationName: "Hofors",
            Geometry: {
              SWEREF99TM: "POINT (569404 6715515)",
              WGS84: "POINT (16.266177340357707 60.569582533553081)"
            },
            LocationSignature: "Hfr"
          },
          {
            AdvertisedShortLocationName: "Holmfors",
            Geometry: {
              SWEREF99TM: "POINT (804218 7325347)",
              WGS84: "POINT (21.687644142854545 65.903152431408216)"
            },
            LocationSignature: "Hfs"
          },
          {
            AdvertisedShortLocationName: "Häggenås",
            Geometry: {
              SWEREF99TM: "POINT (493963 7028589)",
              WGS84: "POINT (14.879218440596285 63.385873696208833)"
            },
            LocationSignature: "Hgs"
          },
          {
            AdvertisedShortLocationName: "Gullberna",
            Geometry: {
              SWEREF99TM: "POINT (538128.74 6227130.1)",
              WGS84: "POINT (15.614336642925235 56.187608808677815)"
            },
            LocationSignature: "Gua"
          },
          {
            AdvertisedShortLocationName: "Getå",
            Geometry: {
              SWEREF99TM: "POINT (573283 6503617)",
              WGS84: "POINT (16.263400115761858 58.66658319287491)"
            },
            LocationSignature: "Gtå"
          },
          {
            AdvertisedShortLocationName: "Hällefors",
            Geometry: {
              SWEREF99TM: "POINT (472938 6626758)",
              WGS84: "POINT (14.518050030425529 59.777745671930468)"
            },
            LocationSignature: "Hlf"
          },
          {
            AdvertisedShortLocationName: "Herrhult",
            Geometry: {
              SWEREF99TM: "POINT (461150 6612623)",
              WGS84: "POINT (14.310746226759328 59.649890565307196)"
            },
            LocationSignature: "Hlt"
          },
          {
            AdvertisedShortLocationName: "Hällnäs",
            Geometry: {
              SWEREF99TM: "POINT (723637 7139196)",
              WGS84: "POINT (19.625887590833766 64.305474197603928)"
            },
            LocationSignature: "Hls"
          },
          {
            AdvertisedShortLocationName: "Helenelund",
            Geometry: {
              SWEREF99TM: "POINT (668181 6589289)",
              WGS84: "POINT (17.963119895149489 59.408535964681477)"
            },
            LocationSignature: "Hel"
          },
          {
            AdvertisedShortLocationName: "Hässleholm",
            Geometry: {
              SWEREF99TM: "POINT (423181 6224343)",
              WGS84: "POINT (13.76320718304113 56.157905939293791)"
            },
            LocationSignature: "Hm"
          },
          {
            AdvertisedShortLocationName: "Hällevadsholm",
            Geometry: {
              SWEREF99TM: "POINT (298578 6498487)",
              WGS84: "POINT (11.535223797959048 58.580009670622673)"
            },
            LocationSignature: "Hlv"
          },
          {
            AdvertisedShortLocationName: "Grötingen",
            Geometry: {
              SWEREF99TM: "POINT (524675 6969416)",
              WGS84: "POINT (15.48472656000008 62.854005647916374)"
            },
            LocationSignature: "Grö"
          },
          {
            AdvertisedShortLocationName: "Gussi",
            Geometry: {
              SWEREF99TM: "POINT (612537 6790717)",
              WGS84: "POINT (17.096435496228107 61.234539903888354)"
            },
            LocationSignature: "Gui"
          },
          {
            AdvertisedShortLocationName: "Hjärup",
            Geometry: {
              SWEREF99TM: "POINT (382788 6171351)",
              WGS84: "POINT (13.136180346678703 55.673808781669145)"
            },
            LocationSignature: "Hjp"
          },
          {
            AdvertisedShortLocationName: "Hällekis",
            Geometry: {
              SWEREF99TM: "POINT (409015 6499922)",
              WGS84: "POINT (13.433023594898264 58.630054794438095)"
            },
            LocationSignature: "Hlk"
          },
          {
            AdvertisedShortLocationName: "Hilleby",
            Geometry: {
              SWEREF99TM: "POINT (618427 6734715)",
              WGS84: "POINT (17.171504767081576 60.730384747808777)"
            },
            LocationSignature: "Hly"
          },
          {
            AdvertisedShortLocationName: "Helmershus",
            Geometry: {
              SWEREF99TM: "POINT (441040 6333993)",
              WGS84: "POINT (14.025608545463442 57.145404210077544)"
            },
            LocationSignature: "Hes"
          },
          {
            AdvertisedShortLocationName: "Huskvarna",
            Geometry: {
              SWEREF99TM: "POINT (456278 6404718)",
              WGS84: "POINT (14.264765068323074 57.782365572935369)"
            },
            LocationSignature: "Hka"
          },
          {
            AdvertisedShortLocationName: "Hissmofors",
            Geometry: {
              SWEREF99TM: "POINT (472839 7021337)",
              WGS84: "POINT (14.457833939407195 63.3198087067008)"
            },
            LocationSignature: "Hmfs"
          },
          {
            AdvertisedShortLocationName: "Hyllie",
            Geometry: {
              SWEREF99TM: "POINT (372378 6159320)",
              WGS84: "POINT (12.976334321741824 55.563147971625746)"
            },
            LocationSignature: "Hie"
          },
          {
            AdvertisedShortLocationName: "Hökmora",
            Geometry: {
              SWEREF99TM: "POINT (564428 6658894)",
              WGS84: "POINT (16.157295597154448 60.062126548259613)"
            },
            LocationSignature: "Hma"
          },
          {
            AdvertisedShortLocationName: "Horndal",
            Geometry: {
              SWEREF99TM: "POINT (578130 6685227)",
              WGS84: "POINT (16.413462325466064 60.296117404178929)"
            },
            LocationSignature: "Hlr"
          },
          {
            AdvertisedShortLocationName: "Hammar",
            Geometry: {
              SWEREF99TM: "POINT (639851 6990524)",
              WGS84: "POINT (17.763252204127426 63.017310680594186)"
            },
            LocationSignature: "Hmr"
          },
          {
            AdvertisedShortLocationName: "Hälleforsnäs",
            Geometry: {
              SWEREF99TM: "POINT (585915 6559058)",
              WGS84: "POINT (16.50255929862843 59.161996462748569)"
            },
            LocationSignature: "Hnä"
          },
          {
            AdvertisedShortLocationName: "Hudiksvall",
            Geometry: {
              SWEREF99TM: "POINT (611455 6845315)",
              WGS84: "POINT (17.109181613113915 61.724663725804646)"
            },
            LocationSignature: "Hkl"
          },
          {
            AdvertisedShortLocationName: "Hasselfors",
            Geometry: {
              SWEREF99TM: "POINT (479732 6549642)",
              WGS84: "POINT (14.646340796958789 59.085641711883291)"
            },
            LocationSignature: "Hs"
          },
          {
            AdvertisedShortLocationName: "Hölö",
            Geometry: {
              SWEREF99TM: "POINT (645499 6545700)",
              WGS84: "POINT (17.534812607709043 59.02593382032083)"
            },
            LocationSignature: "Hlö"
          },
          {
            AdvertisedShortLocationName: "Hillerstorp",
            Geometry: {
              SWEREF99TM: "POINT (432756 6352846)",
              WGS84: "POINT (13.883628094733824 57.313593931431249)"
            },
            LocationSignature: "Hto"
          },
          {
            AdvertisedShortLocationName: "Hednoret",
            Geometry: {
              SWEREF99TM: "POINT (798077 7315754)",
              WGS84: "POINT (21.531870499839012 65.823445853340772)"
            },
            LocationSignature: "Ht"
          },
          {
            AdvertisedShortLocationName: "Hovsta",
            Geometry: {
              SWEREF99TM: "POINT (512437 6578948)",
              WGS84: "POINT (15.218693351704676 59.349118203647251)"
            },
            LocationSignature: "Hsa"
          },
          {
            AdvertisedShortLocationName: "Hanaskog",
            Geometry: {
              SWEREF99TM: "POINT (443676 6224075)",
              WGS84: "POINT (14.093180199486671 56.1583593511671)"
            },
            LocationSignature: "Hsk"
          },
          {
            AdvertisedShortLocationName: "Hestra",
            Geometry: {
              SWEREF99TM: "POINT (415715 6367583)",
              WGS84: "POINT (13.59575379990811 57.443107911165725)"
            },
            LocationSignature: "Het"
          },
          {
            AdvertisedShortLocationName: "Holmsjö",
            Geometry: {
              SWEREF99TM: "POINT (533449 6253207)",
              WGS84: "POINT (15.542248211571938 56.422237816104861)"
            },
            LocationSignature: "Hmö"
          },
          {
            AdvertisedShortLocationName: "Habo",
            Geometry: {
              SWEREF99TM: "POINT (445298 6418662)",
              WGS84: "POINT (14.07695059451763 57.906393126559053)"
            },
            LocationSignature: "Ho"
          },
          {
            AdvertisedShortLocationName: "Hoting",
            Geometry: {
              SWEREF99TM: "POINT (558406 7110445)",
              WGS84: "POINT (16.199109618460131 64.115593029505391)"
            },
            LocationSignature: "Htg"
          },
          {
            AdvertisedShortLocationName: "Hälsingenybo",
            Geometry: {
              SWEREF99TM: "POINT (543525 6882332)",
              WGS84: "POINT (15.832936281139391 62.0706661748438)"
            },
            LocationSignature: "Hnb"
          },
          {
            AdvertisedShortLocationName: "Hulingsryd",
            Geometry: {
              SWEREF99TM: "POINT (550050 6373464)",
              WGS84: "POINT (15.835164283666364 57.500992797223894)"
            },
            LocationSignature: "Hud"
          },
          {
            AdvertisedShortLocationName: "Hasslerör",
            Geometry: {
              SWEREF99TM: "POINT (438635 6512722)",
              WGS84: "POINT (13.93953951212381 58.750193689830262)"
            },
            LocationSignature: "Hsr"
          },
          {
            AdvertisedShortLocationName: "Hussjöby",
            Geometry: {
              SWEREF99TM: "POINT (634000 6937877)",
              WGS84: "POINT (17.605746213317641 62.5474798344926)"
            },
            LocationSignature: "Hsy"
          },
          {
            AdvertisedShortLocationName: "Huddinge",
            Geometry: {
              SWEREF99TM: "POINT (669888 6570098)",
              WGS84: "POINT (17.978043145418106 59.235745452523467)"
            },
            LocationSignature: "Hu"
          },
          {
            AdvertisedShortLocationName: "Huvudsta",
            Geometry: {
              SWEREF99TM: "POINT (670580 6583400)",
              WGS84: "POINT (18.000647047100582 59.354759264587329)"
            },
            LocationSignature: "Huv"
          },
          {
            AdvertisedShortLocationName: "Hultsfred",
            Geometry: {
              SWEREF99TM: "POINT (550787 6371794)",
              WGS84: "POINT (15.847113344881812 57.485911214421485)"
            },
            LocationSignature: "Hf"
          },
          {
            AdvertisedShortLocationName: "Holmsund",
            Geometry: {
              SWEREF99TM: "POINT (765105 7075677)",
              WGS84: "POINT (20.368983964587649 63.708476324504993)"
            },
            LocationSignature: "Hod"
          },
          {
            AdvertisedShortLocationName: "Hedensbyn",
            Geometry: {
              SWEREF99TM: "POINT (785813 7193591)",
              WGS84: "POINT (21.010731848230883 64.744813796678869)"
            },
            LocationSignature: "Hsb"
          },
          {
            AdvertisedShortLocationName: "Hackås",
            Geometry: {
              SWEREF99TM: "POINT (475734 6977234)",
              WGS84: "POINT (14.522167638926167 62.924200508866441)"
            },
            LocationSignature: "Hks"
          },
          {
            AdvertisedShortLocationName: "Härnösand",
            Geometry: {
              SWEREF99TM: "POINT (650140 6948362)",
              WGS84: "POINT (17.928386206800027 62.635273037522474)"
            },
            LocationSignature: "Hsd"
          },
          {
            AdvertisedShortLocationName: "Handen",
            Geometry: {
              SWEREF99TM: "POINT (679149 6562777)",
              WGS84: "POINT (18.134083407444244 59.166285127139389)"
            },
            LocationSignature: "Hnd"
          },
          {
            AdvertisedShortLocationName: "Hästveda",
            Geometry: {
              SWEREF99TM: "POINT (434063 6238707)",
              WGS84: "POINT (13.934798054448995 56.288567441706022)"
            },
            LocationSignature: "Hv"
          },
          {
            AdvertisedShortLocationName: "Hörnsjö",
            Geometry: {
              SWEREF99TM: "POINT (721940 7082048)",
              WGS84: "POINT (19.507442105150965 63.795348817150249)"
            },
            LocationSignature: "Hsö"
          },
          {
            AdvertisedShortLocationName: "Hok",
            Geometry: {
              SWEREF99TM: "POINT (456551 6374851)",
              WGS84: "POINT (14.274726052387866 57.514131758823424)"
            },
            LocationSignature: "Hok"
          },
          {
            AdvertisedShortLocationName: "Alingsås",
            Geometry: {
              SWEREF99TM: "POINT (353852 6423240)",
              WGS84: "POINT (12.53218546120595 57.926905169934273)"
            },
            LocationSignature: "A"
          },
          {
            AdvertisedShortLocationName: "Hökön",
            Geometry: {
              SWEREF99TM: "POINT (452197 6259102)",
              WGS84: "POINT (14.223998211191663 56.473960396294764)"
            },
            LocationSignature: "Hkö"
          },
          {
            AdvertisedShortLocationName: "Hundsjön",
            Geometry: {
              SWEREF99TM: "POINT (808684 7332798)",
              WGS84: "POINT (21.80267183992477 65.965240629089578)"
            },
            LocationSignature: "Huö"
          },
          {
            AdvertisedShortLocationName: "Hult",
            Geometry: {
              SWEREF99TM: "POINT (507688 6389138)",
              WGS84: "POINT (15.128790453454673 57.644485113790374)"
            },
            LocationSignature: "Hul"
          },
          {
            AdvertisedShortLocationName: "Hällenyland",
            Geometry: {
              SWEREF99TM: "POINT (643112 6944448)",
              WGS84: "POINT (17.788211226119564 62.602978789540096)"
            },
            LocationSignature: "Hnl"
          },
          {
            AdvertisedShortLocationName: "Hästbo",
            Geometry: {
              SWEREF99TM: "POINT (580064 6702306)",
              WGS84: "POINT (16.455258270281661 60.449039637054895)"
            },
            LocationSignature: "Hä"
          },
          {
            AdvertisedShortLocationName: "Husum",
            Geometry: {
              SWEREF99TM: "POINT (707955 7030704)",
              WGS84: "POINT (19.156712114729547 63.344363902360122)"
            },
            LocationSignature: "Hum"
          },
          {
            AdvertisedShortLocationName: "Häljarp",
            Geometry: {
              SWEREF99TM: "POINT (369354 6192560)",
              WGS84: "POINT (12.912557712645304 55.860824070957293)"
            },
            LocationSignature: "Häp"
          },
          {
            AdvertisedShortLocationName: "Hennan",
            Geometry: {
              SWEREF99TM: "POINT (547230 6876943)",
              WGS84: "POINT (15.902394024486547 62.021852385909938)"
            },
            LocationSignature: "Hnn"
          },
          {
            AdvertisedShortLocationName: "Höja",
            Geometry: {
              SWEREF99TM: "POINT (450707 6573760)",
              WGS84: "POINT (14.134466415702088 59.299837327834837)"
            },
            LocationSignature: "Höja"
          },
          {
            AdvertisedShortLocationName: "Hämrasviken",
            Geometry: {
              SWEREF99TM: "POINT (652805 7014175)",
              WGS84: "POINT (18.040899891040258 63.224059192706363)"
            },
            LocationSignature: "Häb"
          },
          {
            AdvertisedShortLocationName: "Hjältevad",
            Geometry: {
              SWEREF99TM: "POINT (520542 6387450)",
              WGS84: "POINT (15.343975994340779 57.62892028334813)"
            },
            LocationSignature: "Hvd"
          },
          {
            AdvertisedShortLocationName: "Hyllstofta",
            Geometry: {
              SWEREF99TM: "POINT (393466 6222146)",
              WGS84: "POINT (13.285879333428305 56.132464043840365)"
            },
            LocationSignature: "Hyl"
          },
          {
            AdvertisedShortLocationName: "Härryda",
            Geometry: {
              SWEREF99TM: "POINT (339267 6397358)",
              WGS84: "POINT (12.303603168813506 57.689665851155858)"
            },
            LocationSignature: "Häy"
          },
          {
            AdvertisedShortLocationName: "Ingatorp",
            Geometry: {
              SWEREF99TM: "POINT (524904 6388094)",
              WGS84: "POINT (15.417082009311869 57.634485145605709)"
            },
            LocationSignature: "Igt"
          },
          {
            AdvertisedShortLocationName: "Håsjö",
            Geometry: {
              SWEREF99TM: "POINT (564424 6988834)",
              WGS84: "POINT (16.272961072451853 63.023398107603875)"
            },
            LocationSignature: "Hå"
          },
          {
            AdvertisedShortLocationName: "Husums norra",
            Geometry: {
              SWEREF99TM: "POINT (708470 7031182)",
              WGS84: "POINT (19.167593858081148 63.348342743358096)"
            },
            LocationSignature: "Humn"
          },
          {
            AdvertisedShortLocationName: "Höör",
            Geometry: {
              SWEREF99TM: "POINT (408994 6200084)",
              WGS84: "POINT (13.543109047891285 55.937516704169433)"
            },
            LocationSignature: "Hö"
          },
          {
            AdvertisedShortLocationName: "Ingmår",
            Geometry: {
              SWEREF99TM: "POINT (397857 6639284)",
              WGS84: "POINT (13.175282506542827 59.878471531003896)"
            },
            LocationSignature: "Imr"
          },
          {
            AdvertisedShortLocationName: "Högdalen",
            Geometry: {
              SWEREF99TM: "POINT (673424 6572669)",
              WGS84: "POINT (18.041982001377352 59.257368988300769)"
            },
            LocationSignature: "Hön"
          },
          {
            AdvertisedShortLocationName: "Härad",
            Geometry: {
              SWEREF99TM: "POINT (608767 6581376)",
              WGS84: "POINT (16.913184715386098 59.357073144968908)"
            },
            LocationSignature: "Häd"
          },
          {
            AdvertisedShortLocationName: "Hova",
            Geometry: {
              SWEREF99TM: "POINT (454721 6524147)",
              WGS84: "POINT (14.215176192920854 58.854777417969984)"
            },
            LocationSignature: "Hova"
          },
          {
            AdvertisedShortLocationName: "Harmånger",
            Geometry: {
              SWEREF99TM: "POINT (619196 6865514)",
              WGS84: "POINT (17.268878320893517 61.903514832791473)"
            },
            LocationSignature: "Håg"
          },
          {
            AdvertisedShortLocationName: "Järbo",
            Geometry: {
              SWEREF99TM: "POINT (587475 6732106)",
              WGS84: "POINT (16.6031015877392 60.714956127452034)"
            },
            LocationSignature: "Jb"
          },
          {
            AdvertisedShortLocationName: "Jokkmokk",
            Geometry: {
              SWEREF99TM: "POINT (714266 7395894)",
              WGS84: "POINT (19.840095037677361 66.607095058028449)"
            },
            LocationSignature: "Jk"
          },
          {
            AdvertisedShortLocationName: "Insjön",
            Geometry: {
              SWEREF99TM: "POINT (505158 6726649)",
              WGS84: "POINT (15.094405490730756 60.675512123860209)"
            },
            LocationSignature: "In"
          },
          {
            AdvertisedShortLocationName: "Hovmantorp",
            Geometry: {
              SWEREF99TM: "POINT (508528 6293598)",
              WGS84: "POINT (15.139584184013192 56.786219735679943)"
            },
            LocationSignature: "Hvp"
          },
          {
            AdvertisedShortLocationName: "Hinsnoret",
            Geometry: {
              SWEREF99TM: "POINT (534472 6711991)",
              WGS84: "POINT (15.628346442191191 60.542461767843314)"
            },
            LocationSignature: "Hno"
          },
          {
            AdvertisedShortLocationName: "Isätra",
            Geometry: {
              SWEREF99TM: "POINT (597456 6645753)",
              WGS84: "POINT (16.744076539590626 59.937664903108029)"
            },
            LocationSignature: "Ist"
          },
          {
            AdvertisedShortLocationName: "Häggsjön",
            Geometry: {
              SWEREF99TM: "POINT (640332 6941155)",
              WGS84: "POINT (17.731409943857592 62.57452228599368)"
            },
            LocationSignature: "Hän"
          },
          {
            AdvertisedShortLocationName: "Hörnefors",
            Geometry: {
              SWEREF99TM: "POINT (743239 7065470)",
              WGS84: "POINT (19.91234286770667 63.633001329511821)"
            },
            LocationSignature: "Höf"
          },
          {
            AdvertisedShortLocationName: "Holmån",
            Geometry: {
              SWEREF99TM: "POINT (632318 7031922)",
              WGS84: "POINT (17.648333850475723 63.391293395657748)"
            },
            LocationSignature: "Hoå"
          },
          {
            AdvertisedShortLocationName: "Håverud",
            Geometry: {
              SWEREF99TM: "POINT (350634 6523407)",
              WGS84: "POINT (12.412909610909477 58.824596941853684)"
            },
            LocationSignature: "Hvr"
          },
          {
            AdvertisedShortLocationName: "Johannisberg",
            Geometry: {
              SWEREF99TM: "POINT (552996 6930750)",
              WGS84: "POINT (16.02888014143338 62.503996331218886)"
            },
            LocationSignature: "Jbg"
          },
          {
            AdvertisedShortLocationName: "Högbysjön",
            Geometry: {
              SWEREF99TM: "POINT (694847 7026344)",
              WGS84: "POINT (18.890170583101582 63.312705948471624)"
            },
            LocationSignature: "Hög"
          },
          {
            AdvertisedShortLocationName: "Jonsered östra",
            Geometry: {
              SWEREF99TM: "POINT (332911 6404476)",
              WGS84: "POINT (12.192176120766124 57.75121155089343)"
            },
            LocationSignature: "J"
          },
          {
            AdvertisedShortLocationName: "Hössjön",
            Geometry: {
              SWEREF99TM: "POINT (746010 7068181)",
              WGS84: "POINT (19.972302169250447 63.655320857919733)"
            },
            LocationSignature: "Hös"
          },
          {
            AdvertisedShortLocationName: "Järpen",
            Geometry: {
              SWEREF99TM: "POINT (423524 7024651)",
              WGS84: "POINT (13.472155593714973 63.342402775814868)"
            },
            LocationSignature: "Jpn"
          },
          {
            AdvertisedShortLocationName: "Jämtlands Sikås",
            Geometry: {
              SWEREF99TM: "POINT (510233 7055378)",
              WGS84: "POINT (15.206458423813126 63.626198194100404)"
            },
            LocationSignature: "Js"
          },
          {
            AdvertisedShortLocationName: "Håmojåkk",
            Geometry: {
              SWEREF99TM: "POINT (722119 7476760)",
              WGS84: "POINT (20.167928367107208 67.324084848840215)"
            },
            LocationSignature: "Håk"
          },
          {
            AdvertisedShortLocationName: "Hållsta",
            Geometry: {
              SWEREF99TM: "POINT (583078 6573835)",
              WGS84: "POINT (16.458614128862813 59.295220044401937)"
            },
            LocationSignature: "Hål"
          },
          {
            AdvertisedShortLocationName: "Järpås",
            Geometry: {
              SWEREF99TM: "POINT (381287 6472696)",
              WGS84: "POINT (12.969950503573184 58.378983944947926)"
            },
            LocationSignature: "Jps"
          },
          {
            AdvertisedShortLocationName: "Haparanda",
            Geometry: {
              SWEREF99TM: "POINT (916041 7331082)",
              WGS84: "POINT (24.131132904589016 65.82811132917702)"
            },
            LocationSignature: "Hp"
          },
          {
            AdvertisedShortLocationName: "Högsby",
            Geometry: {
              SWEREF99TM: "POINT (562137 6336316)",
              WGS84: "POINT (16.027464583056819 57.165850290543879)"
            },
            LocationSignature: "Höy"
          },
          {
            AdvertisedShortLocationName: "Igelstorp",
            Geometry: {
              SWEREF99TM: "POINT (440282 6473442)",
              WGS84: "POINT (13.978324156114546 58.397698044356865)"
            },
            LocationSignature: "Ip"
          },
          {
            AdvertisedShortLocationName: "Jakobsberg",
            Geometry: {
              SWEREF99TM: "POINT (660733 6590667)",
              WGS84: "POINT (17.833119618641522 59.423805877428372)"
            },
            LocationSignature: "Jkb"
          },
          {
            AdvertisedShortLocationName: "Jädersbruk",
            Geometry: {
              SWEREF99TM: "POINT (545326 6585670)",
              WGS84: "POINT (15.798392368600274 59.407224701681109)"
            },
            LocationSignature: "Jbk"
          },
          {
            AdvertisedShortLocationName: "Järvsö",
            Geometry: {
              SWEREF99TM: "POINT (561960 6843067)",
              WGS84: "POINT (16.172093563786927 61.715694432299657)"
            },
            LocationSignature: "Jr"
          },
          {
            AdvertisedShortLocationName: "Jonsered",
            Geometry: {
              SWEREF99TM: "POINT (331801 6404370)",
              WGS84: "POINT (12.173623419786706 57.749846133985251)"
            },
            LocationSignature: "Jv"
          },
          {
            AdvertisedShortLocationName: "Jularbo",
            Geometry: {
              SWEREF99TM: "POINT (569814 6669709)",
              WGS84: "POINT (16.25771286082864 60.158330506098444)"
            },
            LocationSignature: "Ju"
          },
          {
            AdvertisedShortLocationName: "Jenny",
            Geometry: {
              SWEREF99TM: "POINT (593969 6403284)",
              WGS84: "POINT (16.579363795375265 57.761775783889291)"
            },
            LocationSignature: "Jy"
          },
          {
            AdvertisedShortLocationName: "Hovslätt",
            Geometry: {
              SWEREF99TM: "POINT (447836 6399532)",
              WGS84: "POINT (14.123948495898295 57.734885634021161)"
            },
            LocationSignature: "Hvs"
          },
          {
            AdvertisedShortLocationName: "Ivarsbjörke",
            Geometry: {
              SWEREF99TM: "POINT (396356 6648359)",
              WGS84: "POINT (13.143941145310153 59.959542740737781)"
            },
            LocationSignature: "Ibe"
          },
          {
            AdvertisedShortLocationName: "Jörn",
            Geometry: {
              SWEREF99TM: "POINT (736499 7223817)",
              WGS84: "POINT (20.029360452861017 65.053323581616809)"
            },
            LocationSignature: "Jrn"
          },
          {
            AdvertisedShortLocationName: "Jordbro",
            Geometry: {
              SWEREF99TM: "POINT (678848 6560092)",
              WGS84: "POINT (18.126627633514342 59.14233539839546)"
            },
            LocationSignature: "Jbo"
          },
          {
            AdvertisedShortLocationName: "Hallsberg",
            Geometry: {
              SWEREF99TM: "POINT (506379 6547530)",
              WGS84: "POINT (15.111247817253778 59.067109058988137)"
            },
            LocationSignature: "Hpbg"
          },
          {
            AdvertisedShortLocationName: "Järlåsa",
            Geometry: {
              SWEREF99TM: "POINT (623296 6640658)",
              WGS84: "POINT (17.203120446229246 59.885027833296036)"
            },
            LocationSignature: "Jla"
          },
          {
            AdvertisedShortLocationName: "Kattisträsk",
            Geometry: {
              SWEREF99TM: "POINT (739888 7183364)",
              WGS84: "POINT (20.032824113557091 64.689325241031426)"
            },
            LocationSignature: "Kaä"
          },
          {
            AdvertisedShortLocationName: "Hindås",
            Geometry: {
              SWEREF99TM: "POINT (348110 6398661)",
              WGS84: "POINT (12.450955810908908 57.70442998342633)"
            },
            LocationSignature: "Hås"
          },
          {
            AdvertisedShortLocationName: "Jamtli",
            Geometry: {
              SWEREF99TM: "POINT (481461 7006472)",
              WGS84: "POINT (14.631637648178222 63.1869490920272)"
            },
            LocationSignature: "Jli"
          },
          {
            AdvertisedShortLocationName: "Jönåker",
            Geometry: {
              SWEREF99TM: "POINT (599815 6512758)",
              WGS84: "POINT (16.724657928092789 58.743342573688565)"
            },
            LocationSignature: "Jår"
          },
          {
            AdvertisedShortLocationName: "Kalmar",
            Geometry: {
              SWEREF99TM: "POINT (583383 6280513)",
              WGS84: "POINT (16.360325217576449 56.661313812876386)"
            },
            LocationSignature: "Kac"
          },
          {
            AdvertisedShortLocationName: "Kattarp",
            Geometry: {
              SWEREF99TM: "POINT (361972 6224432)",
              WGS84: "POINT (12.778340418711485 56.144922275263838)"
            },
            LocationSignature: "Ka"
          },
          {
            AdvertisedShortLocationName: "Kattisavan",
            Geometry: {
              SWEREF99TM: "POINT (650338 7184720)",
              WGS84: "POINT (18.1599783945203 64.7533732424568)"
            },
            LocationSignature: "Kat"
          },
          {
            AdvertisedShortLocationName: "Järna",
            Geometry: {
              SWEREF99TM: "POINT (647135 6553329)",
              WGS84: "POINT (17.568388900751486 59.093817558997308)"
            },
            LocationSignature: "Jn"
          },
          {
            AdvertisedShortLocationName: "Kirunavaara",
            Geometry: {
              SWEREF99TM: "POINT (718979 7530000)",
              WGS84: "POINT (20.198888681780936 67.802036316748783)"
            },
            LocationSignature: "Kia"
          },
          {
            AdvertisedShortLocationName: "Hallsbergs rangerbangård",
            Geometry: {
              SWEREF99TM: "POINT (503403 6546585)",
              WGS84: "POINT (15.059332698873588 59.058656565141611)"
            },
            LocationSignature: "Hrbg"
          },
          {
            AdvertisedShortLocationName: "Hallsberg Posten",
            Geometry: {
              SWEREF99TM: "POINT (502655 6546200)",
              WGS84: "POINT (15.046286370565941 59.055204358920932)"
            },
            LocationSignature: "Hpn"
          },
          {
            AdvertisedShortLocationName: "Iggesund",
            Geometry: {
              SWEREF99TM: "POINT (610270 6836373)",
              WGS84: "POINT (17.081364433130329 61.64478751337991)"
            },
            LocationSignature: "Id"
          },
          {
            AdvertisedShortLocationName: "Heby",
            Geometry: {
              SWEREF99TM: "POINT (603542 6646227)",
              WGS84: "POINT (16.853164760744242 59.940434496041263)"
            },
            LocationSignature: "Hy"
          },
          {
            AdvertisedShortLocationName: "Katrineholm",
            Geometry: {
              SWEREF99TM: "POINT (569475 6540292)",
              WGS84: "POINT (16.209183647564291 58.996511678685145)"
            },
            LocationSignature: "K"
          },
          {
            AdvertisedShortLocationName: "Herrljunga",
            Geometry: {
              SWEREF99TM: "POINT (383288 6439223)",
              WGS84: "POINT (13.020948692817161 58.079057004969172)"
            },
            LocationSignature: "Hr"
          },
          {
            AdvertisedShortLocationName: "Jönköpings godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (450807 6402743)",
              WGS84: "POINT (14.173179778921195 57.764060353305538)"
            },
            LocationSignature: "Jögb"
          },
          {
            AdvertisedShortLocationName: "Håkantorp",
            Geometry: {
              SWEREF99TM: "POINT (377394 6464758)",
              WGS84: "POINT (12.907646836085119 58.306663929857727)"
            },
            LocationSignature: "Håp"
          },
          {
            AdvertisedShortLocationName: "Juån",
            Geometry: {
              SWEREF99TM: "POINT (529093 6915442)",
              WGS84: "POINT (15.562272457595162 62.3692451136364)"
            },
            LocationSignature: "Jå"
          },
          {
            AdvertisedShortLocationName: "Kalmar södra",
            Geometry: {
              SWEREF99TM: "POINT (581579 6281078)",
              WGS84: "POINT (16.331082412648311 56.666706352186523)"
            },
            LocationSignature: "Kas"
          },
          {
            AdvertisedShortLocationName: "Järlebo",
            Geometry: {
              SWEREF99TM: "POINT (652287 6669539)",
              WGS84: "POINT (17.74190324047218 60.134390894972256)"
            },
            LocationSignature: "Jlo"
          },
          {
            AdvertisedShortLocationName: "Karpalund",
            Geometry: {
              SWEREF99TM: "POINT (443597 6210983)",
              WGS84: "POINT (14.094672700914874 56.040735767970688)"
            },
            LocationSignature: "Kap"
          },
          {
            AdvertisedShortLocationName: "Johannedal",
            Geometry: {
              SWEREF99TM: "POINT (623363 6924901)",
              WGS84: "POINT (17.389794451331674 62.434809109161691)"
            },
            LocationSignature: "Jhl"
          },
          {
            AdvertisedShortLocationName: "Kungsbacka",
            Geometry: {
              SWEREF99TM: "POINT (324976 6375640)",
              WGS84: "POINT (12.079871831568406 57.489505442452156)"
            },
            LocationSignature: "Kb"
          },
          {
            AdvertisedShortLocationName: "Karlskoga Dalbacksgatan",
            Geometry: {
              SWEREF99TM: "POINT (472105 6576496)",
              WGS84: "POINT (14.509817448299696 59.32636054046808)"
            },
            LocationSignature: "Kasd"
          },
          {
            AdvertisedShortLocationName: "Järneträsk",
            Geometry: {
              SWEREF99TM: "POINT (763909 7291725)",
              WGS84: "POINT (20.740092199317111 65.638963349212361)"
            },
            LocationSignature: "Jnt"
          },
          {
            AdvertisedShortLocationName: "Järnforsen",
            Geometry: {
              SWEREF99TM: "POINT (537302 6363084)",
              WGS84: "POINT (15.620878090761892 57.408984976082472)"
            },
            LocationSignature: "Jäf"
          },
          {
            AdvertisedShortLocationName: "Jakobshyttan",
            Geometry: {
              SWEREF99TM: "POINT (509210 6518688)",
              WGS84: "POINT (15.15942054779714 58.8080360293133)"
            },
            LocationSignature: "Jho"
          },
          {
            AdvertisedShortLocationName: "Koijuvaara",
            Geometry: {
              SWEREF99TM: "POINT (749007 7449300)",
              WGS84: "POINT (20.731093461186685 67.057759282923428)"
            },
            LocationSignature: "Kaa"
          },
          {
            AdvertisedShortLocationName: "Hyltebruk",
            Geometry: {
              SWEREF99TM: "POINT (392867 6318569)",
              WGS84: "POINT (13.23640399744783 56.998204449071039)"
            },
            LocationSignature: "Hyb"
          },
          {
            AdvertisedShortLocationName: "Knalleland",
            Geometry: {
              SWEREF99TM: "POINT (377497 6400963)",
              WGS84: "POINT (12.942554118371053 57.7340598314687)"
            },
            LocationSignature: "Knl"
          },
          {
            AdvertisedShortLocationName: "Kode",
            Geometry: {
              SWEREF99TM: "POINT (313613 6426870)",
              WGS84: "POINT (11.850915983954362 57.944463550966404)"
            },
            LocationSignature: "Kde"
          },
          {
            AdvertisedShortLocationName: "Kinnared",
            Geometry: {
              SWEREF99TM: "POINT (385094 6321786)",
              WGS84: "POINT (13.107056287205646 57.025220921838944)"
            },
            LocationSignature: "Kid"
          },
          {
            AdvertisedShortLocationName: "Korsberga",
            Geometry: {
              SWEREF99TM: "POINT (507418 6350990)",
              WGS84: "POINT (15.123109651690029 57.301814299854449)"
            },
            LocationSignature: "Kba"
          },
          {
            AdvertisedShortLocationName: "Horred",
            Geometry: {
              SWEREF99TM: "POINT (348250 6359575)",
              WGS84: "POINT (12.477653813819135 57.353722004140209)"
            },
            LocationSignature: "Hre"
          },
          {
            AdvertisedShortLocationName: "Kalix",
            Geometry: {
              SWEREF99TM: "POINT (872545 7328236)",
              WGS84: "POINT (23.180952172901662 65.856457726172934)"
            },
            LocationSignature: "Klx"
          },
          {
            AdvertisedShortLocationName: "Koskullskulle",
            Geometry: {
              SWEREF99TM: "POINT (747747 7463661)",
              WGS84: "POINT (20.732655299482769 67.186977671706444)"
            },
            LocationSignature: "Kos"
          },
          {
            AdvertisedShortLocationName: "Kinna",
            Geometry: {
              SWEREF99TM: "POINT (362043 6376013)",
              WGS84: "POINT (12.697446501345638 57.50564669962769)"
            },
            LocationSignature: "Kin"
          },
          {
            AdvertisedShortLocationName: "Karlberg",
            Geometry: {
              SWEREF99TM: "POINT (672231 6581859)",
              WGS84: "POINT (18.028410943790742 59.340269235401472)"
            },
            LocationSignature: "Ke"
          },
          {
            AdvertisedShortLocationName: "Kejsarbäcken",
            Geometry: {
              SWEREF99TM: "POINT (483886 6632898)",
              WGS84: "POINT (14.712546117016609 59.833449287563)"
            },
            LocationSignature: "Keb"
          },
          {
            AdvertisedShortLocationName: "Kisa",
            Geometry: {
              SWEREF99TM: "POINT (537497 6427175)",
              WGS84: "POINT (15.634102169472831 57.984630824753395)"
            },
            LocationSignature: "Kisa"
          },
          {
            AdvertisedShortLocationName: "Kil",
            Geometry: {
              SWEREF99TM: "POINT (404670 6597465)",
              WGS84: "POINT (13.315881692526037 59.50474299102514)"
            },
            LocationSignature: "Kil"
          },
          {
            AdvertisedShortLocationName: "Hörle",
            Geometry: {
              SWEREF99TM: "POINT (442923 6346622)",
              WGS84: "POINT (14.053825698105854 57.259075357890993)"
            },
            LocationSignature: "Hrl"
          },
          {
            AdvertisedShortLocationName: "Karlsborg",
            Geometry: {
              SWEREF99TM: "POINT (471456 6487800)",
              WGS84: "POINT (14.509833864596466 58.529790672931348)"
            },
            LocationSignature: "Kbg"
          },
          {
            AdvertisedShortLocationName: "Kopparberg",
            Geometry: {
              SWEREF99TM: "POINT (499266 6637227)",
              WGS84: "POINT (14.986890985813389 59.872634547221757)"
            },
            LocationSignature: "Kpg"
          },
          {
            AdvertisedShortLocationName: "Korsnäs",
            Geometry: {
              SWEREF99TM: "POINT (539048 6716898)",
              WGS84: "POINT (15.712718380886704 60.586097481213507)"
            },
            LocationSignature: "Koä"
          },
          {
            AdvertisedShortLocationName: "Knapptorp",
            Geometry: {
              SWEREF99TM: "POINT (496076 6593967)",
              WGS84: "POINT (14.930724887501288 59.484154832497644)"
            },
            LocationSignature: "Knp"
          },
          {
            AdvertisedShortLocationName: "Köpmannebro",
            Geometry: {
              SWEREF99TM: "POINT (355839 6516952)",
              WGS84: "POINT (12.50712106135123 58.768453927915246)"
            },
            LocationSignature: "Kpm"
          },
          {
            AdvertisedShortLocationName: "Kållered",
            Geometry: {
              SWEREF99TM: "POINT (323570 6389743)",
              WGS84: "POINT (12.046219106252126 57.615475801959889)"
            },
            LocationSignature: "Krd"
          },
          {
            AdvertisedShortLocationName: "Keräsjoki",
            Geometry: {
              SWEREF99TM: "POINT (906360 7331768)",
              WGS84: "POINT (23.923956912052724 65.846624255255691)"
            },
            LocationSignature: "Kei"
          },
          {
            AdvertisedShortLocationName: "Karbenning",
            Geometry: {
              SWEREF99TM: "POINT (559793 6655999)",
              WGS84: "POINT (16.073212686173147 60.0368385747705)"
            },
            LocationSignature: "Kbn"
          },
          {
            AdvertisedShortLocationName: "Korpklev",
            Geometry: {
              SWEREF99TM: "POINT (536718 6421246)",
              WGS84: "POINT (15.620009929973161 57.931443968056591)"
            },
            LocationSignature: "Kpkv"
          },
          {
            AdvertisedShortLocationName: "Kortfors",
            Geometry: {
              SWEREF99TM: "POINT (481610 6586625)",
              WGS84: "POINT (14.675973213604916 59.417839873950037)"
            },
            LocationSignature: "Kf"
          },
          {
            AdvertisedShortLocationName: "Jönköping",
            Geometry: {
              SWEREF99TM: "POINT (450323 6405020)",
              WGS84: "POINT (14.164573803237401 57.784457724561484)"
            },
            LocationSignature: "Jö"
          },
          {
            AdvertisedShortLocationName: "Kilsmo",
            Geometry: {
              SWEREF99TM: "POINT (530716 6547490)",
              WGS84: "POINT (15.535659066749187 59.065691496941184)"
            },
            LocationSignature: "Km"
          },
          {
            AdvertisedShortLocationName: "Järlövsby",
            Geometry: {
              SWEREF99TM: "POINT (340925 6351474)",
              WGS84: "POINT (12.361260522865766 57.278530771755086)"
            },
            LocationSignature: "Jäy"
          },
          {
            AdvertisedShortLocationName: "Köping",
            Geometry: {
              SWEREF99TM: "POINT (556979 6596853)",
              WGS84: "POINT (16.006600833998384 59.506216239624543)"
            },
            LocationSignature: "Kp"
          },
          {
            AdvertisedShortLocationName: "Knäred",
            Geometry: {
              SWEREF99TM: "POINT (396105 6264736)",
              WGS84: "POINT (13.311517384744116 56.515529657673824)"
            },
            LocationSignature: "Knä"
          },
          {
            AdvertisedShortLocationName: "Hargshamn",
            Geometry: {
              SWEREF99TM: "POINT (692654 6675321)",
              WGS84: "POINT (18.472778177759761 60.169190338454172)"
            },
            LocationSignature: "Hrm"
          },
          {
            AdvertisedShortLocationName: "Harrträsk",
            Geometry: {
              SWEREF99TM: "POINT (748528 7446533)",
              WGS84: "POINT (20.714304373794427 67.033456458347345)"
            },
            LocationSignature: "Hrt"
          },
          {
            AdvertisedShortLocationName: "Kolsnäs",
            Geometry: {
              SWEREF99TM: "POINT (395770 6633471)",
              WGS84: "POINT (13.140935206771791 59.825780019129432)"
            },
            LocationSignature: "Kns"
          },
          {
            AdvertisedShortLocationName: "Kramfors",
            Geometry: {
              SWEREF99TM: "POINT (641034 6980726)",
              WGS84: "POINT (17.778236851831927 62.929016125719471)"
            },
            LocationSignature: "Krf"
          },
          {
            AdvertisedShortLocationName: "Killeberg",
            Geometry: {
              SWEREF99TM: "POINT (444465 6259294)",
              WGS84: "POINT (14.098457574008762 56.474837457314464)"
            },
            LocationSignature: "Kr"
          },
          {
            AdvertisedShortLocationName: "Krokvik",
            Geometry: {
              SWEREF99TM: "POINT (712244 7543901)",
              WGS84: "POINT (20.066745806229893 67.931227210698083)"
            },
            LocationSignature: "Kv"
          },
          {
            AdvertisedShortLocationName: "Kolbäck",
            Geometry: {
              SWEREF99TM: "POINT (569699 6603534)",
              WGS84: "POINT (16.233449467265874 59.564275069377089)"
            },
            LocationSignature: "Kbä"
          },
          {
            AdvertisedShortLocationName: "Kaisepakte",
            Geometry: {
              SWEREF99TM: "POINT (677558 7580915)",
              WGS84: "POINT (19.303326637189404 68.28568779451966)"
            },
            LocationSignature: "Kpe"
          },
          {
            AdvertisedShortLocationName: "Kjula",
            Geometry: {
              SWEREF99TM: "POINT (594508 6578785)",
              WGS84: "POINT (16.661367442087332 59.337252490019715)"
            },
            LocationSignature: "Kju"
          },
          {
            AdvertisedShortLocationName: "Kimstad",
            Geometry: {
              SWEREF99TM: "POINT (556408 6488824)",
              WGS84: "POINT (15.968849425518821 58.53626912152928)"
            },
            LocationSignature: "Kms"
          },
          {
            AdvertisedShortLocationName: "Kolforsen",
            Geometry: {
              SWEREF99TM: "POINT (600610 6746729)",
              WGS84: "POINT (16.851236210048064 60.843082816771322)"
            },
            LocationSignature: "Kfn"
          },
          {
            AdvertisedShortLocationName: "Kiruna",
            Geometry: {
              SWEREF99TM: "POINT (718373 7537363)",
              WGS84: "POINT (20.1992306127494 67.8682632052675)"
            },
            LocationSignature: "Kmb"
          },
          {
            AdvertisedShortLocationName: "Karungi",
            Geometry: {
              SWEREF99TM: "POINT (904687 7353164)",
              WGS84: "POINT (23.954363857711829 66.0383797931731)"
            },
            LocationSignature: "Kri"
          },
          {
            AdvertisedShortLocationName: "Kågeröd",
            Geometry: {
              SWEREF99TM: "POINT (380446 6207369)",
              WGS84: "POINT (13.083112031626204 55.996686652897679)"
            },
            LocationSignature: "Kd"
          },
          {
            AdvertisedShortLocationName: "Krokom",
            Geometry: {
              SWEREF99TM: "POINT (472351 7022028)",
              WGS84: "POINT (14.447974669029959 63.325972693490989)"
            },
            LocationSignature: "Krm"
          },
          {
            AdvertisedShortLocationName: "Kolke",
            Geometry: {
              SWEREF99TM: "POINT (627013 6548663)",
              WGS84: "POINT (17.214767447065974 59.058419572652227)"
            },
            LocationSignature: "Koe"
          },
          {
            AdvertisedShortLocationName: "Katterjåkk",
            Geometry: {
              SWEREF99TM: "POINT (629691 7593037)",
              WGS84: "POINT (18.1608491256631 68.420157625963412)"
            },
            LocationSignature: "Kjå"
          },
          {
            AdvertisedShortLocationName: "Kosjärv",
            Geometry: {
              SWEREF99TM: "POINT (856109 7334546)",
              WGS84: "POINT (22.841449556609522 65.931275670280826)"
            },
            LocationSignature: "Koj"
          },
          {
            AdvertisedShortLocationName: "Kävlinge",
            Geometry: {
              SWEREF99TM: "POINT (381594 6184822)",
              WGS84: "POINT (13.111371846927003 55.794495009726425)"
            },
            LocationSignature: "Kg"
          },
          {
            AdvertisedShortLocationName: "Krigslida",
            Geometry: {
              SWEREF99TM: "POINT (675527 6556210)",
              WGS84: "POINT (18.0655526617058 59.108906680414336)"
            },
            LocationSignature: "Kda"
          },
          {
            AdvertisedShortLocationName: "Kopparåsen",
            Geometry: {
              SWEREF99TM: "POINT (643704 7594479)",
              WGS84: "POINT (18.503618022578504 68.426275511047692)"
            },
            LocationSignature: "Kå"
          },
          {
            AdvertisedShortLocationName: "Koskivaara",
            Geometry: {
              SWEREF99TM: "POINT (764359 7404992)",
              WGS84: "POINT (20.984461450548906 66.6494408216348)"
            },
            LocationSignature: "Kva"
          },
          {
            AdvertisedShortLocationName: "Kummelby",
            Geometry: {
              SWEREF99TM: "POINT (667775 6590278)",
              WGS84: "POINT (17.956751377736484 59.417567471474861)"
            },
            LocationSignature: "Kmy"
          },
          {
            AdvertisedShortLocationName: "Krampen",
            Geometry: {
              SWEREF99TM: "POINT (532583 6622880)",
              WGS84: "POINT (15.579665070593638 59.742527515817947)"
            },
            LocationSignature: "Krn"
          },
          {
            AdvertisedShortLocationName: "Kringlan",
            Geometry: {
              SWEREF99TM: "POINT (611248 6760738)",
              WGS84: "POINT (17.054911853502329 60.965938853724516)"
            },
            LocationSignature: "Krl"
          },
          {
            AdvertisedShortLocationName: "Kåbdalis",
            Geometry: {
              SWEREF99TM: "POINT (724874 7345902)",
              WGS84: "POINT (19.988721994748417 66.152788234036777)"
            },
            LocationSignature: "Kåb"
          },
          {
            AdvertisedShortLocationName: "Kungsgården",
            Geometry: {
              SWEREF99TM: "POINT (588766 6719591)",
              WGS84: "POINT (16.621094279450368 60.602352108033656)"
            },
            LocationSignature: "Kgd"
          },
          {
            AdvertisedShortLocationName: "Käppsta",
            Geometry: {
              SWEREF99TM: "POINT (497674 6595631)",
              WGS84: "POINT (14.958918159818175 59.499109389373224)"
            },
            LocationSignature: "Käp"
          },
          {
            AdvertisedShortLocationName: "Kvillsfors",
            Geometry: {
              SWEREF99TM: "POINT (529786 6362386)",
              WGS84: "POINT (15.495698364997274 57.403269458338507)"
            },
            LocationSignature: "Kvf"
          },
          {
            AdvertisedShortLocationName: "Krokom OJ",
            Geometry: {
              SWEREF99TM: "POINT (470596 7023439)",
              WGS84: "POINT (14.412679357006242 63.338495653369627)"
            },
            LocationSignature: "Kroj"
          },
          {
            AdvertisedShortLocationName: "Kärrgruvan",
            Geometry: {
              SWEREF99TM: "POINT (552029 6662710)",
              WGS84: "POINT (15.935585899287529 60.098147575506637)"
            },
            LocationSignature: "Kär"
          },
          {
            AdvertisedShortLocationName: "Kumla",
            Geometry: {
              SWEREF99TM: "POINT (508068 6554263)",
              WGS84: "POINT (15.140951223316394 59.127546042686383)"
            },
            LocationSignature: "Kla"
          },
          {
            AdvertisedShortLocationName: "Klippan",
            Geometry: {
              SWEREF99TM: "POINT (383776 6222200)",
              WGS84: "POINT (13.130034381042627 56.130688347394177)"
            },
            LocationSignature: "Kl"
          },
          {
            AdvertisedShortLocationName: "Köpingebro",
            Geometry: {
              SWEREF99TM: "POINT (429559 6147588)",
              WGS84: "POINT (13.885748407455768 55.469363056493911)"
            },
            LocationSignature: "Köp"
          },
          {
            AdvertisedShortLocationName: "Knivsta",
            Geometry: {
              SWEREF99TM: "POINT (656714 6624124)",
              WGS84: "POINT (17.78709920918859 59.725408895627695)"
            },
            LocationSignature: "Kn"
          },
          {
            AdvertisedShortLocationName: "Klevshult",
            Geometry: {
              SWEREF99TM: "POINT (445683 6356882)",
              WGS84: "POINT (14.097317115427749 57.351566061710287)"
            },
            LocationSignature: "Kvh"
          },
          {
            AdvertisedShortLocationName: "Kolmården",
            Geometry: {
              SWEREF99TM: "POINT (579014 6504633)",
              WGS84: "POINT (16.362527356141097 58.674698187520086)"
            },
            LocationSignature: "Kon"
          },
          {
            AdvertisedShortLocationName: "Luleå",
            Geometry: {
              SWEREF99TM: "POINT (829942 7292372)",
              WGS84: "POINT (22.165607454087375 65.584085923056)"
            },
            LocationSignature: "Le"
          },
          {
            AdvertisedShortLocationName: "Lingbo",
            Geometry: {
              SWEREF99TM: "POINT (590340 6768947)",
              WGS84: "POINT (16.67279774440863 61.044939674824505)"
            },
            LocationSignature: "Lb"
          },
          {
            AdvertisedShortLocationName: "Krökesbo",
            Geometry: {
              SWEREF99TM: "POINT (470397 6396213)",
              WGS84: "POINT (14.503228032672014 57.707127518135877)"
            },
            LocationSignature: "Kröb"
          },
          {
            AdvertisedShortLocationName: "Karsbäcken",
            Geometry: {
              SWEREF99TM: "POINT (736257 7206968)",
              WGS84: "POINT (19.995986234893046 64.902890794861648)"
            },
            LocationSignature: "Krb"
          },
          {
            AdvertisedShortLocationName: "Leksboda",
            Geometry: {
              SWEREF99TM: "POINT (501101 6737903)",
              WGS84: "POINT (15.020214726665829 60.776585375480018)"
            },
            LocationSignature: "Lea"
          },
          {
            AdvertisedShortLocationName: "Kungsör",
            Geometry: {
              SWEREF99TM: "POINT (562586 6588208)",
              WGS84: "POINT (16.103102241021354 59.427798914452396)"
            },
            LocationSignature: "Kör"
          },
          {
            AdvertisedShortLocationName: "Kragenäs",
            Geometry: {
              SWEREF99TM: "POINT (283547 6523700)",
              WGS84: "POINT (11.253071810027308 58.798747831794159)"
            },
            LocationSignature: "Kgs"
          },
          {
            AdvertisedShortLocationName: "Kälvattnet",
            Geometry: {
              SWEREF99TM: "POINT (648616 7036003)",
              WGS84: "POINT (17.977831370233577 63.421456162020462)"
            },
            LocationSignature: "Käv"
          },
          {
            AdvertisedShortLocationName: "Könsa",
            Geometry: {
              SWEREF99TM: "POINT (709273 7036014)",
              WGS84: "POINT (19.189901265604938 63.391124292309911)"
            },
            LocationSignature: "Köa"
          },
          {
            AdvertisedShortLocationName: "Källeryd",
            Geometry: {
              SWEREF99TM: "POINT (393573 6442898)",
              WGS84: "POINT (13.193576752434629 58.114637794359638)"
            },
            LocationSignature: "Kä"
          },
          {
            AdvertisedShortLocationName: "Kvidinge",
            Geometry: {
              SWEREF99TM: "POINT (378583 6223070)",
              WGS84: "POINT (13.046139823249574 56.137208176824466)"
            },
            LocationSignature: "Kvi"
          },
          {
            AdvertisedShortLocationName: "Klockarbäcken",
            Geometry: {
              SWEREF99TM: "POINT (752596 7091179)",
              WGS84: "POINT (20.142122029318742 63.8562358954284)"
            },
            LocationSignature: "Klbn"
          },
          {
            AdvertisedShortLocationName: "Lekarekulle",
            Geometry: {
              SWEREF99TM: "POINT (328890 6365992)",
              WGS84: "POINT (12.151821057868393 57.40443993447667)"
            },
            LocationSignature: "Lek"
          },
          {
            AdvertisedShortLocationName: "Lindesberg",
            Geometry: {
              SWEREF99TM: "POINT (512909 6606277)",
              WGS84: "POINT (15.228644833766962 59.594516220061081)"
            },
            LocationSignature: "Ld"
          },
          {
            AdvertisedShortLocationName: "Karlskoga centrum",
            Geometry: {
              SWEREF99TM: "POINT (472847 6576320)",
              WGS84: "POINT (14.522877800385857 59.324828459403641)"
            },
            LocationSignature: "Ksac"
          },
          {
            AdvertisedShortLocationName: "Långbron",
            Geometry: {
              SWEREF99TM: "POINT (343465 6536160)",
              WGS84: "POINT (12.279924112504045 58.936454597570972)"
            },
            LocationSignature: "Lgb"
          },
          {
            AdvertisedShortLocationName: "Välsviken",
            Geometry: {
              SWEREF99TM: "POINT (419467 6584464)",
              WGS84: "POINT (13.582080627872887 59.391133638116976)"
            },
            LocationSignature: "Kvä"
          },
          {
            AdvertisedShortLocationName: "Ljungskile",
            Geometry: {
              SWEREF99TM: "POINT (319184 6457866)",
              WGS84: "POINT (11.921011541713993 58.224763638591838)"
            },
            LocationSignature: "Lj"
          },
          {
            AdvertisedShortLocationName: "Karlshamn",
            Geometry: {
              SWEREF99TM: "POINT (491705 6225803)",
              WGS84: "POINT (14.866386893161888 56.17713901903182)"
            },
            LocationSignature: "Kh"
          },
          {
            AdvertisedShortLocationName: "Kärreberga",
            Geometry: {
              SWEREF99TM: "POINT (374692 6223310)",
              WGS84: "POINT (12.983455452642477 56.138357587916126)"
            },
            LocationSignature: "Käb"
          },
          {
            AdvertisedShortLocationName: "Lene",
            Geometry: {
              SWEREF99TM: "POINT (393749 6602142)",
              WGS84: "POINT (13.120728427445593 59.544093899306468)"
            },
            LocationSignature: "Len"
          },
          {
            AdvertisedShortLocationName: "Kallholsfors",
            Geometry: {
              SWEREF99TM: "POINT (484088 6781466)",
              WGS84: "POINT (14.704242866061014 61.167370092516506)"
            },
            LocationSignature: "Klh"
          },
          {
            AdvertisedShortLocationName: "Karlstad",
            Geometry: {
              SWEREF99TM: "POINT (414717 6583093)",
              WGS84: "POINT (13.499025373646646 59.37789093051029)"
            },
            LocationSignature: "Ks"
          },
          {
            AdvertisedShortLocationName: "Ljung",
            Geometry: {
              SWEREF99TM: "POINT (384899 6428860)",
              WGS84: "POINT (13.053311259954258 57.986451559040695)"
            },
            LocationSignature: "Lju"
          },
          {
            AdvertisedShortLocationName: "Lidlund",
            Geometry: {
              SWEREF99TM: "POINT (736945 7215890)",
              WGS84: "POINT (20.025426640807943 64.982152229470486)"
            },
            LocationSignature: "Ldl"
          },
          {
            AdvertisedShortLocationName: "Källene",
            Geometry: {
              SWEREF99TM: "POINT (607915 6801604)",
              WGS84: "POINT (17.016655515359567 61.333521190825053)"
            },
            LocationSignature: "Käe"
          },
          {
            AdvertisedShortLocationName: "Karlsberg",
            Geometry: {
              SWEREF99TM: "POINT (532519 6979213)",
              WGS84: "POINT (15.640723249514275 62.9413180839135)"
            },
            LocationSignature: "Ksg"
          },
          {
            AdvertisedShortLocationName: "Kvarnsjö",
            Geometry: {
              SWEREF99TM: "POINT (467744 6937384)",
              WGS84: "POINT (14.37248290236932 62.565923875357832)"
            },
            LocationSignature: "Kvö"
          },
          {
            AdvertisedShortLocationName: "Källby",
            Geometry: {
              SWEREF99TM: "POINT (401065 6486806)",
              WGS84: "POINT (13.301883886978413 58.510568828118473)"
            },
            LocationSignature: "Kll"
          },
          {
            AdvertisedShortLocationName: "Lödöse Södra",
            Geometry: {
              SWEREF99TM: "POINT (332521 6433853)",
              WGS84: "POINT (12.164954942020112 58.014616201580857)"
            },
            LocationSignature: "Les"
          },
          {
            AdvertisedShortLocationName: "Lilla Edet",
            Geometry: {
              SWEREF99TM: "POINT (330763 6446993)",
              WGS84: "POINT (12.125774004499059 58.131825080854981)"
            },
            LocationSignature: "Let"
          },
          {
            AdvertisedShortLocationName: "Linghem",
            Geometry: {
              SWEREF99TM: "POINT (545842 6477552)",
              WGS84: "POINT (15.785130833051785 58.436281219313038)"
            },
            LocationSignature: "Lgm"
          },
          {
            AdvertisedShortLocationName: "Ludvika",
            Geometry: {
              SWEREF99TM: "POINT (510133 6668117)",
              WGS84: "POINT (15.182493903383179 60.14987846259443)"
            },
            LocationSignature: "La"
          },
          {
            AdvertisedShortLocationName: "Kalixfors",
            Geometry: {
              SWEREF99TM: "POINT (719953 7523307)",
              WGS84: "POINT (20.20855464388276 67.741516915374135)"
            },
            LocationSignature: "Kx"
          },
          {
            AdvertisedShortLocationName: "Kistinge",
            Geometry: {
              SWEREF99TM: "POINT (372066 6279096)",
              WGS84: "POINT (12.914015225466486 56.638535427664188)"
            },
            LocationSignature: "Kst"
          },
          {
            AdvertisedShortLocationName: "Lappberg",
            Geometry: {
              SWEREF99TM: "POINT (720817 7506749)",
              WGS84: "POINT (20.196095798107997 67.592958618876878)"
            },
            LocationSignature: "Lab"
          },
          {
            AdvertisedShortLocationName: "Ledsgård",
            Geometry: {
              SWEREF99TM: "POINT (326131 6379945)",
              WGS84: "POINT (12.096045032283371 57.528570825844128)"
            },
            LocationSignature: "Lgd"
          },
          {
            AdvertisedShortLocationName: "Läggesta",
            Geometry: {
              SWEREF99TM: "POINT (623710 6569630)",
              WGS84: "POINT (17.169099180406807 59.24754847952218)"
            },
            LocationSignature: "Lg"
          },
          {
            AdvertisedShortLocationName: "Kungsängen",
            Geometry: {
              SWEREF99TM: "POINT (655929 6596521)",
              WGS84: "POINT (17.752825186759477 59.478122751421949)"
            },
            LocationSignature: "Kän"
          },
          {
            AdvertisedShortLocationName: "Ljungaverks lastplats",
            Geometry: {
              SWEREF99TM: "POINT (555556 6929917)",
              WGS84: "POINT (16.078300553628065 62.496145869371233)"
            },
            LocationSignature: "Ljun"
          },
          {
            AdvertisedShortLocationName: "Lidköping",
            Geometry: {
              SWEREF99TM: "POINT (393078 6486328)",
              WGS84: "POINT (13.165097294639642 58.50439218701964)"
            },
            LocationSignature: "Lkp"
          },
          {
            AdvertisedShortLocationName: "Lindome",
            Geometry: {
              SWEREF99TM: "POINT (325322 6385270)",
              WGS84: "POINT (12.078728825970762 57.576030236784568)"
            },
            LocationSignature: "Ldo"
          },
          {
            AdvertisedShortLocationName: "Löcknamon",
            Geometry: {
              SWEREF99TM: "POINT (504102.7 6530408.6)",
              WGS84: "POINT (15.07123172663151 58.9133756901394)"
            },
            LocationSignature: "Lmo"
          },
          {
            AdvertisedShortLocationName: "Ljungaverk",
            Geometry: {
              SWEREF99TM: "POINT (554997 6929845)",
              WGS84: "POINT (16.067429944561987 62.495583045420389)"
            },
            LocationSignature: "Ljv"
          },
          {
            AdvertisedShortLocationName: "Kvicksund",
            Geometry: {
              SWEREF99TM: "POINT (574877 6590991)",
              WGS84: "POINT (16.320647961765943 59.450774679861105)"
            },
            LocationSignature: "Ksus"
          },
          {
            AdvertisedShortLocationName: "Kvicksund",
            Geometry: {
              SWEREF99TM: "POINT (574227 6591798)",
              WGS84: "POINT (16.309467156943033 59.458135010904464)"
            },
            LocationSignature: "Ksu"
          },
          {
            AdvertisedShortLocationName: "Arbrå",
            Geometry: {
              SWEREF99TM: "POINT (573518 6816033)",
              WGS84: "POINT (16.37983461815908 61.471034792465439)"
            },
            LocationSignature: "Ab"
          },
          {
            AdvertisedShortLocationName: "Lästringe",
            Geometry: {
              SWEREF99TM: "POINT (634168 6528482)",
              WGS84: "POINT (17.327172745542079 58.875140834592493)"
            },
            LocationSignature: "Lre"
          },
          {
            AdvertisedShortLocationName: "Lomselenäs",
            Geometry: {
              SWEREF99TM: "POINT (623758 7235074)",
              WGS84: "POINT (17.64635087566668 65.215559314137451)"
            },
            LocationSignature: "Lms"
          },
          {
            AdvertisedShortLocationName: "Laholm",
            Geometry: {
              SWEREF99TM: "POINT (376859 6263823)",
              WGS84: "POINT (12.999365652360769 56.502689716254892)"
            },
            LocationSignature: "Laov"
          },
          {
            AdvertisedShortLocationName: "Lakaträsk",
            Geometry: {
              SWEREF99TM: "POINT (774653 7364056)",
              WGS84: "POINT (21.1253368971514 66.275319899543845)"
            },
            LocationSignature: "Lkä"
          },
          {
            AdvertisedShortLocationName: "Loka",
            Geometry: {
              SWEREF99TM: "POINT (470058 6611044)",
              WGS84: "POINT (14.469001657209652 59.636447340123837)"
            },
            LocationSignature: "Loka"
          },
          {
            AdvertisedShortLocationName: "Kälarne",
            Geometry: {
              SWEREF99TM: "POINT (554902 6983894)",
              WGS84: "POINT (16.083214449312543 62.980635183759375)"
            },
            LocationSignature: "Kln"
          },
          {
            AdvertisedShortLocationName: "Lammhult",
            Geometry: {
              SWEREF99TM: "POINT (474943 6336592)",
              WGS84: "POINT (14.585611240196648 57.17185120494095)"
            },
            LocationSignature: "Lh"
          },
          {
            AdvertisedShortLocationName: "Karsjö",
            Geometry: {
              SWEREF99TM: "POINT (566851 6834750)",
              WGS84: "POINT (16.261541594724129 61.64022873655604)"
            },
            LocationSignature: "Ksö"
          },
          {
            AdvertisedShortLocationName: "Laduberg",
            Geometry: {
              SWEREF99TM: "POINT (779976 7302528)",
              WGS84: "POINT (21.109971503157226 65.721809987538663)"
            },
            LocationSignature: "Lrg"
          },
          {
            AdvertisedShortLocationName: "Lomsmyren",
            Geometry: {
              SWEREF99TM: "POINT (473581 6760954)",
              WGS84: "POINT (14.511798735402813 60.982656672145517)"
            },
            LocationSignature: "Lom"
          },
          {
            AdvertisedShortLocationName: "Landskrona",
            Geometry: {
              SWEREF99TM: "POINT (365963 6194698)",
              WGS84: "POINT (12.857361724508854 55.879090392729772)"
            },
            LocationSignature: "Lkö"
          },
          {
            AdvertisedShortLocationName: "Lockarp",
            Geometry: {
              SWEREF99TM: "POINT (376395 6157429)",
              WGS84: "POINT (13.040833647616296 55.547200856290793)"
            },
            LocationSignature: "Lrp"
          },
          {
            AdvertisedShortLocationName: "Loster",
            Geometry: {
              SWEREF99TM: "POINT (549810 6867799)",
              WGS84: "POINT (15.949125921882592 61.939450688122385)"
            },
            LocationSignature: "Ltr"
          },
          {
            AdvertisedShortLocationName: "Kapellet",
            Geometry: {
              SWEREF99TM: "POINT (476633 6584895)",
              WGS84: "POINT (14.588470640783209 59.402057702242516)"
            },
            LocationSignature: "Kt"
          },
          {
            AdvertisedShortLocationName: "Lund",
            Geometry: {
              SWEREF99TM: "POINT (386054 6174988)",
              WGS84: "POINT (13.186572717507945 55.707249580242149)"
            },
            LocationSignature: "Lu"
          },
          {
            AdvertisedShortLocationName: "Lerot",
            Geometry: {
              SWEREF99TM: "POINT (352165 6635038)",
              WGS84: "POINT (12.362895152693865 59.826561911937972)"
            },
            LocationSignature: "Lrt"
          },
          {
            AdvertisedShortLocationName: "Koler",
            Geometry: {
              SWEREF99TM: "POINT (753975 7274801)",
              WGS84: "POINT (20.493215539697424 65.4957903098796)"
            },
            LocationSignature: "Klr"
          },
          {
            AdvertisedShortLocationName: "Lillhamra",
            Geometry: {
              SWEREF99TM: "POINT (489183 6834274)",
              WGS84: "POINT (14.795872653513184 61.641617642111058)"
            },
            LocationSignature: "Lhr"
          },
          {
            AdvertisedShortLocationName: "Kaitum",
            Geometry: {
              SWEREF99TM: "POINT (717342 7500820)",
              WGS84: "POINT (20.103269081398903 67.54257739184348)"
            },
            LocationSignature: "Ktm"
          },
          {
            AdvertisedShortLocationName: "Lernacken",
            Geometry: {
              SWEREF99TM: "POINT (367921 6159727)",
              WGS84: "POINT (12.905518439114443 55.565615952562361)"
            },
            LocationSignature: "Lnk"
          },
          {
            AdvertisedShortLocationName: "Linddalen",
            Geometry: {
              SWEREF99TM: "POINT (486737 6541344)",
              WGS84: "POINT (14.769071065718263 59.01139705517916)"
            },
            LocationSignature: "Lln"
          },
          {
            AdvertisedShortLocationName: "Lökom",
            Geometry: {
              SWEREF99TM: "POINT (631012 7006651)",
              WGS84: "POINT (17.601723770877062 63.16520546865781)"
            },
            LocationSignature: "Lkm"
          },
          {
            AdvertisedShortLocationName: "Lillaryd",
            Geometry: {
              SWEREF99TM: "POINT (398263 6222197)",
              WGS84: "POINT (13.363006759579795 56.133968485499665)"
            },
            LocationSignature: "Lia"
          },
          {
            AdvertisedShortLocationName: "Lottefors",
            Geometry: {
              SWEREF99TM: "POINT (575330 6810404)",
              WGS84: "POINT (16.41154554725869 61.420168480799155)"
            },
            LocationSignature: "Lot"
          },
          {
            AdvertisedShortLocationName: "Lindekullen",
            Geometry: {
              SWEREF99TM: "POINT (505626 6457138)",
              WGS84: "POINT (15.095863039689155 58.255299332993708)"
            },
            LocationSignature: "Lkn"
          },
          {
            AdvertisedShortLocationName: "Lundby",
            Geometry: {
              SWEREF99TM: "POINT (608637 6614522)",
              WGS84: "POINT (16.927798317305335 59.654588773898396)"
            },
            LocationSignature: "Lub"
          },
          {
            AdvertisedShortLocationName: "Kilafors",
            Geometry: {
              SWEREF99TM: "POINT (584314 6789496)",
              WGS84: "POINT (16.570398807482391 61.230689785956244)"
            },
            LocationSignature: "Kls"
          },
          {
            AdvertisedShortLocationName: "Linköping",
            Geometry: {
              SWEREF99TM: "POINT (536474 6475311)",
              WGS84: "POINT (15.624342206193218 58.41703698401011)"
            },
            LocationSignature: "Lp"
          },
          {
            AdvertisedShortLocationName: "Ljusdal",
            Geometry: {
              SWEREF99TM: "POINT (557756 6855374)",
              WGS84: "POINT (16.096509755425156 61.826809489801718)"
            },
            LocationSignature: "Ls"
          },
          {
            AdvertisedShortLocationName: "Lerum",
            Geometry: {
              SWEREF99TM: "POINT (337789 6406304)",
              WGS84: "POINT (12.272803985862398 57.769401630605834)"
            },
            LocationSignature: "Lr"
          },
          {
            AdvertisedShortLocationName: "Låktatjåkka",
            Geometry: {
              SWEREF99TM: "POINT (636389 7593784)",
              WGS84: "POINT (18.324742210763095 68.423686605014609)"
            },
            LocationSignature: "Låk"
          },
          {
            AdvertisedShortLocationName: "Lappträsk",
            Geometry: {
              SWEREF99TM: "POINT (884931 7349816)",
              WGS84: "POINT (23.513274097321137 66.033284719369348)"
            },
            LocationSignature: "Lpk"
          },
          {
            AdvertisedShortLocationName: "Liljeholmen",
            Geometry: {
              SWEREF99TM: "POINT (672275 6578362)",
              WGS84: "POINT (18.026391864198825 59.308891397088743)"
            },
            LocationSignature: "Lm"
          },
          {
            AdvertisedShortLocationName: "Leksand",
            Geometry: {
              SWEREF99TM: "POINT (500164 6733163)",
              WGS84: "POINT (15.003007122656749 60.734030025848988)"
            },
            LocationSignature: "Lsd"
          },
          {
            AdvertisedShortLocationName: "Långvattnet",
            Geometry: {
              SWEREF99TM: "POINT (684688 7063724)",
              WGS84: "POINT (18.731308225580943 63.652859421080926)"
            },
            LocationSignature: "Lnv"
          },
          {
            AdvertisedShortLocationName: "Korsträsk",
            Geometry: {
              SWEREF99TM: "POINT (769352 7295111)",
              WGS84: "POINT (20.86457954292862 65.664688993400361)"
            },
            LocationSignature: "Ktä"
          },
          {
            AdvertisedShortLocationName: "Klingerud",
            Geometry: {
              SWEREF99TM: "POINT (407153.8 6595017.9)",
              WGS84: "POINT (13.360805222677534 59.4833346179173)"
            },
            LocationSignature: "Kud"
          },
          {
            AdvertisedShortLocationName: "Limmared",
            Geometry: {
              SWEREF99TM: "POINT (401424 6378024)",
              WGS84: "POINT (13.353545134666659 57.533982340565743)"
            },
            LocationSignature: "Lme"
          },
          {
            AdvertisedShortLocationName: "Ljusne bruk",
            Geometry: {
              SWEREF99TM: "POINT (613681 6788810)",
              WGS84: "POINT (17.116579938988806 61.21710028836408)"
            },
            LocationSignature: "Lsb"
          },
          {
            AdvertisedShortLocationName: "Lidnäs",
            Geometry: {
              SWEREF99TM: "POINT (475762 6325262)",
              WGS84: "POINT (14.600253224808421 57.070116727083935)"
            },
            LocationSignature: "Lns"
          },
          {
            AdvertisedShortLocationName: "Lunnarp",
            Geometry: {
              SWEREF99TM: "POINT (439551 6155422)",
              WGS84: "POINT (14.042069931219482 55.5410833838634)"
            },
            LocationSignature: "Lup"
          },
          {
            AdvertisedShortLocationName: "Lörstrand",
            Geometry: {
              SWEREF99TM: "POINT (561723 6836724)",
              WGS84: "POINT (16.165462823026107 61.658803428126816)"
            },
            LocationSignature: "Lö"
          },
          {
            AdvertisedShortLocationName: "Kilvo",
            Geometry: {
              SWEREF99TM: "POINT (758491 7424764)",
              WGS84: "POINT (20.894671777799616 66.830862448885469)"
            },
            LocationSignature: "Klv"
          },
          {
            AdvertisedShortLocationName: "Linaälv",
            Geometry: {
              SWEREF99TM: "POINT (725813 7469537)",
              WGS84: "POINT (20.239292040970703 67.256788503233778)"
            },
            LocationSignature: "Lin"
          },
          {
            AdvertisedShortLocationName: "Landeryd",
            Geometry: {
              SWEREF99TM: "POINT (394862 6327263)",
              WGS84: "POINT (13.265593771416139 57.076728966504604)"
            },
            LocationSignature: "Lrd"
          },
          {
            AdvertisedShortLocationName: "Lemmeströ",
            Geometry: {
              SWEREF99TM: "POINT (396620 6150716)",
              WGS84: "POINT (13.363747729870992 55.491609387079478)"
            },
            LocationSignature: "Lmm"
          },
          {
            AdvertisedShortLocationName: "Malmö",
            Geometry: {
              SWEREF99TM: "POINT (374034 6164458)",
              WGS84: "POINT (13.000229772341523 55.609718195959864)"
            },
            LocationSignature: "M"
          },
          {
            AdvertisedShortLocationName: "Liseberg",
            Geometry: {
              SWEREF99TM: "POINT (321028 6399222)",
              WGS84: "POINT (11.996703861193009 57.699503830141161)"
            },
            LocationSignature: "Lis"
          },
          {
            AdvertisedShortLocationName: "Lövberga",
            Geometry: {
              SWEREF99TM: "POINT (541750 7092978)",
              WGS84: "POINT (15.852410668022923 63.961275095354168)"
            },
            LocationSignature: "Löb"
          },
          {
            AdvertisedShortLocationName: "Ljusne",
            Geometry: {
              SWEREF99TM: "POINT (613443 6788302)",
              WGS84: "POINT (17.111846833114104 61.212611848468164)"
            },
            LocationSignature: "Lse"
          },
          {
            AdvertisedShortLocationName: "Långviksmon",
            Geometry: {
              SWEREF99TM: "POINT (682899 7061453)",
              WGS84: "POINT (18.692608540783947 63.633452548240143)"
            },
            LocationSignature: "Lmn"
          },
          {
            AdvertisedShortLocationName: "Lovene",
            Geometry: {
              SWEREF99TM: "POINT (385964 6479380)",
              WGS84: "POINT (13.046556427646616 58.440223450417044)"
            },
            LocationSignature: "Lve"
          },
          {
            AdvertisedShortLocationName: "Munkedals nedre",
            Geometry: {
              SWEREF99TM: "POINT (306282 6485287)",
              WGS84: "POINT (11.67869862022587 58.465156712510705)"
            },
            LocationSignature: "Mkln"
          },
          {
            AdvertisedShortLocationName: "Mellerud",
            Geometry: {
              SWEREF99TM: "POINT (353111 6509629)",
              WGS84: "POINT (12.464787660936478 58.701830658869376)"
            },
            LocationSignature: "Ml"
          },
          {
            AdvertisedShortLocationName: "Lessebo",
            Geometry: {
              SWEREF99TM: "POINT (515810 6289650)",
              WGS84: "POINT (15.25852918518695 56.750561692930205)"
            },
            LocationSignature: "Lo"
          },
          {
            AdvertisedShortLocationName: "Hede",
            Geometry: {
              SWEREF99TM: "POINT (325363 6378367)",
              WGS84: "POINT (12.084367544924559 57.51411892022103)"
            },
            LocationSignature: "Khe"
          },
          {
            AdvertisedShortLocationName: "Lövliden",
            Geometry: {
              SWEREF99TM: "POINT (577008 7170928)",
              WGS84: "POINT (16.612365054050933 64.654486299385184)"
            },
            LocationSignature: "Lvd"
          },
          {
            AdvertisedShortLocationName: "Mattmar",
            Geometry: {
              SWEREF99TM: "POINT (441364 7019919)",
              WGS84: "POINT (13.83018646209759 63.303313058289937)"
            },
            LocationSignature: "Ma"
          },
          {
            AdvertisedShortLocationName: "Klenshyttan",
            Geometry: {
              SWEREF99TM: "POINT (505800 6663429)",
              WGS84: "POINT (15.10432409108706 60.107869077738073)"
            },
            LocationSignature: "Khy"
          },
          {
            AdvertisedShortLocationName: "Lit",
            Geometry: {
              SWEREF99TM: "POINT (492822 7021073)",
              WGS84: "POINT (14.856726738942109 63.318397912399782)"
            },
            LocationSignature: "Lit"
          },
          {
            AdvertisedShortLocationName: "Mockfjärd",
            Geometry: {
              SWEREF99TM: "POINT (497713 6706629)",
              WGS84: "POINT (14.958373542671264 60.495790026339314)"
            },
            LocationSignature: "Mfj"
          },
          {
            AdvertisedShortLocationName: "Munkflohögen",
            Geometry: {
              SWEREF99TM: "POINT (497465 7047996)",
              WGS84: "POINT (14.948973113312919 63.560087366885881)"
            },
            LocationSignature: "Mfn"
          },
          {
            AdvertisedShortLocationName: "Mörrum",
            Geometry: {
              SWEREF99TM: "POINT (484046 6226906)",
              WGS84: "POINT (14.742953091127111 56.186854158959818)"
            },
            LocationSignature: "Mru"
          },
          {
            AdvertisedShortLocationName: "Kristinehamn",
            Geometry: {
              SWEREF99TM: "POINT (449176 6575736)",
              WGS84: "POINT (14.107122447815602 59.317398728690662)"
            },
            LocationSignature: "Khn"
          },
          {
            AdvertisedShortLocationName: "Marma",
            Geometry: {
              SWEREF99TM: "POINT (633551 6708617)",
              WGS84: "POINT (17.430862057574931 60.491503781382292)"
            },
            LocationSignature: "Maa"
          },
          {
            AdvertisedShortLocationName: "Losesjön",
            Geometry: {
              SWEREF99TM: "POINT (606465 6810143)",
              WGS84: "POINT (16.994452277726189 61.410532183753112)"
            },
            LocationSignature: "Lsn"
          },
          {
            AdvertisedShortLocationName: "Långsjön",
            Geometry: {
              SWEREF99TM: "POINT (559798 6717319)",
              WGS84: "POINT (16.091515860617193 60.587321829471385)"
            },
            LocationSignature: "Lsj"
          },
          {
            AdvertisedShortLocationName: "Lugnås",
            Geometry: {
              SWEREF99TM: "POINT (424657 6501175)",
              WGS84: "POINT (13.701910366621059 58.64430358614937)"
            },
            LocationSignature: "Lnå"
          },
          {
            AdvertisedShortLocationName: "Lubboträsk",
            Geometry: {
              SWEREF99TM: "POINT (736093 7168498)",
              WGS84: "POINT (19.929371589616856 64.5591042379907)"
            },
            LocationSignature: "Luä"
          },
          {
            AdvertisedShortLocationName: "Långsele",
            Geometry: {
              SWEREF99TM: "POINT (604062 7006918)",
              WGS84: "POINT (17.067174362704332 63.176391689691471)"
            },
            LocationSignature: "Lsl"
          },
          {
            AdvertisedShortLocationName: "Lönneberga",
            Geometry: {
              SWEREF99TM: "POINT (543090 6379090)",
              WGS84: "POINT (15.720032119609382 57.552240798799332)"
            },
            LocationSignature: "Lön"
          },
          {
            AdvertisedShortLocationName: "Mon",
            Geometry: {
              SWEREF99TM: "POINT (313744 6534426)",
              WGS84: "POINT (11.765799622120207 58.909029551195061)"
            },
            LocationSignature: "Mon"
          },
          {
            AdvertisedShortLocationName: "Maj",
            Geometry: {
              SWEREF99TM: "POINT (624794 6902466)",
              WGS84: "POINT (17.401361601706729 62.233129847039969)"
            },
            LocationSignature: "Maj"
          },
          {
            AdvertisedShortLocationName: "Mellby",
            Geometry: {
              SWEREF99TM: "POINT (421404 6215136)",
              WGS84: "POINT (13.737316751830134 56.074913730396659)"
            },
            LocationSignature: "Mlb"
          },
          {
            AdvertisedShortLocationName: "Mosås",
            Geometry: {
              SWEREF99TM: "POINT (509290 6562086)",
              WGS84: "POINT (15.162633055324918 59.197774650223018)"
            },
            LocationSignature: "Ms"
          },
          {
            AdvertisedShortLocationName: "Meselefors",
            Geometry: {
              SWEREF99TM: "POINT (587441 7147632)",
              WGS84: "POINT (16.816720395920665 64.443007463137093)"
            },
            LocationSignature: "Mlf"
          },
          {
            AdvertisedShortLocationName: "Ljuså",
            Geometry: {
              SWEREF99TM: "POINT (799382 7333226)",
              WGS84: "POINT (21.600351950151708 65.977949187243581)"
            },
            LocationSignature: "Lså"
          },
          {
            AdvertisedShortLocationName: "Munktorp",
            Geometry: {
              SWEREF99TM: "POINT (564142 6599977)",
              WGS84: "POINT (16.134057758303435 59.5332291421602)"
            },
            LocationSignature: "Morp"
          },
          {
            AdvertisedShortLocationName: "Lödöse",
            Geometry: {
              SWEREF99TM: "POINT (331772 6435323)",
              WGS84: "POINT (12.151245118900565 58.027520597627607)"
            },
            LocationSignature: "Löö"
          },
          {
            AdvertisedShortLocationName: "Lycksele industrispår",
            Geometry: {
              SWEREF99TM: "POINT (677053 7167873)",
              WGS84: "POINT (18.699544553980509 64.5895089947838)"
            },
            LocationSignature: "Lsp"
          },
          {
            AdvertisedShortLocationName: "Mönsterås bruk",
            Geometry: {
              SWEREF99TM: "POINT (593151 6327888)",
              WGS84: "POINT (16.5369812274077 57.08492152398162)"
            },
            LocationSignature: "Msb"
          },
          {
            AdvertisedShortLocationName: "Moskosel",
            Geometry: {
              SWEREF99TM: "POINT (701698 7313920)",
              WGS84: "POINT (19.42657862259086 65.882416619896091)"
            },
            LocationSignature: "Mos"
          },
          {
            AdvertisedShortLocationName: "Kallhäll",
            Geometry: {
              SWEREF99TM: "POINT (659134 6593781)",
              WGS84: "POINT (17.8072890439651 59.452344176537892)"
            },
            LocationSignature: "Khä"
          },
          {
            AdvertisedShortLocationName: "Lycksele",
            Geometry: {
              SWEREF99TM: "POINT (675551 7168317)",
              WGS84: "POINT (18.668774252566916 64.594267173154662)"
            },
            LocationSignature: "Ly"
          },
          {
            AdvertisedShortLocationName: "Malungsfors",
            Geometry: {
              SWEREF99TM: "POINT (421248 6734556)",
              WGS84: "POINT (13.555709589330871 60.738761686294389)"
            },
            LocationSignature: "Mfs"
          },
          {
            AdvertisedShortLocationName: "Marieholm",
            Geometry: {
              SWEREF99TM: "POINT (384587 6192570)",
              WGS84: "POINT (13.155793036541002 55.864800018665413)"
            },
            LocationSignature: "Mar"
          },
          {
            AdvertisedShortLocationName: "Mörlunda",
            Geometry: {
              SWEREF99TM: "POINT (552728 6353608)",
              WGS84: "POINT (15.875579276126036 57.322345723543727)"
            },
            LocationSignature: "Möa"
          },
          {
            AdvertisedShortLocationName: "Mellansjö",
            Geometry: {
              SWEREF99TM: "POINT (535372 6908658)",
              WGS84: "POINT (15.68223292664033 62.3078124317795)"
            },
            LocationSignature: "Msö"
          },
          {
            AdvertisedShortLocationName: "Mobodarne",
            Geometry: {
              SWEREF99TM: "POINT (591920 6795285)",
              WGS84: "POINT (16.7148222766878 61.280923412804491)"
            },
            LocationSignature: "Mb"
          },
          {
            AdvertisedShortLocationName: "Lyrestad",
            Geometry: {
              SWEREF99TM: "POINT (445493 6518716)",
              WGS84: "POINT (14.05657579837766 58.804938337974789)"
            },
            LocationSignature: "Lyd"
          },
          {
            AdvertisedShortLocationName: "Malmö godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (377273 6165733)",
              WGS84: "POINT (13.051048595077065 55.621995414730016)"
            },
            LocationSignature: "Mgb"
          },
          {
            AdvertisedShortLocationName: "Mariestad",
            Geometry: {
              SWEREF99TM: "POINT (431970 6508497)",
              WGS84: "POINT (13.825665890319714 58.7112583423946)"
            },
            LocationSignature: "Mst"
          },
          {
            AdvertisedShortLocationName: "Malmsjö",
            Geometry: {
              SWEREF99TM: "POINT (657981 6560482)",
              WGS84: "POINT (17.762635393655522 59.154097629758809)"
            },
            LocationSignature: "Msj"
          },
          {
            AdvertisedShortLocationName: "Lilltjära",
            Geometry: {
              SWEREF99TM: "POINT (586925 6787805)",
              WGS84: "POINT (16.618228181867906 61.214942899639148)"
            },
            LocationSignature: "Ltj"
          },
          {
            AdvertisedShortLocationName: "Lyse",
            Geometry: {
              SWEREF99TM: "POINT (294717 6470098)",
              WGS84: "POINT (11.49439044351098 58.323711594752353)"
            },
            LocationSignature: "Lye"
          },
          {
            AdvertisedShortLocationName: "Malung",
            Geometry: {
              SWEREF99TM: "POINT (429569 6728246)",
              WGS84: "POINT (13.710537534365951 60.6836790391649)"
            },
            LocationSignature: "Mlg"
          },
          {
            AdvertisedShortLocationName: "Motala",
            Geometry: {
              SWEREF99TM: "POINT (502805 6488556)",
              WGS84: "POINT (15.048178636126666 58.537506804953296)"
            },
            LocationSignature: "Mot"
          },
          {
            AdvertisedShortLocationName: "Malung Folkh",
            Geometry: {
              SWEREF99TM: "POINT (430891 6726505)",
              WGS84: "POINT (13.73534726229212 60.668282264804454)"
            },
            LocationSignature: "Mlgf"
          },
          {
            AdvertisedShortLocationName: "Murbergsviken",
            Geometry: {
              SWEREF99TM: "POINT (649988 6950436)",
              WGS84: "POINT (17.9272604938995 62.653926312647535)"
            },
            LocationSignature: "Mbv"
          },
          {
            AdvertisedShortLocationName: "Mantorp",
            Geometry: {
              SWEREF99TM: "POINT (516867 6467490)",
              WGS84: "POINT (15.288154576706267 58.347988802692036)"
            },
            LocationSignature: "Mt"
          },
          {
            AdvertisedShortLocationName: "Långträsk",
            Geometry: {
              SWEREF99TM: "POINT (747853 7261014)",
              WGS84: "POINT (20.336314585176247 65.377355892466554)"
            },
            LocationSignature: "Ltk"
          },
          {
            AdvertisedShortLocationName: "Malung Gymn",
            Geometry: {
              SWEREF99TM: "POINT (430281 6727759)",
              WGS84: "POINT (13.723742277588681 60.679432473036556)"
            },
            LocationSignature: "Mlgg"
          },
          {
            AdvertisedShortLocationName: "Mörtsal",
            Geometry: {
              SWEREF99TM: "POINT (649275 6964742)",
              WGS84: "POINT (17.926030672764377 62.782454793181216)"
            },
            LocationSignature: "Möl"
          },
          {
            AdvertisedShortLocationName: "Medskogsheden",
            Geometry: {
              SWEREF99TM: "POINT (592499 6740732)",
              WGS84: "POINT (16.699216962621506 60.791236233148688)"
            },
            LocationSignature: "Msn"
          },
          {
            AdvertisedShortLocationName: "Lyckselesågen",
            Geometry: {
              SWEREF99TM: "POINT (678416 7168308)",
              WGS84: "POINT (18.728485582053441 64.5926885583373)"
            },
            LocationSignature: "Lyg"
          },
          {
            AdvertisedShortLocationName: "Lysekil",
            Geometry: {
              SWEREF99TM: "POINT (291331 6464930)",
              WGS84: "POINT (11.441354460692812 58.275788656930857)"
            },
            LocationSignature: "Lys"
          },
          {
            AdvertisedShortLocationName: "Malmby",
            Geometry: {
              SWEREF99TM: "POINT (616785 6580147)",
              WGS84: "POINT (17.053451514841651 59.343899341696144)"
            },
            LocationSignature: "Mby"
          },
          {
            AdvertisedShortLocationName: "Mertainen",
            Geometry: {
              SWEREF99TM: "POINT (747384 7518628)",
              WGS84: "POINT (20.843751864641916 67.67781854974298)"
            },
            LocationSignature: "Mtn"
          },
          {
            AdvertisedShortLocationName: "Mellansel",
            Geometry: {
              SWEREF99TM: "POINT (664981 7037563)",
              WGS84: "POINT (18.306727824554549 63.428235435638086)"
            },
            LocationSignature: "Msl"
          },
          {
            AdvertisedShortLocationName: "Maitum",
            Geometry: {
              SWEREF99TM: "POINT (710006 7371304)",
              WGS84: "POINT (19.702541283523509 66.390177293396391)"
            },
            LocationSignature: "Mtm"
          },
          {
            AdvertisedShortLocationName: "Moholm",
            Geometry: {
              SWEREF99TM: "POINT (444231 6496706)",
              WGS84: "POINT (14.040189112219359 58.607131690503714)"
            },
            LocationSignature: "Mh"
          },
          {
            AdvertisedShortLocationName: "Mölltorp",
            Geometry: {
              SWEREF99TM: "POINT (466007 6483807)",
              WGS84: "POINT (14.416862231176792 58.4935389098249)"
            },
            LocationSignature: "Mp"
          },
          {
            AdvertisedShortLocationName: "Myrheden",
            Geometry: {
              SWEREF99TM: "POINT (742990 7251890)",
              WGS84: "POINT (20.215933067309656 65.299485047211462)"
            },
            LocationSignature: "Mhn"
          },
          {
            AdvertisedShortLocationName: "Mellösa",
            Geometry: {
              SWEREF99TM: "POINT (589338 6552325)",
              WGS84: "POINT (16.559647789038589 59.100847589362409)"
            },
            LocationSignature: "Mlö"
          },
          {
            AdvertisedShortLocationName: "Mollaryd",
            Geometry: {
              SWEREF99TM: "POINT (382826 6419982)",
              WGS84: "POINT (13.022665314312638 57.906214666400942)"
            },
            LocationSignature: "Moy"
          },
          {
            AdvertisedShortLocationName: "Norberg",
            Geometry: {
              SWEREF99TM: "POINT (552010 6659080)",
              WGS84: "POINT (15.934321769626965 60.065560013848383)"
            },
            LocationSignature: "Nbg"
          },
          {
            AdvertisedShortLocationName: "Malmbäck",
            Geometry: {
              SWEREF99TM: "POINT (467732 6381857)",
              WGS84: "POINT (14.460424902962865 57.577996215266744)"
            },
            LocationSignature: "Mbä"
          },
          {
            AdvertisedShortLocationName: "Mörarp",
            Geometry: {
              SWEREF99TM: "POINT (367582 6214279)",
              WGS84: "POINT (12.873598118115169 56.05535238111414)"
            },
            LocationSignature: "Mör"
          },
          {
            AdvertisedShortLocationName: "Mullsjö",
            Geometry: {
              SWEREF99TM: "POINT (433724 6419799)",
              WGS84: "POINT (13.881370834582835 57.915035065889967)"
            },
            LocationSignature: "Mu"
          },
          {
            AdvertisedShortLocationName: "Moradal",
            Geometry: {
              SWEREF99TM: "POINT (528155 6937112)",
              WGS84: "POINT (15.547694912904941 62.563817620290109)"
            },
            LocationSignature: "Mdl"
          },
          {
            AdvertisedShortLocationName: "Märsta",
            Geometry: {
              SWEREF99TM: "POINT (661368 6613430)",
              WGS84: "POINT (17.861556068154965 59.627719092214846)"
            },
            LocationSignature: "Mr"
          },
          {
            AdvertisedShortLocationName: "Persborg",
            Geometry: {
              SWEREF99TM: "POINT (375777 6161169)",
              WGS84: "POINT (13.029363554491523 55.580630141121112)"
            },
            LocationSignature: "Mpb"
          },
          {
            AdvertisedShortLocationName: "Mosselund",
            Geometry: {
              SWEREF99TM: "POINT (428706 6230693)",
              WGS84: "POINT (13.850435129977809 56.215805066831713)"
            },
            LocationSignature: "Mud"
          },
          {
            AdvertisedShortLocationName: "Närkes Kvarntorp",
            Geometry: {
              SWEREF99TM: "POINT (515100 6554200)",
              WGS84: "POINT (15.263797587534439 59.126788827407)"
            },
            LocationSignature: "Nkp"
          },
          {
            AdvertisedShortLocationName: "Mariannelund",
            Geometry: {
              SWEREF99TM: "POINT (534966 6386111)",
              WGS84: "POINT (15.585301141237197 57.616005624473267)"
            },
            LocationSignature: "Mnd"
          },
          {
            AdvertisedShortLocationName: "Mörsil",
            Geometry: {
              SWEREF99TM: "POINT (432733 7020670)",
              WGS84: "POINT (13.657733740685659 63.308534568220175)"
            },
            LocationSignature: "Mi"
          },
          {
            AdvertisedShortLocationName: "Mora",
            Geometry: {
              SWEREF99TM: "POINT (476160 6763838)",
              WGS84: "POINT (14.559096105462443 61.008712307388208)"
            },
            LocationSignature: "Mra"
          },
          {
            AdvertisedShortLocationName: "Mönsterås",
            Geometry: {
              SWEREF99TM: "POINT (587798 6322785)",
              WGS84: "POINT (16.446906080559234 57.040145581048982)"
            },
            LocationSignature: "Mss"
          },
          {
            AdvertisedShortLocationName: "Maria",
            Geometry: {
              SWEREF99TM: "POINT (357508 6216853)",
              WGS84: "POINT (12.71059765487515 56.075569056692643)"
            },
            LocationSignature: "Mia"
          },
          {
            AdvertisedShortLocationName: "Näsberg",
            Geometry: {
              SWEREF99TM: "POINT (768511 7373483)",
              WGS84: "POINT (21.009419713527691 66.3647515697605)"
            },
            LocationSignature: "Nb"
          },
          {
            AdvertisedShortLocationName: "Norra bantorget",
            Geometry: {
              SWEREF99TM: "POINT (673188 6581494)",
              WGS84: "POINT (18.044917606512314 59.33660445660729)"
            },
            LocationSignature: "Nbt"
          },
          {
            AdvertisedShortLocationName: "Lycksele timmer",
            Geometry: {
              SWEREF99TM: "POINT (679821 7168126)",
              WGS84: "POINT (18.75754570960207 64.590315479463811)"
            },
            LocationSignature: "Lyt"
          },
          {
            AdvertisedShortLocationName: "Nässjö",
            Geometry: {
              SWEREF99TM: "POINT (481781 6389937)",
              WGS84: "POINT (14.694734601983976 57.651359435304919)"
            },
            LocationSignature: "N"
          },
          {
            AdvertisedShortLocationName: "Nybybruk",
            Geometry: {
              SWEREF99TM: "POINT (582803 6588118)",
              WGS84: "POINT (16.459282015508744 59.423495961324484)"
            },
            LocationSignature: "Nbr"
          },
          {
            AdvertisedShortLocationName: "Lysvik",
            Geometry: {
              SWEREF99TM: "POINT (396189 6654649)",
              WGS84: "POINT (13.13778300680481 60.015950537957131)"
            },
            LocationSignature: "Lyv"
          },
          {
            AdvertisedShortLocationName: "Moheda",
            Geometry: {
              SWEREF99TM: "POINT (474281 6317813)",
              WGS84: "POINT (14.576590184629076 57.003120656838739)"
            },
            LocationSignature: "Mo"
          },
          {
            AdvertisedShortLocationName: "Mjölby",
            Geometry: {
              SWEREF99TM: "POINT (507738 6464651)",
              WGS84: "POINT (15.132101007286456 58.32274619735859)"
            },
            LocationSignature: "My"
          },
          {
            AdvertisedShortLocationName: "Norra Kikkejaur",
            Geometry: {
              SWEREF99TM: "POINT (690265 7285820)",
              WGS84: "POINT (19.135959705340142 65.6379921811629)"
            },
            LocationSignature: "Nkr"
          },
          {
            AdvertisedShortLocationName: "Mariedamm",
            Geometry: {
              SWEREF99TM: "POINT (509349 6523681)",
              WGS84: "POINT (15.162035691610491 58.852874404367583)"
            },
            LocationSignature: "Mdm"
          },
          {
            AdvertisedShortLocationName: "Mimer",
            Geometry: {
              SWEREF99TM: "POINT (552630 6660504)",
              WGS84: "POINT (15.94582380760837 60.078265464142262)"
            },
            LocationSignature: "Mim"
          },
          {
            AdvertisedShortLocationName: "Nyboda",
            Geometry: {
              SWEREF99TM: "POINT (672021 6577352)",
              WGS84: "POINT (18.021133062535558 59.299937470441385)"
            },
            LocationSignature: "Nba"
          },
          {
            AdvertisedShortLocationName: "Mora kommuns industrispår",
            Geometry: {
              SWEREF99TM: "POINT (475174 6762338)",
              WGS84: "POINT (14.541055760022665 60.9951850681577)"
            },
            LocationSignature: "Mrai"
          },
          {
            AdvertisedShortLocationName: "Sarpsborg",
            Geometry: {
              SWEREF99TM: "POINT (278460 6576005)",
              WGS84: "POINT (11.112626070011519 59.264828117394387)"
            },
            LocationSignature: "No.sbo"
          },
          {
            AdvertisedShortLocationName: "Laxå",
            Geometry: {
              SWEREF99TM: "POINT (477851 6538882)",
              WGS84: "POINT (14.614602720877377 58.9889191110449)"
            },
            LocationSignature: "Lå"
          },
          {
            AdvertisedShortLocationName: "Mo grindar",
            Geometry: {
              SWEREF99TM: "POINT (592740 6757545)",
              WGS84: "POINT (16.711699738532118 60.942061652332463)"
            },
            LocationSignature: "Mog"
          },
          {
            AdvertisedShortLocationName: "Morastrand",
            Geometry: {
              SWEREF99TM: "POINT (475259 6763404)",
              WGS84: "POINT (14.54248942185974 61.00476054846952)"
            },
            LocationSignature: "Mras"
          },
          {
            AdvertisedShortLocationName: "Norrsundet",
            Geometry: {
              SWEREF99TM: "POINT (616090 6757107)",
              WGS84: "POINT (17.142087307125969 60.931970146820412)"
            },
            LocationSignature: "Ndt"
          },
          {
            AdvertisedShortLocationName: "Nedansjö",
            Geometry: {
              SWEREF99TM: "POINT (595824 6917299)",
              WGS84: "POINT (16.852469308297152 62.374727911964058)"
            },
            LocationSignature: "Nsö"
          },
          {
            AdvertisedShortLocationName: "Mölnlycke",
            Geometry: {
              SWEREF99TM: "POINT (328447 6394317)",
              WGS84: "POINT (12.124506245707574 57.65839047066676)"
            },
            LocationSignature: "Myk"
          },
          {
            AdvertisedShortLocationName: "Morjärv",
            Geometry: {
              SWEREF99TM: "POINT (847600 7349061)",
              WGS84: "POINT (22.695179774553598 66.069729766670321)"
            },
            LocationSignature: "Mjv"
          },
          {
            AdvertisedShortLocationName: "Myrbacken",
            Geometry: {
              SWEREF99TM: "POINT (658020 6620679)",
              WGS84: "POINT (17.807702645844682 59.694016627623071)"
            },
            LocationSignature: "Myn"
          },
          {
            AdvertisedShortLocationName: "Näverkärret",
            Geometry: {
              SWEREF99TM: "POINT (529701 6614251)",
              WGS84: "POINT (15.527176207970545 59.665261390323963)"
            },
            LocationSignature: "Nkt"
          },
          {
            AdvertisedShortLocationName: "Milletorp",
            Geometry: {
              SWEREF99TM: "POINT (511147 6343967)",
              WGS84: "POINT (15.184680048059874 57.238650531512647)"
            },
            LocationSignature: "Mip"
          },
          {
            AdvertisedShortLocationName: "Nässundet",
            Geometry: {
              SWEREF99TM: "POINT (456587 6589131)",
              WGS84: "POINT (14.234599410872281 59.438503614815104)"
            },
            LocationSignature: "Nd"
          },
          {
            AdvertisedShortLocationName: "Nyköping södra",
            Geometry: {
              SWEREF99TM: "POINT (615777 6513679)",
              WGS84: "POINT (17.000752309621905 58.747626269926464)"
            },
            LocationSignature: "Nks"
          },
          {
            AdvertisedShortLocationName: "Mölndal",
            Geometry: {
              SWEREF99TM: "POINT (322040 6395151)",
              WGS84: "POINT (12.01666374798342 57.663387110687026)"
            },
            LocationSignature: "Mdn"
          },
          {
            AdvertisedShortLocationName: "Straumsnes",
            Geometry: {
              SWEREF99TM: "POINT (508730 7465086)",
              WGS84: "POINT (15.202738110952263 67.302223253445149)"
            },
            LocationSignature: "No.sms"
          },
          {
            AdvertisedShortLocationName: "Mölndals övre",
            Geometry: {
              SWEREF99TM: "POINT (322869 6394565)",
              WGS84: "POINT (12.030969629224018 57.6584571095213)"
            },
            LocationSignature: "Mdö"
          },
          {
            AdvertisedShortLocationName: "Norsesund västra",
            Geometry: {
              SWEREF99TM: "POINT (347742 6415876)",
              WGS84: "POINT (12.433845183031636 57.858782507254688)"
            },
            LocationSignature: "Ndv"
          },
          {
            AdvertisedShortLocationName: "Myra",
            Geometry: {
              SWEREF99TM: "POINT (605755 6820822)",
              WGS84: "POINT (16.987254585811812 61.506537346192687)"
            },
            LocationSignature: "Myra"
          },
          {
            AdvertisedShortLocationName: "Karlskrona",
            Geometry: {
              SWEREF99TM: "POINT (536343 6224827)",
              WGS84: "POINT (15.585251349670157 56.167056846273418)"
            },
            LocationSignature: "Ck"
          },
          {
            AdvertisedShortLocationName: "Murjek",
            Geometry: {
              SWEREF99TM: "POINT (761524 7386195)",
              WGS84: "POINT (20.880749813051352 66.484129170996752)"
            },
            LocationSignature: "Mk"
          },
          {
            AdvertisedShortLocationName: "Nuorttagievlle",
            Geometry: {
              SWEREF99TM: "POINT (766682 7395339)",
              WGS84: "POINT (21.015701649552764 66.561319975807379)"
            },
            LocationSignature: "Nte"
          },
          {
            AdvertisedShortLocationName: "Sösterbekk",
            Geometry: {
              SWEREF99TM: "POINT (623055 7595606)",
              WGS84: "POINT (18.002447553369333 68.446140892466147)"
            },
            LocationSignature: "No.sös"
          },
          {
            AdvertisedShortLocationName: "Munkedal",
            Geometry: {
              SWEREF99TM: "POINT (306075 6485490)",
              WGS84: "POINT (11.674984460366113 58.466885012412867)"
            },
            LocationSignature: "Mkl"
          },
          {
            AdvertisedShortLocationName: "Marmaverken",
            Geometry: {
              SWEREF99TM: "POINT (599918 6794338)",
              WGS84: "POINT (16.863436611581 61.270459939062128)"
            },
            LocationSignature: "Me"
          },
          {
            AdvertisedShortLocationName: "Nattavaara",
            Geometry: {
              SWEREF99TM: "POINT (761730 7416490)",
              WGS84: "POINT (20.950092892795404 66.754279810378492)"
            },
            LocationSignature: "Ntv"
          },
          {
            AdvertisedShortLocationName: "Nynäsgård",
            Geometry: {
              SWEREF99TM: "POINT (669443 6534174)",
              WGS84: "POINT (17.942529489313543 58.913736221868994)"
            },
            LocationSignature: "Ngd"
          },
          {
            AdvertisedShortLocationName: "Munkedals hamn",
            Geometry: {
              SWEREF99TM: "POINT (306163 6482304)",
              WGS84: "POINT (11.679186378967866 58.438357402848517)"
            },
            LocationSignature: "Mklh"
          },
          {
            AdvertisedShortLocationName: "Trondheim",
            Geometry: {
              SWEREF99TM: "POINT (296829 7043012)",
              WGS84: "POINT (10.922988176949668 63.457296481173181)"
            },
            LocationSignature: "No.tnd"
          },
          {
            AdvertisedShortLocationName: "Mehedeby",
            Geometry: {
              SWEREF99TM: "POINT (632060 6704013)",
              WGS84: "POINT (17.400697523242322 60.450693948864419)"
            },
            LocationSignature: "Meh"
          },
          {
            AdvertisedShortLocationName: "Morgongåva",
            Geometry: {
              SWEREF99TM: "POINT (609611 6645563)",
              WGS84: "POINT (16.961361800787781 59.9329057877021)"
            },
            LocationSignature: "Må"
          },
          {
            AdvertisedShortLocationName: "Norrviken",
            Geometry: {
              SWEREF99TM: "POINT (665733 6594848)",
              WGS84: "POINT (17.924356611552174 59.459362194827804)"
            },
            LocationSignature: "Nvk"
          },
          {
            AdvertisedShortLocationName: "Osby",
            Geometry: {
              SWEREF99TM: "POINT (437982 6248958)",
              WGS84: "POINT (13.995681778357715 56.381181281226006)"
            },
            LocationSignature: "O"
          },
          {
            AdvertisedShortLocationName: "Målilla",
            Geometry: {
              SWEREF99TM: "POINT (549581 6361068)",
              WGS84: "POINT (15.824829427517638 57.389704551727938)"
            },
            LocationSignature: "Måa"
          },
          {
            AdvertisedShortLocationName: "Kristianstad",
            Geometry: {
              SWEREF99TM: "POINT (447084 6209991)",
              WGS84: "POINT (14.150831275057898 56.032221640747423)"
            },
            LocationSignature: "Cr"
          },
          {
            AdvertisedShortLocationName: "Norrmjöle",
            Geometry: {
              SWEREF99TM: "POINT (751302 7073816)",
              WGS84: "POINT (20.087808485785 63.701964594559392)"
            },
            LocationSignature: "Noe"
          },
          {
            AdvertisedShortLocationName: "Norrhög",
            Geometry: {
              SWEREF99TM: "POINT (534206 6901003)",
              WGS84: "POINT (15.658244242663194 62.23921251921093)"
            },
            LocationSignature: "Ng"
          },
          {
            AdvertisedShortLocationName: "Kristianstad GBG",
            Geometry: {
              SWEREF99TM: "POINT (447476 6210985)",
              WGS84: "POINT (14.156926460185771 56.041194785198932)"
            },
            LocationSignature: "Crgb"
          },
          {
            AdvertisedShortLocationName: "Orrskog",
            Geometry: {
              SWEREF99TM: "POINT (632235 6698868)",
              WGS84: "POINT (17.400468969720666 60.404481960661791)"
            },
            LocationSignature: "Os"
          },
          {
            AdvertisedShortLocationName: "Ockelbo",
            Geometry: {
              SWEREF99TM: "POINT (593387 6751890)",
              WGS84: "POINT (16.720896069102906 60.891161701666128)"
            },
            LocationSignature: "Ob"
          },
          {
            AdvertisedShortLocationName: "Nordmaling",
            Geometry: {
              SWEREF99TM: "POINT (722400 7057832)",
              WGS84: "POINT (19.482318465435071 63.5784029799022)"
            },
            LocationSignature: "Nog"
          },
          {
            AdvertisedShortLocationName: "Månsarp",
            Geometry: {
              SWEREF99TM: "POINT (444563 6390570)",
              WGS84: "POINT (14.07105156879612 57.654003148880712)"
            },
            LocationSignature: "Måp"
          },
          {
            AdvertisedShortLocationName: "Norsholm",
            Geometry: {
              SWEREF99TM: "POINT (556637 6485560)",
              WGS84: "POINT (15.971970998843487 58.506928603690554)"
            },
            LocationSignature: "Nh"
          },
          {
            AdvertisedShortLocationName: "Kristianstads södra",
            Geometry: {
              SWEREF99TM: "POINT (447835 6208806)",
              WGS84: "POINT (14.163111814280695 56.021658013535628)"
            },
            LocationSignature: "Crs"
          },
          {
            AdvertisedShortLocationName: "Norra Valbo",
            Geometry: {
              SWEREF99TM: "POINT (610048 6726768)",
              WGS84: "POINT (17.013517121749192 60.6614769856305)"
            },
            LocationSignature: "Nvl"
          },
          {
            AdvertisedShortLocationName: "Notviken",
            Geometry: {
              SWEREF99TM: "POINT (827456 7295073)",
              WGS84: "POINT (22.118734555128196 65.610656861533272)"
            },
            LocationSignature: "Nvn"
          },
          {
            AdvertisedShortLocationName: "Märbäck",
            Geometry: {
              SWEREF99TM: "POINT (450256 6785556)",
              WGS84: "POINT (14.074393562897118 61.201250508518918)"
            },
            LocationSignature: "Mäk"
          },
          {
            AdvertisedShortLocationName: "Nol",
            Geometry: {
              SWEREF99TM: "POINT (325890 6423327)",
              WGS84: "POINT (12.06061767215043 57.917647392219116)"
            },
            LocationSignature: "Nol"
          },
          {
            AdvertisedShortLocationName: "Norrahammar",
            Geometry: {
              SWEREF99TM: "POINT (447307 6396139)",
              WGS84: "POINT (14.115808987171052 57.704350055838454)"
            },
            LocationSignature: "Nhr"
          },
          {
            AdvertisedShortLocationName: "Mölnbo",
            Geometry: {
              SWEREF99TM: "POINT (638726 6547837)",
              WGS84: "POINT (17.418288054007117 59.047361184619177)"
            },
            LocationSignature: "Mö"
          },
          {
            AdvertisedShortLocationName: "Nybro",
            Geometry: {
              SWEREF99TM: "POINT (555597 6289081)",
              WGS84: "POINT (15.908953378445108 56.742404761426506)"
            },
            LocationSignature: "Nyb"
          },
          {
            AdvertisedShortLocationName: "Nyhem",
            Geometry: {
              SWEREF99TM: "POINT (531180 6973693)",
              WGS84: "POINT (15.613306217434134 62.891893982469647)"
            },
            LocationSignature: "Ny"
          },
          {
            AdvertisedShortLocationName: "Olofström",
            Geometry: {
              SWEREF99TM: "POINT (470264 6237242)",
              WGS84: "POINT (14.519747273209372 56.279054856639775)"
            },
            LocationSignature: "Of"
          },
          {
            AdvertisedShortLocationName: "Stockholm C",
            Geometry: {
              SWEREF99TM: "POINT (673924 6580788)",
              WGS84: "POINT (18.057267018575825 59.329970842872264)"
            },
            LocationSignature: "Cst"
          },
          {
            AdvertisedShortLocationName: "Norrsjön",
            Geometry: {
              SWEREF99TM: "POINT (728194 7058782)",
              WGS84: "POINT (19.600020820140369 63.583214989624537)"
            },
            LocationSignature: "Non"
          },
          {
            AdvertisedShortLocationName: "Nynäshamn",
            Geometry: {
              SWEREF99TM: "POINT (669935 6532699)",
              WGS84: "POINT (17.949931842139648 58.900312616218351)"
            },
            LocationSignature: "Nyh"
          },
          {
            AdvertisedShortLocationName: "Degerön",
            Geometry: {
              SWEREF99TM: "POINT (508797 6506825)",
              WGS84: "POINT (15.151806606000406 58.7015035633366)"
            },
            LocationSignature: "D"
          },
          {
            AdvertisedShortLocationName: "Ralingsås",
            Geometry: {
              SWEREF99TM: "POINT (488357 6415038)",
              WGS84: "POINT (14.803697898171141 57.877043000570715)"
            },
            LocationSignature: "Ras"
          },
          {
            AdvertisedShortLocationName: "Nyfors",
            Geometry: {
              SWEREF99TM: "POINT (773852 7296330)",
              WGS84: "POINT (20.964426286010095 65.671776849966179)"
            },
            LocationSignature: "Nyf"
          },
          {
            AdvertisedShortLocationName: "Dammstorp",
            Geometry: {
              SWEREF99TM: "POINT (392384 6185366)",
              WGS84: "POINT (13.283171027373214 55.801903033673462)"
            },
            LocationSignature: "Dat"
          },
          {
            AdvertisedShortLocationName: "Rian",
            Geometry: {
              SWEREF99TM: "POINT (864243 7331078)",
              WGS84: "POINT (23.008754683045197 65.891273407010829)"
            },
            LocationSignature: "Ran"
          },
          {
            AdvertisedShortLocationName: "Riksgränsen",
            Geometry: {
              SWEREF99TM: "POINT (627923 7593733)",
              WGS84: "POINT (18.118696900033019 68.427198242331528)"
            },
            LocationSignature: "Rgn"
          },
          {
            AdvertisedShortLocationName: "Degerbäcken",
            Geometry: {
              SWEREF99TM: "POINT (791976 7316923)",
              WGS84: "POINT (21.401807292664088 65.839491690426613)"
            },
            LocationSignature: "Dbn"
          },
          {
            AdvertisedShortLocationName: "Nyåker",
            Geometry: {
              SWEREF99TM: "POINT (712568 7078573)",
              WGS84: "POINT (19.313008107620465 63.770057720570719)"
            },
            LocationSignature: "Nyå"
          },
          {
            AdvertisedShortLocationName: "Oskarshamn",
            Geometry: {
              SWEREF99TM: "POINT (587914 6347593)",
              WGS84: "POINT (16.457553172333 57.262908730722145)"
            },
            LocationSignature: "Oh"
          },
          {
            AdvertisedShortLocationName: "Nyköping",
            Geometry: {
              SWEREF99TM: "POINT (615535 6514673)",
              WGS84: "POINT (16.997084943083745 58.75661275367473)"
            },
            LocationSignature: "Nk"
          },
          {
            AdvertisedShortLocationName: "Ramlösa",
            Geometry: {
              SWEREF99TM: "POINT (358360 6211078)",
              WGS84: "POINT (12.727326362697729 56.0239753050688)"
            },
            LocationSignature: "Ram"
          },
          {
            AdvertisedShortLocationName: "Nykvarn",
            Geometry: {
              SWEREF99TM: "POINT (638984 6562488)",
              WGS84: "POINT (17.432080395575703 59.1787322753928)"
            },
            LocationSignature: "Nkv"
          },
          {
            AdvertisedShortLocationName: "Nykroppa",
            Geometry: {
              SWEREF99TM: "POINT (460988 6609572)",
              WGS84: "POINT (14.308436065558167 59.622480175289546)"
            },
            LocationSignature: "Nka"
          },
          {
            AdvertisedShortLocationName: "Norrköping",
            Geometry: {
              SWEREF99TM: "POINT (568681 6495702)",
              WGS84: "POINT (16.181679029700245 58.596266416740335)"
            },
            LocationSignature: "Nr"
          },
          {
            AdvertisedShortLocationName: "Nordskogen",
            Geometry: {
              SWEREF99TM: "POINT (378002 6402754)",
              WGS84: "POINT (12.95011961210867 57.750274476087469)"
            },
            LocationSignature: "Nosk"
          },
          {
            AdvertisedShortLocationName: "Nordlunda",
            Geometry: {
              SWEREF99TM: "POINT (694877 7276822)",
              WGS84: "POINT (19.222777837640489 65.554729885031847)"
            },
            LocationSignature: "Norl"
          },
          {
            AdvertisedShortLocationName: "Rossön",
            Geometry: {
              SWEREF99TM: "POINT (566156 7088933)",
              WGS84: "POINT (16.348826342027646 63.921201985660879)"
            },
            LocationSignature: "Ros"
          },
          {
            AdvertisedShortLocationName: "Ripats",
            Geometry: {
              SWEREF99TM: "POINT (749909 7439768)",
              WGS84: "POINT (20.731579093517908 66.97193679743431)"
            },
            LocationSignature: "Rps"
          },
          {
            AdvertisedShortLocationName: "Ronneby",
            Geometry: {
              SWEREF99TM: "POINT (517593 6229093)",
              WGS84: "POINT (15.283598683023076 56.206445652391736)"
            },
            LocationSignature: "Rb"
          },
          {
            AdvertisedShortLocationName: "Riksgräns Swe-Dk.",
            Geometry: {
              SWEREF99TM: "POINT (361873 6161446)",
              WGS84: "POINT (12.808827738668187 55.579375277480381)"
            },
            LocationSignature: "Riks"
          },
          {
            AdvertisedShortLocationName: "Oleby",
            Geometry: {
              SWEREF99TM: "POINT (391035 6667492)",
              WGS84: "POINT (13.038556091805351 60.129867666666051)"
            },
            LocationSignature: "Ol"
          },
          {
            AdvertisedShortLocationName: "Nås",
            Geometry: {
              SWEREF99TM: "POINT (472500 6703031)",
              WGS84: "POINT (14.499971484560509 60.46255408414109)"
            },
            LocationSignature: "Nås"
          },
          {
            AdvertisedShortLocationName: "Rosersberg",
            Geometry: {
              SWEREF99TM: "POINT (662607 6608649)",
              WGS84: "POINT (17.879821813887027 59.584359915422432)"
            },
            LocationSignature: "Rs"
          },
          {
            AdvertisedShortLocationName: "Rabbalshede",
            Geometry: {
              SWEREF99TM: "POINT (295006 6502030)",
              WGS84: "POINT (11.470711607633103 58.61010066120599)"
            },
            LocationSignature: "Rbh"
          },
          {
            AdvertisedShortLocationName: "Norrfors",
            Geometry: {
              SWEREF99TM: "POINT (697097 7077439)",
              WGS84: "POINT (18.998618252161002 63.768933221666479)"
            },
            LocationSignature: "Nrs"
          },
          {
            AdvertisedShortLocationName: "Röjan",
            Geometry: {
              SWEREF99TM: "POINT (466967 6927730)",
              WGS84: "POINT (14.359231439773422 62.479207368130552)"
            },
            LocationSignature: "Rjn"
          },
          {
            AdvertisedShortLocationName: "Berlin",
            Geometry: { WGS84: "POINT (13.408053276651962 52.5186101055932)" },
            LocationSignature: "De.ber"
          },
          {
            AdvertisedShortLocationName: "Nuortikon",
            Geometry: {
              SWEREF99TM: "POINT (754706 7430309)",
              WGS84: "POINT (20.820686209965483 66.8835310906646)"
            },
            LocationSignature: "Nrt"
          },
          {
            AdvertisedShortLocationName: "Råbäck",
            Geometry: {
              SWEREF99TM: "POINT (405688 6497835)",
              WGS84: "POINT (13.376620125855242 58.610608209345884)"
            },
            LocationSignature: "Rbk"
          },
          {
            AdvertisedShortLocationName: "Råtsi",
            Geometry: {
              SWEREF99TM: "POINT (720832 7528917)",
              WGS84: "POINT (20.240482825138074 67.790962649998662)"
            },
            LocationSignature: "Rsi"
          },
          {
            AdvertisedShortLocationName: "Rensjön",
            Geometry: {
              SWEREF99TM: "POINT (701000 7558605)",
              WGS84: "POINT (19.826895032446586 68.070684366621734)"
            },
            LocationSignature: "Rsn"
          },
          {
            AdvertisedShortLocationName: "Norsesund",
            Geometry: {
              SWEREF99TM: "POINT (348049 6416149)",
              WGS84: "POINT (12.438839362739925 57.861336648362105)"
            },
            LocationSignature: "Ns"
          },
          {
            AdvertisedShortLocationName: "Rockneby",
            Geometry: {
              SWEREF99TM: "POINT (581886 6296735)",
              WGS84: "POINT (16.341089279793206 56.807274756732419)"
            },
            LocationSignature: "Rby"
          },
          {
            AdvertisedShortLocationName: "Röstbo",
            Geometry: {
              SWEREF99TM: "POINT (589993 6783440)",
              WGS84: "POINT (16.673235962161151 61.175078489397521)"
            },
            LocationSignature: "Rbo"
          },
          {
            AdvertisedShortLocationName: "Rättvik",
            Geometry: {
              SWEREF99TM: "POINT (506280 6749950)",
              WGS84: "POINT (15.11569266851374 60.884696749961194)"
            },
            LocationSignature: "Rv"
          },
          {
            AdvertisedShortLocationName: "Oskarström",
            Geometry: {
              SWEREF99TM: "POINT (376174 6297681)",
              WGS84: "POINT (12.9719841578046 56.806500849352972)"
            },
            LocationSignature: "Om"
          },
          {
            AdvertisedShortLocationName: "Vemdalen",
            Geometry: {
              SWEREF99TM: "POINT (441338 6924615)",
              WGS84: "POINT (13.863238489291808 62.448086326373051)"
            },
            LocationSignature: "Rjn.vd"
          },
          {
            AdvertisedShortLocationName: "Nyckelsjön",
            Geometry: {
              SWEREF99TM: "POINT (606969 6551327)",
              WGS84: "POINT (16.866786287292225 59.087827412096082)"
            },
            LocationSignature: "Nsj"
          },
          {
            AdvertisedShortLocationName: "Ramsjö",
            Geometry: {
              SWEREF99TM: "POINT (535238 6892184)",
              WGS84: "POINT (15.67632995695312 62.159960296252116)"
            },
            LocationSignature: "Rsö"
          },
          {
            AdvertisedShortLocationName: "Repbäcken",
            Geometry: {
              SWEREF99TM: "POINT (518857 6708725)",
              WGS84: "POINT (15.343418221806562 60.514173927266)"
            },
            LocationSignature: "Rbä"
          },
          {
            AdvertisedShortLocationName: "Skärblacka",
            Geometry: {
              SWEREF99TM: "POINT (552942 6493105)",
              WGS84: "POINT (15.910323851139843 58.575148259818413)"
            },
            LocationSignature: "Sbl"
          },
          {
            AdvertisedShortLocationName: "Ope",
            Geometry: {
              SWEREF99TM: "POINT (487201 7000531)",
              WGS84: "POINT (14.746154113285547 63.133878501973356)"
            },
            LocationSignature: "Ope"
          },
          {
            AdvertisedShortLocationName: "Ransta",
            Geometry: {
              SWEREF99TM: "POINT (591990 6631411)",
              WGS84: "POINT (16.639952267436371 59.810191460769758)"
            },
            LocationSignature: "Rt"
          },
          {
            AdvertisedShortLocationName: "Nelhammar",
            Geometry: {
              SWEREF99TM: "POINT (578118 6439472)",
              WGS84: "POINT (16.324957310979343 58.0897754772045)"
            },
            LocationSignature: "Nl"
          },
          {
            AdvertisedShortLocationName: "Niemisel",
            Geometry: {
              SWEREF99TM: "POINT (816893 7340768)",
              WGS84: "POINT (22.001481447954266 66.02814097861841)"
            },
            LocationSignature: "Nml"
          },
          {
            AdvertisedShortLocationName: "Rörvik",
            Geometry: {
              SWEREF99TM: "POINT (474817 6343087)",
              WGS84: "POINT (14.58287021210532 57.230188638150118)"
            },
            LocationSignature: "Rk"
          },
          {
            AdvertisedShortLocationName: "Stockholms norra",
            Geometry: {
              SWEREF99TM: "POINT (672483 6582680)",
              WGS84: "POINT (18.033491804221473 59.347528699869272)"
            },
            LocationSignature: "Nst"
          },
          {
            AdvertisedShortLocationName: "Rinkaby",
            Geometry: {
              SWEREF99TM: "POINT (454726 6204456)",
              WGS84: "POINT (14.274386764247001 55.983277053518187)"
            },
            LocationSignature: "Rka"
          },
          {
            AdvertisedShortLocationName: "Rynge",
            Geometry: {
              SWEREF99TM: "POINT (415957 6147780)",
              WGS84: "POINT (13.670590452612146 55.4689408605178)"
            },
            LocationSignature: "Rye"
          },
          {
            AdvertisedShortLocationName: "Olskroken",
            Geometry: {
              SWEREF99TM: "POINT (321245 6401322)",
              WGS84: "POINT (11.998780183652906 57.718427413299061)"
            },
            LocationSignature: "Or"
          },
          {
            AdvertisedShortLocationName: "Rosshyttan",
            Geometry: {
              SWEREF99TM: "POINT (575366 6659821)",
              WGS84: "POINT (16.35405229166647 60.068583111688774)"
            },
            LocationSignature: "Ry"
          },
          {
            AdvertisedShortLocationName: "Ryssjöbrink",
            Geometry: {
              SWEREF99TM: "POINT (633358 6565713)",
              WGS84: "POINT (17.335702926296598 59.209473922363408)"
            },
            LocationSignature: "Ryb"
          },
          {
            AdvertisedShortLocationName: "Rävlanda",
            Geometry: {
              SWEREF99TM: "POINT (350843 6392987)",
              WGS84: "POINT (12.500280228730583 57.654426434500849)"
            },
            LocationSignature: "Rd"
          },
          {
            AdvertisedShortLocationName: "Röste",
            Geometry: {
              SWEREF99TM: "POINT (574372 6805926)",
              WGS84: "POINT (16.391811365414654 61.380164547476767)"
            },
            LocationSignature: "Rte"
          },
          {
            AdvertisedShortLocationName: "Rydsgård",
            Geometry: {
              SWEREF99TM: "POINT (410778 6148471)",
              WGS84: "POINT (13.588473166758456 55.474231259627338)"
            },
            LocationSignature: "Rdg"
          },
          {
            AdvertisedShortLocationName: "Nyland",
            Geometry: {
              SWEREF99TM: "POINT (639826 6989228)",
              WGS84: "POINT (17.7616597547903 63.005701887640278)"
            },
            LocationSignature: "Nld"
          },
          {
            AdvertisedShortLocationName: "Ryggen",
            Geometry: {
              SWEREF99TM: "POINT (551831 6717609)",
              WGS84: "POINT (15.946192339279943 60.591033177918625)"
            },
            LocationSignature: "Ryg"
          },
          {
            AdvertisedShortLocationName: "Opphem",
            Geometry: {
              SWEREF99TM: "POINT (542776 6445287)",
              WGS84: "POINT (15.726662796158282 58.1468228303289)"
            },
            LocationSignature: "Oph"
          },
          {
            AdvertisedShortLocationName: "Rottneros",
            Geometry: {
              SWEREF99TM: "POINT (394989 6630060)",
              WGS84: "POINT (13.128730817596281 59.794969805186923)"
            },
            LocationSignature: "Rts"
          },
          {
            AdvertisedShortLocationName: "Rekarne",
            Geometry: {
              SWEREF99TM: "POINT (576073 6588438)",
              WGS84: "POINT (16.34082857433631 59.427640059359177)"
            },
            LocationSignature: "Rke"
          },
          {
            AdvertisedShortLocationName: "Rydöbruk",
            Geometry: {
              SWEREF99TM: "POINT (387324 6314869)",
              WGS84: "POINT (13.146860869619399 56.963664407781444)"
            },
            LocationSignature: "Ryk"
          },
          {
            AdvertisedShortLocationName: "Rimforsa",
            Geometry: {
              SWEREF99TM: "POINT (540141 6443977)",
              WGS84: "POINT (15.681679282269746 58.13530453556956)"
            },
            LocationSignature: "Rf"
          },
          {
            AdvertisedShortLocationName: "Rydaholm",
            Geometry: {
              SWEREF99TM: "POINT (458158 6316083)",
              WGS84: "POINT (14.311463131643221 56.986401280809616)"
            },
            LocationSignature: "Rym"
          },
          {
            AdvertisedShortLocationName: "Norra Sunderbyn",
            Geometry: {
              SWEREF99TM: "POINT (814762 7303444)",
              WGS84: "POINT (21.865013657790151 65.6978339826181)"
            },
            LocationSignature: "Sby"
          },
          {
            AdvertisedShortLocationName: "Rocksjön",
            Geometry: {
              SWEREF99TM: "POINT (452309 6403947)",
              WGS84: "POINT (14.198182496319422 57.7750362469798)"
            },
            LocationSignature: "Rkö"
          },
          {
            AdvertisedShortLocationName: "Strömsnäsbruk",
            Geometry: {
              SWEREF99TM: "POINT (422085 6268030)",
              WGS84: "POINT (13.732615703503818 56.550135703232371)"
            },
            LocationSignature: "Sbu"
          },
          {
            AdvertisedShortLocationName: "Rällså",
            Geometry: {
              SWEREF99TM: "POINT (505473 6628805)",
              WGS84: "POINT (15.097524794485626 59.796973795235765)"
            },
            LocationSignature: "Rlå"
          },
          {
            AdvertisedShortLocationName: "Ryr",
            Geometry: {
              SWEREF99TM: "POINT (332472 6469210)",
              WGS84: "POINT (12.138746861064339 58.3317749707901)"
            },
            LocationSignature: "Ryr"
          },
          {
            AdvertisedShortLocationName: "Rämshyttan",
            Geometry: {
              SWEREF99TM: "POINT (512293 6684654)",
              WGS84: "POINT (15.2223983004871 60.298303057706477)"
            },
            LocationSignature: "Rmh"
          },
          {
            AdvertisedShortLocationName: "Rimforsa brygga",
            Geometry: {
              SWEREF99TM: "POINT (540813 6444606)",
              WGS84: "POINT (15.693200073949845 58.140892213022596)"
            },
            LocationSignature: "Rfb"
          },
          {
            AdvertisedShortLocationName: "Sågbäcken",
            Geometry: {
              SWEREF99TM: "POINT (843218 7347669)",
              WGS84: "POINT (22.595502910354863 66.062132973596448)"
            },
            LocationSignature: "Sbä"
          },
          {
            AdvertisedShortLocationName: "Reftele",
            Geometry: {
              SWEREF99TM: "POINT (414965 6337846)",
              WGS84: "POINT (13.593496728976955 57.175920515622714)"
            },
            LocationSignature: "Rft"
          },
          {
            AdvertisedShortLocationName: "Rydebäck",
            Geometry: {
              SWEREF99TM: "POINT (361656 6204488)",
              WGS84: "POINT (12.783556727555347 55.965771424432631)"
            },
            LocationSignature: "Ryä"
          },
          {
            AdvertisedShortLocationName: "Ramnäs",
            Geometry: {
              SWEREF99TM: "POINT (567838 6626390)",
              WGS84: "POINT (16.207883205469344 59.769776220870988)"
            },
            LocationSignature: "Rmn"
          },
          {
            AdvertisedShortLocationName: "Ragunda",
            Geometry: {
              SWEREF99TM: "POINT (571388 6992883)",
              WGS84: "POINT (16.412273453108398 63.058423491838759)"
            },
            LocationSignature: "Ru"
          },
          {
            AdvertisedShortLocationName: "Stavreviken",
            Geometry: {
              SWEREF99TM: "POINT (623736 6938151)",
              WGS84: "POINT (17.406570812702821 62.553511811667981)"
            },
            LocationSignature: "Sen"
          },
          {
            AdvertisedShortLocationName: "Stensundberget",
            Geometry: {
              SWEREF99TM: "POINT (881778 7328630)",
              WGS84: "POINT (23.382241834279473 65.849068132119982)"
            },
            LocationSignature: "Set"
          },
          {
            AdvertisedShortLocationName: "Halden",
            Geometry: {
              SWEREF99TM: "POINT (293492 6559687)",
              WGS84: "POINT (11.391237978408311 59.126179238709867)"
            },
            LocationSignature: "No.hld"
          },
          {
            AdvertisedShortLocationName: "Sandmon",
            Geometry: {
              SWEREF99TM: "POINT (422919 6607972)",
              WGS84: "POINT (13.634339689225913 59.602820843294509)"
            },
            LocationSignature: "Sdm"
          },
          {
            AdvertisedShortLocationName: "Runemo",
            Geometry: {
              SWEREF99TM: "POINT (560598 6803100)",
              WGS84: "POINT (16.133190521462033 61.357191848903035)"
            },
            LocationSignature: "Rum"
          },
          {
            AdvertisedShortLocationName: "Stockholm City",
            Geometry: {
              SWEREF99TM: "POINT (674343 6581075)",
              WGS84: "POINT (18.064852022201919 59.332371652020754)"
            },
            LocationSignature: "Sci"
          },
          {
            AdvertisedShortLocationName: "Ruda",
            Geometry: {
              SWEREF99TM: "POINT (567614 6330232)",
              WGS84: "POINT (16.116364230703681 57.11043237983634)"
            },
            LocationSignature: "Rud"
          },
          {
            AdvertisedShortLocationName: "Regumatorp",
            Geometry: {
              SWEREF99TM: "POINT (429131 6464644)",
              WGS84: "POINT (13.790299419949568 58.317033125527828)"
            },
            LocationSignature: "Rmtp"
          },
          {
            AdvertisedShortLocationName: "Ornäs",
            Geometry: {
              SWEREF99TM: "POINT (529375 6708014)",
              WGS84: "POINT (15.534855737667959 60.507160326533814)"
            },
            LocationSignature: "Orn"
          },
          {
            AdvertisedShortLocationName: "Råsjön",
            Geometry: {
              SWEREF99TM: "POINT (350601 6524109)",
              WGS84: "POINT (12.411869005756531 58.830883644439105)"
            },
            LocationSignature: "Rån"
          },
          {
            AdvertisedShortLocationName: "Rundvik",
            Geometry: {
              SWEREF99TM: "POINT (719276 7054009)",
              WGS84: "POINT (19.414275614981324 63.546143659567711)"
            },
            LocationSignature: "Ruk"
          },
          {
            AdvertisedShortLocationName: "Roback",
            Geometry: {
              SWEREF99TM: "POINT (558802 6988398)",
              WGS84: "POINT (16.161748314141715 63.020441134030555)"
            },
            LocationSignature: "Rob"
          },
          {
            AdvertisedShortLocationName: "Storfors",
            Geometry: {
              SWEREF99TM: "POINT (458808 6599633)",
              WGS84: "POINT (14.271725919543863 59.533027211130175)"
            },
            LocationSignature: "Sf"
          },
          {
            AdvertisedShortLocationName: "Orsa",
            Geometry: {
              SWEREF99TM: "POINT (479586 6776111)",
              WGS84: "POINT (14.621142303134159 61.119086858696981)"
            },
            LocationSignature: "Ors"
          },
          {
            AdvertisedShortLocationName: "Sköldinge",
            Geometry: {
              SWEREF99TM: "POINT (583467 6544328)",
              WGS84: "POINT (16.45415369808121 59.030244230381648)"
            },
            LocationSignature: "Sde"
          },
          {
            AdvertisedShortLocationName: "Rågsveden",
            Geometry: {
              SWEREF99TM: "POINT (448617 6705182)",
              WGS84: "POINT (14.065207108436699 60.479529466895464)"
            },
            LocationSignature: "Råg"
          },
          {
            AdvertisedShortLocationName: "Katterat",
            Geometry: {
              SWEREF99TM: "POINT (621815 7590163)",
              WGS84: "POINT (17.96585545435336 68.397927960629048)"
            },
            LocationSignature: "No.kat"
          },
          {
            AdvertisedShortLocationName: "Säffle",
            Geometry: {
              SWEREF99TM: "POINT (380755 6556651)",
              WGS84: "POINT (12.916233752704398 59.132350230118163)"
            },
            LocationSignature: "Sfl"
          },
          {
            AdvertisedShortLocationName: "Kongsvinger",
            Geometry: {
              SWEREF99TM: "POINT (335298 6684842)",
              WGS84: "POINT (12.02248806430466 60.266799200065392)"
            },
            LocationSignature: "No.kvg"
          },
          {
            AdvertisedShortLocationName: "Råskogen",
            Geometry: {
              SWEREF99TM: "POINT (347985 6503166)",
              WGS84: "POINT (12.380774693383422 58.642076222333287)"
            },
            LocationSignature: "Rås"
          },
          {
            AdvertisedShortLocationName: "Skellefteå",
            Geometry: {
              SWEREF99TM: "POINT (783111 7194307)",
              WGS84: "POINT (20.955692728423887 64.7534893095815)"
            },
            LocationSignature: "Skl"
          },
          {
            AdvertisedShortLocationName: "Runsala",
            Geometry: {
              SWEREF99TM: "POINT (508831.7 6525473.4)",
              WGS84: "POINT (15.153141020844931 58.868982538155272)"
            },
            LocationSignature: "Rus"
          },
          {
            AdvertisedShortLocationName: "Storflon",
            Geometry: {
              SWEREF99TM: "POINT (469297 7024875)",
              WGS84: "POINT (14.38646015440119 63.351273637214234)"
            },
            LocationSignature: "Sfn"
          },
          {
            AdvertisedShortLocationName: "Stehag",
            Geometry: {
              SWEREF99TM: "POINT (399549 6196149)",
              WGS84: "POINT (13.393432999610381 55.900294268863576)"
            },
            LocationSignature: "Sg"
          },
          {
            AdvertisedShortLocationName: "Sandsjönäs",
            Geometry: {
              SWEREF99TM: "POINT (624433 7238192)",
              WGS84: "POINT (17.663578350756822 65.243250853796255)"
            },
            LocationSignature: "Sdnä"
          },
          {
            AdvertisedShortLocationName: "Ormaryd",
            Geometry: {
              SWEREF99TM: "POINT (489943 6391498)",
              WGS84: "POINT (14.83142566464959 57.6656372007004)"
            },
            LocationSignature: "Ory"
          },
          {
            AdvertisedShortLocationName: "Räppe",
            Geometry: {
              SWEREF99TM: "POINT (483966 6304473)",
              WGS84: "POINT (14.736876367762379 56.883718818515376)"
            },
            LocationSignature: "Räp"
          },
          {
            AdvertisedShortLocationName: "Rågön",
            Geometry: {
              SWEREF99TM: "POINT (708855 7028404)",
              WGS84: "POINT (19.171657671328106 63.323252082708052)"
            },
            LocationSignature: "Råö"
          },
          {
            AdvertisedShortLocationName: "Rautas",
            Geometry: {
              SWEREF99TM: "POINT (704657 7550344)",
              WGS84: "POINT (19.898623718290882 67.994277165560121)"
            },
            LocationSignature: "Rut"
          },
          {
            AdvertisedShortLocationName: "Lilleström",
            Geometry: {
              SWEREF99TM: "POINT (279504 6653136)",
              WGS84: "POINT (11.050513104916602 59.95638189788172)"
            },
            LocationSignature: "No.lil"
          },
          {
            AdvertisedShortLocationName: "Smålandsstenar",
            Geometry: {
              SWEREF99TM: "POINT (404136 6336471)",
              WGS84: "POINT (13.414984120812575 57.161439070463523)"
            },
            LocationSignature: "Sdr"
          },
          {
            AdvertisedShortLocationName: "Stenkumla",
            Geometry: {
              SWEREF99TM: "POINT (502504.3 6535755)",
              WGS84: "POINT (15.043540496106248 58.961402574229091)"
            },
            LocationSignature: "Skm"
          },
          {
            AdvertisedShortLocationName: "Selsjön",
            Geometry: {
              SWEREF99TM: "POINT (610864 7021703)",
              WGS84: "POINT (17.212300470653009 63.30695899653184)"
            },
            LocationSignature: "Slj"
          },
          {
            AdvertisedShortLocationName: "Skorped",
            Geometry: {
              SWEREF99TM: "POINT (642893 7031720)",
              WGS84: "POINT (17.859506824237766 63.385405632136184)"
            },
            LocationSignature: "Sop"
          },
          {
            AdvertisedShortLocationName: "Lilleström",
            Geometry: {
              SWEREF99TM: "POINT (279504 6653136)",
              WGS84: "POINT (11.050513104916602 59.95638189788172)"
            },
            LocationSignature: "No.lls"
          },
          {
            AdvertisedShortLocationName: "Skymossen",
            Geometry: {
              SWEREF99TM: "POINT (505104 6542280)",
              WGS84: "POINT (15.088890430516072 59.0199782095557)"
            },
            LocationSignature: "Skms"
          },
          {
            AdvertisedShortLocationName: "Narvik",
            Geometry: {
              SWEREF99TM: "POINT (597871 7593449)",
              WGS84: "POINT (17.386687780396514 68.436692169074973)"
            },
            LocationSignature: "No.nk"
          },
          {
            AdvertisedShortLocationName: "Segmon",
            Geometry: {
              SWEREF99TM: "POINT (388215 6572289)",
              WGS84: "POINT (13.038469712460678 59.274728717365008)"
            },
            LocationSignature: "Sgm"
          },
          {
            AdvertisedShortLocationName: "Skänninge",
            Geometry: {
              SWEREF99TM: "POINT (505409 6472429)",
              WGS84: "POINT (15.092523585317286 58.392639453402019)"
            },
            LocationSignature: "Skn"
          },
          {
            AdvertisedShortLocationName: "Rödberg",
            Geometry: {
              SWEREF99TM: "POINT (357876 6395340)",
              WGS84: "POINT (12.616641374379133 57.677817072540776)"
            },
            LocationSignature: "Rö"
          },
          {
            AdvertisedShortLocationName: "Smedby",
            Geometry: {
              SWEREF99TM: "POINT (575563.12 6282177.6)",
              WGS84: "POINT (16.233273816065285 56.677593116831659)"
            },
            LocationSignature: "Sdy"
          },
          {
            AdvertisedShortLocationName: "Solum",
            Geometry: {
              SWEREF99TM: "POINT (640366 7001480)",
              WGS84: "POINT (17.78278119477315 63.115328435085253)"
            },
            LocationSignature: "Slm"
          },
          {
            AdvertisedShortLocationName: "Svedala",
            Geometry: {
              SWEREF99TM: "POINT (388343 6152619)",
              WGS84: "POINT (13.232044543038519 55.506880996857916)"
            },
            LocationSignature: "Sea"
          },
          {
            AdvertisedShortLocationName: "Strängnäs",
            Geometry: {
              SWEREF99TM: "POINT (615260 6583042)",
              WGS84: "POINT (17.028206598634636 59.3702999656302)"
            },
            LocationSignature: "Sgs"
          },
          {
            AdvertisedShortLocationName: "Skoghall",
            Geometry: {
              SWEREF99TM: "POINT (411976 6577805)",
              WGS84: "POINT (13.452965645817976 59.329857473199461)"
            },
            LocationSignature: "Skog"
          },
          {
            AdvertisedShortLocationName: "Oslo",
            Geometry: {
              SWEREF99TM: "POINT (261724 6649955)",
              WGS84: "POINT (10.736695251219352 59.917997253722511)"
            },
            LocationSignature: "No.osl"
          },
          {
            AdvertisedShortLocationName: "Sparreholm",
            Geometry: {
              SWEREF99TM: "POINT (604819 6549930)",
              WGS84: "POINT (16.828620214429925 59.075822223116731)"
            },
            LocationSignature: "Sp"
          },
          {
            AdvertisedShortLocationName: "Skene",
            Geometry: {
              SWEREF99TM: "POINT (359101 6374196)",
              WGS84: "POINT (12.649438952203928 57.488433688435435)"
            },
            LocationSignature: "See"
          },
          {
            AdvertisedShortLocationName: "Storsjö",
            Geometry: {
              SWEREF99TM: "POINT (580576 6436009)",
              WGS84: "POINT (16.365446134528018 58.058239667222558)"
            },
            LocationSignature: "Soö"
          },
          {
            AdvertisedShortLocationName: "Rönninge",
            Geometry: {
              SWEREF99TM: "POINT (657205 6564844)",
              WGS84: "POINT (17.752228203359241 59.193512662470383)"
            },
            LocationSignature: "Rön"
          },
          {
            AdvertisedShortLocationName: "Rörstorp",
            Geometry: {
              SWEREF99TM: "POINT (443411 6336955)",
              WGS84: "POINT (14.064114622877709 57.172307229907418)"
            },
            LocationSignature: "Röp"
          },
          {
            AdvertisedShortLocationName: "Sellnäs",
            Geometry: {
              SWEREF99TM: "POINT (520968 6697509)",
              WGS84: "POINT (15.380681426914334 60.413367416719012)"
            },
            LocationSignature: "Slnä"
          },
          {
            AdvertisedShortLocationName: "Sege",
            Geometry: {
              SWEREF99TM: "POINT (379365 6165135)",
              WGS84: "POINT (13.084511307194273 55.617148224182365)"
            },
            LocationSignature: "Sege"
          },
          {
            AdvertisedShortLocationName: "Skeppshult",
            Geometry: {
              SWEREF99TM: "POINT (400527 6332500)",
              WGS84: "POINT (13.356921656768593 57.125013517332015)"
            },
            LocationSignature: "Sph"
          },
          {
            AdvertisedShortLocationName: "Sveg",
            Geometry: {
              SWEREF99TM: "POINT (466099 6878189)",
              WGS84: "POINT (14.352013954814712 62.034465796261614)"
            },
            LocationSignature: "S"
          },
          {
            AdvertisedShortLocationName: "Rombak",
            Geometry: {
              SWEREF99TM: "POINT (614603 7590572)",
              WGS84: "POINT (17.790981037982274 68.404611741576389)"
            },
            LocationSignature: "No.rom"
          },
          {
            AdvertisedShortLocationName: "Skåre",
            Geometry: {
              SWEREF99TM: "POINT (411972 6588894)",
              WGS84: "POINT (13.448354239269 59.4294007372681)"
            },
            LocationSignature: "Skr"
          },
          {
            AdvertisedShortLocationName: "Slagnäs",
            Geometry: {
              SWEREF99TM: "POINT (645598 7277410)",
              WGS84: "POINT (18.15790291390821 65.58590556818578)"
            },
            LocationSignature: "Sgä"
          },
          {
            AdvertisedShortLocationName: "Sandared",
            Geometry: {
              SWEREF99TM: "POINT (368475 6398515)",
              WGS84: "POINT (12.792492091722931 57.709536517615255)"
            },
            LocationSignature: "Sae"
          },
          {
            AdvertisedShortLocationName: "Stöde",
            Geometry: {
              SWEREF99TM: "POINT (582597 6921968)",
              WGS84: "POINT (16.599124847135592 62.419786822717022)"
            },
            LocationSignature: "Std"
          },
          {
            AdvertisedShortLocationName: "Sävedalen",
            Geometry: {
              SWEREF99TM: "POINT (325349 6402755)",
              WGS84: "POINT (12.066539308173493 57.732895484174549)"
            },
            LocationSignature: "Sel"
          },
          {
            AdvertisedShortLocationName: "Stjärnhov",
            Geometry: {
              SWEREF99TM: "POINT (614920 6551010)",
              WGS84: "POINT (17.00528336867815 59.082912614046933)"
            },
            LocationSignature: "Sh"
          },
          {
            AdvertisedShortLocationName: "Skogstorp",
            Geometry: {
              SWEREF99TM: "POINT (583829 6577931)",
              WGS84: "POINT (16.4733846209059 59.331842555940774)"
            },
            LocationSignature: "Skrp"
          },
          {
            AdvertisedShortLocationName: "Spjutsbygd",
            Geometry: {
              SWEREF99TM: "POINT (536765 6240771)",
              WGS84: "POINT (15.59426050523745 56.310267193630715)"
            },
            LocationSignature: "Spj"
          },
          {
            AdvertisedShortLocationName: "Skäret",
            Geometry: {
              SWEREF99TM: "POINT (496081 6639711)",
              WGS84: "POINT (14.929960916776981 59.894921475782404)"
            },
            LocationSignature: "Skrt"
          },
          {
            AdvertisedShortLocationName: "Söderhamn",
            Geometry: {
              SWEREF99TM: "POINT (612710 6798209)",
              WGS84: "POINT (17.104148640998115 61.301704582426694)"
            },
            LocationSignature: "Shm"
          },
          {
            AdvertisedShortLocationName: "Svarte",
            Geometry: {
              SWEREF99TM: "POINT (418865 6143229)",
              WGS84: "POINT (13.717903263237991 55.42854773824731)"
            },
            LocationSignature: "Ste"
          },
          {
            AdvertisedShortLocationName: "Stugsund",
            Geometry: {
              SWEREF99TM: "POINT (613073 6798591)",
              WGS84: "POINT (17.111150373636789 61.305026537221011)"
            },
            LocationSignature: "Stu"
          },
          {
            AdvertisedShortLocationName: "Surahammar",
            Geometry: {
              SWEREF99TM: "POINT (568627 6619365)",
              WGS84: "POINT (16.219628483296361 59.706578911211061)"
            },
            LocationSignature: "Shr"
          },
          {
            AdvertisedShortLocationName: "Stegsskogen",
            Geometry: {
              SWEREF99TM: "POINT (615885 6859205)",
              WGS84: "POINT (17.201841413927134 61.847946073730995)"
            },
            LocationSignature: "Sten"
          },
          {
            AdvertisedShortLocationName: "Skållerud",
            Geometry: {
              SWEREF99TM: "POINT (350775 6518520)",
              WGS84: "POINT (12.418609413146058 58.780800673490013)"
            },
            LocationSignature: "Skru"
          },
          {
            AdvertisedShortLocationName: "Staffanstorp",
            Geometry: {
              SWEREF99TM: "POINT (387687 6167792)",
              WGS84: "POINT (13.215492382876871 55.643002786170982)"
            },
            LocationSignature: "Saf"
          },
          {
            AdvertisedShortLocationName: "Skebokvarn",
            Geometry: {
              SWEREF99TM: "POINT (598495 6548595)",
              WGS84: "POINT (16.717755282048962 59.065346388483583)"
            },
            LocationSignature: "Skv"
          },
          {
            AdvertisedShortLocationName: "Stavre",
            Geometry: {
              SWEREF99TM: "POINT (515888 6966253)",
              WGS84: "POINT (15.311813908268146 62.8261046063748)"
            },
            LocationSignature: "Stv"
          },
          {
            AdvertisedShortLocationName: "Spjutbäcken",
            Geometry: {
              SWEREF99TM: "POINT (450996 6576967)",
              WGS84: "POINT (14.138812446400333 59.328667214016939)"
            },
            LocationSignature: "Spjb"
          },
          {
            AdvertisedShortLocationName: "Sandträsk",
            Geometry: {
              SWEREF99TM: "POINT (784942 7348411)",
              WGS84: "POINT (21.318035263104164 66.126636503113673)"
            },
            LocationSignature: "Stä"
          },
          {
            AdvertisedShortLocationName: "Sandbäck",
            Geometry: {
              SWEREF99TM: "POINT (477302 6224338)",
              WGS84: "POINT (14.634516797526306 56.1635083574034)"
            },
            LocationSignature: "Sak"
          },
          {
            AdvertisedShortLocationName: "Söderhamn",
            Geometry: {
              SWEREF99TM: "POINT (609009 6797836)",
              WGS84: "POINT (17.034891223664339 61.299410608317388)"
            },
            LocationSignature: "Shv"
          },
          {
            AdvertisedShortLocationName: "Strömstad",
            Geometry: {
              SWEREF99TM: "POINT (279823 6539287)",
              WGS84: "POINT (11.1733627688164 58.936535605175337)"
            },
            LocationSignature: "Smd"
          },
          {
            AdvertisedShortLocationName: "Sandhem",
            Geometry: {
              SWEREF99TM: "POINT (427437 6428069)",
              WGS84: "POINT (13.772749414804583 57.988321871987225)"
            },
            LocationSignature: "Sm"
          },
          {
            AdvertisedShortLocationName: "Skästra",
            Geometry: {
              SWEREF99TM: "POINT (561471 6846776)",
              WGS84: "POINT (16.164100840576378 61.749061769049078)"
            },
            LocationSignature: "Skä"
          },
          {
            AdvertisedShortLocationName: "Stora Höga",
            Geometry: {
              SWEREF99TM: "POINT (313104 6435169)",
              WGS84: "POINT (11.835770406511925 58.018679221911853)"
            },
            LocationSignature: "Sth"
          },
          {
            AdvertisedShortLocationName: "Sollefteå",
            Geometry: {
              SWEREF99TM: "POINT (614057 7006212)",
              WGS84: "POINT (17.265051135823938 63.167034173664369)"
            },
            LocationSignature: "Stå"
          },
          {
            AdvertisedShortLocationName: "Storbergets industrispår",
            Geometry: {
              SWEREF99TM: "POINT (570325 7126379)",
              WGS84: "POINT (16.451184975680246 64.256316672507225)"
            },
            LocationSignature: "Sti"
          },
          {
            AdvertisedShortLocationName: "Sprängsviken",
            Geometry: {
              SWEREF99TM: "POINT (646069 6973292)",
              WGS84: "POINT (17.870747931644434 62.860391621841849)"
            },
            LocationSignature: "Spk"
          },
          {
            AdvertisedShortLocationName: "Simrishamn",
            Geometry: {
              SWEREF99TM: "POINT (459063 6156593)",
              WGS84: "POINT (14.351074101494959 55.55363173275493)"
            },
            LocationSignature: "Si"
          },
          {
            AdvertisedShortLocationName: "Samnan",
            Geometry: {
              SWEREF99TM: "POINT (648462 6644534)",
              WGS84: "POINT (17.655060740975056 59.911514935381284)"
            },
            LocationSignature: "Sam"
          },
          {
            AdvertisedShortLocationName: "Sannarp",
            Geometry: {
              SWEREF99TM: "POINT (370964 6284465)",
              WGS84: "POINT (12.893372380138683 56.686435547151994)"
            },
            LocationSignature: "Sarp"
          },
          {
            AdvertisedShortLocationName: "Sala",
            Geometry: {
              SWEREF99TM: "POINT (589691 6644223)",
              WGS84: "POINT (16.604516640444668 59.925695407493045)"
            },
            LocationSignature: "Sl"
          },
          {
            AdvertisedShortLocationName: "Silverdalen",
            Geometry: {
              SWEREF99TM: "POINT (544462 6378040)",
              WGS84: "POINT (15.742764090382453 57.542676980528654)"
            },
            LocationSignature: "Sic"
          },
          {
            AdvertisedShortLocationName: "Salsta",
            Geometry: {
              SWEREF99TM: "POINT (651939 6659735)",
              WGS84: "POINT (17.728363874288274 60.046588997281752)"
            },
            LocationSignature: "Sas"
          },
          {
            AdvertisedShortLocationName: "Strångsjö",
            Geometry: {
              SWEREF99TM: "POINT (569013 6530217)",
              WGS84: "POINT (16.198003964139417 58.906125626239479)"
            },
            LocationSignature: "Stö"
          },
          {
            AdvertisedShortLocationName: "Stjerneskolan",
            Geometry: {
              SWEREF99TM: "POINT (389543 6668562)",
              WGS84: "POINT (13.011138231141132 60.139069155249075)"
            },
            LocationSignature: "Stje"
          },
          {
            AdvertisedShortLocationName: "Silverdalens bruk",
            Geometry: {
              SWEREF99TM: "POINT (545451 6377329)",
              WGS84: "POINT (15.75915150207357 57.536192577453889)"
            },
            LocationSignature: "Sid"
          },
          {
            AdvertisedShortLocationName: "Sundsvall",
            Geometry: {
              SWEREF99TM: "POINT (619690 6919389)",
              WGS84: "POINT (17.3148892715914 62.386574177817089)"
            },
            LocationSignature: "Suc"
          },
          {
            AdvertisedShortLocationName: "Sundbyberg",
            Geometry: {
              SWEREF99TM: "POINT (668912 6584003)",
              WGS84: "POINT (17.971824561472314 59.360838317032425)"
            },
            LocationSignature: "Sub"
          },
          {
            AdvertisedShortLocationName: "Sikträsk",
            Geometry: {
              SWEREF99TM: "POINT (735348 7461139)",
              WGS84: "POINT (20.442293859154649 67.174443815630383)"
            },
            LocationSignature: "Stk"
          },
          {
            AdvertisedShortLocationName: "Stolpstugan",
            Geometry: {
              SWEREF99TM: "POINT (577157 6542175)",
              WGS84: "POINT (16.343503947215989 59.012100756745205)"
            },
            LocationSignature: "Spn"
          },
          {
            AdvertisedShortLocationName: "Sikfors",
            Geometry: {
              SWEREF99TM: "POINT (476647 6629992)",
              WGS84: "POINT (14.583740202151063 59.807010243716242)"
            },
            LocationSignature: "Sif"
          },
          {
            AdvertisedShortLocationName: "Stora Tuna",
            Geometry: {
              SWEREF99TM: "POINT (527346 6700715)",
              WGS84: "POINT (15.496910794427853 60.441770792130612)"
            },
            LocationSignature: "Sau"
          },
          {
            AdvertisedShortLocationName: "Solbacka",
            Geometry: {
              SWEREF99TM: "POINT (621548 6932612)",
              WGS84: "POINT (17.360123886905132 62.504561984557014)"
            },
            LocationSignature: "Slbk"
          },
          {
            AdvertisedShortLocationName: "Skabersjö",
            Geometry: {
              SWEREF99TM: "POINT (383500 6155756)",
              WGS84: "POINT (13.154086208249646 55.533923829898541)"
            },
            LocationSignature: "Saö"
          },
          {
            AdvertisedShortLocationName: "Smedjebacken",
            Geometry: {
              SWEREF99TM: "POINT (522531 6666683)",
              WGS84: "POINT (15.405616814828029 60.136507138660271)"
            },
            LocationSignature: "Smj"
          },
          {
            AdvertisedShortLocationName: "Spännarhyttan",
            Geometry: {
              SWEREF99TM: "POINT (552383 6661730)",
              WGS84: "POINT (15.941699476552369 60.089304068013512)"
            },
            LocationSignature: "Spy"
          },
          {
            AdvertisedShortLocationName: "Sommen",
            Geometry: {
              SWEREF99TM: "POINT (498721 6444939)",
              WGS84: "POINT (14.978273741361638 58.145764815245464)"
            },
            LocationSignature: "Smn"
          },
          {
            AdvertisedShortLocationName: "Silinge",
            Geometry: {
              SWEREF99TM: "POINT (589965 6542478)",
              WGS84: "POINT (16.566558595964707 59.012317134739433)"
            },
            LocationSignature: "Sii"
          },
          {
            AdvertisedShortLocationName: "Slätte",
            Geometry: {
              SWEREF99TM: "POINT (453776 6514095)",
              WGS84: "POINT (14.200876979556378 58.76440956698508)"
            },
            LocationSignature: "Sle"
          },
          {
            AdvertisedShortLocationName: "Surte",
            Geometry: {
              SWEREF99TM: "POINT (322638 6413130)",
              WGS84: "POINT (12.013395423210866 57.824899347663006)"
            },
            LocationSignature: "Sue"
          },
          {
            AdvertisedShortLocationName: "Spånga",
            Geometry: {
              SWEREF99TM: "POINT (664563 6586405)",
              WGS84: "POINT (17.897261239158393 59.384100766747025)"
            },
            LocationSignature: "Spå"
          },
          {
            AdvertisedShortLocationName: "Ställdalen",
            Geometry: {
              SWEREF99TM: "POINT (496743 6644109)",
              WGS84: "POINT (14.941722782907375 59.934418521082947)"
            },
            LocationSignature: "Stl"
          },
          {
            AdvertisedShortLocationName: "Svartvik",
            Geometry: {
              SWEREF99TM: "POINT (622661 6912377)",
              WGS84: "POINT (17.367331283741219 62.3227211980573)"
            },
            LocationSignature: "Sik"
          },
          {
            AdvertisedShortLocationName: "Stora Levene",
            Geometry: {
              SWEREF99TM: "POINT (378521 6466869)",
              WGS84: "POINT (12.925755809778781 58.325924689921088)"
            },
            LocationSignature: "Stlv"
          },
          {
            AdvertisedShortLocationName: "Strömsbro",
            Geometry: {
              SWEREF99TM: "POINT (617626 6731219)",
              WGS84: "POINT (17.154727803682743 60.699255771763639)"
            },
            LocationSignature: "Smo"
          },
          {
            AdvertisedShortLocationName: "Spannarboda",
            Geometry: {
              SWEREF99TM: "POINT (528668 6604334)",
              WGS84: "POINT (15.507496877379213 59.576284760582261)"
            },
            LocationSignature: "Sba"
          },
          {
            AdvertisedShortLocationName: "Sällinge",
            Geometry: {
              SWEREF99TM: "POINT (527183 6598027)",
              WGS84: "POINT (15.480402696805758 59.51974983820795)"
            },
            LocationSignature: "Slg"
          },
          {
            AdvertisedShortLocationName: "Sorsele industrispår",
            Geometry: {
              SWEREF99TM: "POINT (616513 7273522)",
              WGS84: "POINT (17.524532150432055 65.56284205320398)"
            },
            LocationSignature: "Sir"
          },
          {
            AdvertisedShortLocationName: "Sturefors",
            Geometry: {
              SWEREF99TM: "POINT (542850 6465967)",
              WGS84: "POINT (15.731734349300964 58.332542452836613)"
            },
            LocationSignature: "Suf"
          },
          {
            AdvertisedShortLocationName: "Storå",
            Geometry: {
              SWEREF99TM: "POINT (507917 6620113)",
              WGS84: "POINT (15.140746230592448 59.718883901339424)"
            },
            LocationSignature: "Sr"
          },
          {
            AdvertisedShortLocationName: "Saluböle",
            Geometry: {
              SWEREF99TM: "POINT (713485 7045933)",
              WGS84: "POINT (19.287222243131669 63.477402226263429)"
            },
            LocationSignature: "Sbe"
          },
          {
            AdvertisedShortLocationName: "Smedstorp",
            Geometry: {
              SWEREF99TM: "POINT (444326 6156300)",
              WGS84: "POINT (14.117551769530129 55.549539915968204)"
            },
            LocationSignature: "Smp"
          },
          {
            AdvertisedShortLocationName: "Storträsk",
            Geometry: {
              SWEREF99TM: "POINT (737039 7235123)",
              WGS84: "POINT (20.060009177003472 65.153989069627585)"
            },
            LocationSignature: "Sto"
          },
          {
            AdvertisedShortLocationName: "Skuckuviken",
            Geometry: {
              SWEREF99TM: "POINT (474272 6963329)",
              WGS84: "POINT (14.495525426698515 62.799301189793781)"
            },
            LocationSignature: "Sui"
          },
          {
            AdvertisedShortLocationName: "Smålands Burseryd",
            Geometry: {
              SWEREF99TM: "POINT (396513 6341297)",
              WGS84: "POINT (13.287002621905463 57.203118073895794)"
            },
            LocationSignature: "Smu"
          },
          {
            AdvertisedShortLocationName: "Sunderby sjh",
            Geometry: {
              SWEREF99TM: "POINT (818281 7301076)",
              WGS84: "POINT (21.935408035503961 65.6732855914292)"
            },
            LocationSignature: "Sus"
          },
          {
            AdvertisedShortLocationName: "Söderbärke",
            Geometry: {
              SWEREF99TM: "POINT (529893 6659606)",
              WGS84: "POINT (15.537110664376323 60.072492580553146)"
            },
            LocationSignature: "Sre"
          },
          {
            AdvertisedShortLocationName: "Sjisjka",
            Geometry: {
              SWEREF99TM: "POINT (722137 7510547)",
              WGS84: "POINT (20.234529083666388 67.6258895982425)"
            },
            LocationSignature: "Sjka"
          },
          {
            AdvertisedShortLocationName: "Sundsvall V",
            Geometry: {
              SWEREF99TM: "POINT (618565 6919673)",
              WGS84: "POINT (17.293346549612117 62.389481062371765)"
            },
            LocationSignature: "Suv"
          },
          {
            AdvertisedShortLocationName: "Simonstorp",
            Geometry: {
              SWEREF99TM: "POINT (566886 6516570)",
              WGS84: "POINT (16.156996572441429 58.783925618010969)"
            },
            LocationSignature: "Smt"
          },
          {
            AdvertisedShortLocationName: "Stockviksverkens nedre",
            Geometry: {
              SWEREF99TM: "POINT (622222 6915084)",
              WGS84: "POINT (17.360772943985879 62.347142890333828)"
            },
            LocationSignature: "Ston"
          },
          {
            AdvertisedShortLocationName: "Storuman",
            Geometry: {
              SWEREF99TM: "POINT (599123 7220804)",
              WGS84: "POINT (17.109871461011323 65.095952701913134)"
            },
            LocationSignature: "Sum"
          },
          {
            AdvertisedShortLocationName: "Simeå",
            Geometry: {
              SWEREF99TM: "POINT (570456 6827210)",
              WGS84: "POINT (16.32665245950934 61.571915713983934)"
            },
            LocationSignature: "Små"
          },
          {
            AdvertisedShortLocationName: "Storblåliden",
            Geometry: {
              SWEREF99TM: "POINT (751479 7269103)",
              WGS84: "POINT (20.428929311592029 65.4468376000125)"
            },
            LocationSignature: "Sbi"
          },
          {
            AdvertisedShortLocationName: "Sörtjärn",
            Geometry: {
              SWEREF99TM: "POINT (480824 6912418)",
              WGS84: "POINT (14.629719298049542 62.342743935781115)"
            },
            LocationSignature: "Srn"
          },
          {
            AdvertisedShortLocationName: "Svågertorp",
            Geometry: {
              SWEREF99TM: "POINT (373395 6157521)",
              WGS84: "POINT (12.993273173200761 55.547257888462028)"
            },
            LocationSignature: "Stp"
          },
          {
            AdvertisedShortLocationName: "Stenkullen",
            Geometry: {
              SWEREF99TM: "POINT (340374 6408690)",
              WGS84: "POINT (12.314619869123824 57.791737153290768)"
            },
            LocationSignature: "Sn"
          },
          {
            AdvertisedShortLocationName: "Sunne",
            Geometry: {
              SWEREF99TM: "POINT (396262 6634543)",
              WGS84: "POINT (13.149171416519311 59.835524624821204)"
            },
            LocationSignature: "Sun"
          },
          {
            AdvertisedShortLocationName: "Storebro",
            Geometry: {
              SWEREF99TM: "POINT (550955 6382719)",
              WGS84: "POINT (15.852201866816793 57.584017739143221)"
            },
            LocationSignature: "Sro"
          },
          {
            AdvertisedShortLocationName: "Storlien",
            Geometry: {
              SWEREF99TM: "POINT (354763 7024076)",
              WGS84: "POINT (12.100571617339952 63.315944076714366)"
            },
            LocationSignature: "Str"
          },
          {
            AdvertisedShortLocationName: "Storvik",
            Geometry: {
              SWEREF99TM: "POINT (584067 6717197)",
              WGS84: "POINT (16.53429590414158 60.5818777468156)"
            },
            LocationSignature: "Sv"
          },
          {
            AdvertisedShortLocationName: "Skövde",
            Geometry: {
              SWEREF99TM: "POINT (432874 6472597)",
              WGS84: "POINT (13.851859935889941 58.389037126922062)"
            },
            LocationSignature: "Sk"
          },
          {
            AdvertisedShortLocationName: "Stenbacken",
            Geometry: {
              SWEREF99TM: "POINT (686052 7577504)",
              WGS84: "POINT (19.502393049398613 68.249751885590385)"
            },
            LocationSignature: "Sbk"
          },
          {
            AdvertisedShortLocationName: "Snickarbo",
            Geometry: {
              SWEREF99TM: "POINT (558581 6673165)",
              WGS84: "POINT (16.056387976160508 60.191122630579585)"
            },
            LocationSignature: "Snb"
          },
          {
            AdvertisedShortLocationName: "Skinnskatteberg",
            Geometry: {
              SWEREF99TM: "POINT (538770 6632973)",
              WGS84: "POINT (15.6915987074977 59.832619990163607)"
            },
            LocationSignature: "Skb"
          },
          {
            AdvertisedShortLocationName: "Söderby",
            Geometry: {
              SWEREF99TM: "POINT (659554 6565262)",
              WGS84: "POINT (17.793602828281763 59.196385520619955)"
            },
            LocationSignature: "Södy"
          },
          {
            AdvertisedShortLocationName: "Skurup",
            Geometry: {
              SWEREF99TM: "POINT (405082 6149256)",
              WGS84: "POINT (13.498125673867094 55.48021075529136)"
            },
            LocationSignature: "Srp"
          },
          {
            AdvertisedShortLocationName: "Skutskär",
            Geometry: {
              SWEREF99TM: "POINT (631558.2 6723541)",
              WGS84: "POINT (17.404550712054245 60.626036920231392)"
            },
            LocationSignature: "Sur"
          },
          {
            AdvertisedShortLocationName: "Sölvesborg",
            Geometry: {
              SWEREF99TM: "POINT (474033 6211661)",
              WGS84: "POINT (14.583113661977116 56.049444390426807)"
            },
            LocationSignature: "Sög"
          },
          {
            AdvertisedShortLocationName: "Svenstavik c",
            Geometry: {
              SWEREF99TM: "POINT (471193 6959788)",
              WGS84: "POINT (14.435763743165415 62.767290902019553)"
            },
            LocationSignature: "Svc"
          },
          {
            AdvertisedShortLocationName: "Skälebol",
            Geometry: {
              SWEREF99TM: "POINT (348550 6499243)",
              WGS84: "POINT (12.393122405138747 58.607077253166693)"
            },
            LocationSignature: "Skbl"
          },
          {
            AdvertisedShortLocationName: "Storsund",
            Geometry: {
              SWEREF99TM: "POINT (759099 7284504)",
              WGS84: "POINT (20.622095746627441 65.578385084284577)"
            },
            LocationSignature: "Sts"
          },
          {
            AdvertisedShortLocationName: "Skattkärr",
            Geometry: {
              SWEREF99TM: "POINT (424602 6586299)",
              WGS84: "POINT (13.671817264118239 59.408558448741744)"
            },
            LocationSignature: "Srr"
          },
          {
            AdvertisedShortLocationName: "Sandarne",
            Geometry: {
              SWEREF99TM: "POINT (615213 6794206)",
              WGS84: "POINT (17.14838141831547 61.265061123254718)"
            },
            LocationSignature: "Sne"
          },
          {
            AdvertisedShortLocationName: "Skavstaby",
            Geometry: {
              SWEREF99TM: "POINT (663677 6604933)",
              WGS84: "POINT (17.895877592113234 59.550615770046676)"
            },
            LocationSignature: "Skby"
          },
          {
            AdvertisedShortLocationName: "Säve",
            Geometry: {
              SWEREF99TM: "POINT (316531 6411094)",
              WGS84: "POINT (11.912290149559729 57.8041772605239)"
            },
            LocationSignature: "Sve"
          },
          {
            AdvertisedShortLocationName: "Skee",
            Geometry: {
              SWEREF99TM: "POINT (284841 6537538)",
              WGS84: "POINT (11.262054500281476 58.923408793593573)"
            },
            LocationSignature: "Ske"
          },
          {
            AdvertisedShortLocationName: "Södertälje kanal",
            Geometry: {
              SWEREF99TM: "POINT (651057 6563613)",
              WGS84: "POINT (17.643875413098179 59.184702201969614)"
            },
            LocationSignature: "Söka"
          },
          {
            AdvertisedShortLocationName: "Singsån",
            Geometry: {
              SWEREF99TM: "POINT (569671 6989553)",
              WGS84: "POINT (16.376906901147716 63.028879140607046)"
            },
            LocationSignature: "Sngå"
          },
          {
            AdvertisedShortLocationName: "Svenshögen",
            Geometry: {
              SWEREF99TM: "POINT (319667 6448919)",
              WGS84: "POINT (11.936140778928644 58.1447165547658)"
            },
            LocationSignature: "Svg"
          },
          {
            AdvertisedShortLocationName: "Trolmen",
            Geometry: {
              SWEREF99TM: "POINT (403978 6496119)",
              WGS84: "POINT (13.347926934850472 58.594828108595486)"
            },
            LocationSignature: "Trm"
          },
          {
            AdvertisedShortLocationName: "Strömtorp",
            Geometry: {
              SWEREF99TM: "POINT (466437 6568109)",
              WGS84: "POINT (14.411523962028872 59.250634638450187)"
            },
            LocationSignature: "Srt"
          },
          {
            AdvertisedShortLocationName: "Sösdala",
            Geometry: {
              SWEREF99TM: "POINT (417804 6210920)",
              WGS84: "POINT (13.680791457830793 56.036438632642408)"
            },
            LocationSignature: "Söla"
          },
          {
            AdvertisedShortLocationName: "Stöcke",
            Geometry: {
              SWEREF99TM: "POINT (759352 7079041)",
              WGS84: "POINT (20.258662343899111 63.742823781862853)"
            },
            LocationSignature: "Sök"
          },
          {
            AdvertisedShortLocationName: "Timrå",
            Geometry: {
              SWEREF99TM: "POINT (620084 6930534)",
              WGS84: "POINT (17.33027035317587 62.486402563214469)"
            },
            LocationSignature: "Trå"
          },
          {
            AdvertisedShortLocationName: "Skutskär norra",
            Geometry: {
              SWEREF99TM: "POINT (629645.8 6725145.5)",
              WGS84: "POINT (17.370689256465717 60.641053646503842)"
            },
            LocationSignature: "Surn"
          },
          {
            AdvertisedShortLocationName: "Sorsele",
            Geometry: {
              SWEREF99TM: "POINT (617481 7270459)",
              WGS84: "POINT (17.542801304424216 65.5350377770453)"
            },
            LocationSignature: "Srs"
          },
          {
            AdvertisedShortLocationName: "Tyringe",
            Geometry: {
              SWEREF99TM: "POINT (412950 6224732)",
              WGS84: "POINT (13.598412201416835 56.159642334609906)"
            },
            LocationSignature: "Ty"
          },
          {
            AdvertisedShortLocationName: "Skanlog",
            Geometry: {
              SWEREF99TM: "POINT (582054 6586100)",
              WGS84: "POINT (16.445314694769007 59.405526758583285)"
            },
            LocationSignature: "Snl"
          },
          {
            AdvertisedShortLocationName: "Skogås",
            Geometry: {
              SWEREF99TM: "POINT (679983 6568735)",
              WGS84: "POINT (18.153571867419188 59.219356858542994)"
            },
            LocationSignature: "Skg"
          },
          {
            AdvertisedShortLocationName: "Södra Vi",
            Geometry: {
              SWEREF99TM: "POINT (547206 6400068)",
              WGS84: "POINT (15.792900930341437 57.740248168463765)"
            },
            LocationSignature: "Svi"
          },
          {
            AdvertisedShortLocationName: "Storvreta",
            Geometry: {
              SWEREF99TM: "POINT (651119 6649635)",
              WGS84: "POINT (17.70624373515717 59.956302785355163)"
            },
            LocationSignature: "Srv"
          },
          {
            AdvertisedShortLocationName: "Tungelsta",
            Geometry: {
              SWEREF99TM: "POINT (674467 6555486)",
              WGS84: "POINT (18.046493774584693 59.102849543897172)"
            },
            LocationSignature: "Ts"
          },
          {
            AdvertisedShortLocationName: "Södertälje Syd",
            Geometry: {
              SWEREF99TM: "POINT (651243 6561248)",
              WGS84: "POINT (17.645486487135074 59.163419995708246)"
            },
            LocationSignature: "Söu"
          },
          {
            AdvertisedShortLocationName: "Svedje",
            Geometry: {
              SWEREF99TM: "POINT (647701 6954350)",
              WGS84: "POINT (17.886110047056334 62.689936777728128)"
            },
            LocationSignature: "Svj"
          },
          {
            AdvertisedShortLocationName: "Skelleftehamns övre",
            Geometry: {
              SWEREF99TM: "POINT (796728 7188191)",
              WGS84: "POINT (21.227539123222698 64.6871948391003)"
            },
            LocationSignature: "Söv"
          },
          {
            AdvertisedShortLocationName: "Stenstorp",
            Geometry: {
              SWEREF99TM: "POINT (424489 6459817)",
              WGS84: "POINT (13.712659768978105 58.27291618463623)"
            },
            LocationSignature: "Ss"
          },
          {
            AdvertisedShortLocationName: "Tågsjöberg",
            Geometry: {
              SWEREF99TM: "POINT (586190 7061806)",
              WGS84: "POINT (16.742004628585956 63.673493964630396)"
            },
            LocationSignature: "Tsg"
          },
          {
            AdvertisedShortLocationName: "Skönvik",
            Geometry: {
              SWEREF99TM: "POINT (620042 6928581)",
              WGS84: "POINT (17.32809106554911 62.468900592281145)"
            },
            LocationSignature: "Skk"
          },
          {
            AdvertisedShortLocationName: "Tyllered",
            Geometry: {
              SWEREF99TM: "POINT (341654 6322625)",
              WGS84: "POINT (12.391631696621602 57.019895940279277)"
            },
            LocationSignature: "Tye"
          },
          {
            AdvertisedShortLocationName: "Umeå östra",
            Geometry: {
              SWEREF99TM: "POINT (760375 7087563)",
              WGS84: "POINT (20.293588099058841 63.818221267698995)"
            },
            LocationSignature: "Uåö"
          },
          {
            AdvertisedShortLocationName: "Sjösa",
            Geometry: {
              SWEREF99TM: "POINT (621192 6517697)",
              WGS84: "POINT (17.096430406735053 58.782202300882012)"
            },
            LocationSignature: "Ssa"
          },
          {
            AdvertisedShortLocationName: "Tisselskog",
            Geometry: {
              SWEREF99TM: "POINT (349375 6531548)",
              WGS84: "POINT (12.385625007670573 58.897195485593159)"
            },
            LocationSignature: "Tsl"
          },
          {
            AdvertisedShortLocationName: "Svenstavik",
            Geometry: {
              SWEREF99TM: "POINT (471452 6960297)",
              WGS84: "POINT (14.440749903845948 62.771879518461937)"
            },
            LocationSignature: "Svk"
          },
          {
            AdvertisedShortLocationName: "Torsåker",
            Geometry: {
              SWEREF99TM: "POINT (581824 6709648)",
              WGS84: "POINT (16.490255793861195 60.514585348486307)"
            },
            LocationSignature: "Tså"
          },
          {
            AdvertisedShortLocationName: "Trångsund",
            Geometry: {
              SWEREF99TM: "POINT (678632 6569613)",
              WGS84: "POINT (18.13066308690351 59.2278010926431)"
            },
            LocationSignature: "Tåd"
          },
          {
            AdvertisedShortLocationName: "Snyten",
            Geometry: {
              SWEREF99TM: "POINT (557116 6650923)",
              WGS84: "POINT (16.023763005988446 59.991648546326765)"
            },
            LocationSignature: "Snt"
          },
          {
            AdvertisedShortLocationName: "Umeå godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (757378 7090273)",
              WGS84: "POINT (20.237474894671792 63.844654058682444)"
            },
            LocationSignature: "Uågb"
          },
          {
            AdvertisedShortLocationName: "Sävast",
            Geometry: {
              SWEREF99TM: "POINT (809485 7310118)",
              WGS84: "POINT (21.766516268166626 65.762411500931563)"
            },
            LocationSignature: "Svt"
          },
          {
            AdvertisedShortLocationName: "Södertälje S",
            Geometry: {
              SWEREF99TM: "POINT (651385 6561240)",
              WGS84: "POINT (17.647961677699406 59.163297667082155)"
            },
            LocationSignature: "Söö"
          },
          {
            AdvertisedShortLocationName: "Stenungsund",
            Geometry: {
              SWEREF99TM: "POINT (312732 6441211)",
              WGS84: "POINT (11.824676822456842 58.072708573314962)"
            },
            LocationSignature: "Snu"
          },
          {
            AdvertisedShortLocationName: "Tortuna",
            Geometry: {
              SWEREF99TM: "POINT (596928 6615899)",
              WGS84: "POINT (16.720767162038683 59.66983642782106)"
            },
            LocationSignature: "Ttu"
          },
          {
            AdvertisedShortLocationName: "Strömsholm",
            Geometry: {
              SWEREF99TM: "POINT (571767 6596523)",
              WGS84: "POINT (16.267670411516967 59.500982622928277)"
            },
            LocationSignature: "Ssh"
          },
          {
            AdvertisedShortLocationName: "Sandviken",
            Geometry: {
              SWEREF99TM: "POINT (597298 6721135)",
              WGS84: "POINT (16.777588390617641 60.614229442263586)"
            },
            LocationSignature: "Snv"
          },
          {
            AdvertisedShortLocationName: "Uddevalla Ö",
            Geometry: {
              SWEREF99TM: "POINT (321230 6471776)",
              WGS84: "POINT (11.945058028507319 58.350355715864424)"
            },
            LocationSignature: "Uö"
          },
          {
            AdvertisedShortLocationName: "Töreboda",
            Geometry: {
              SWEREF99TM: "POINT (449426 6507486)",
              WGS84: "POINT (14.127171288759493 58.704573123619056)"
            },
            LocationSignature: "T"
          },
          {
            AdvertisedShortLocationName: "Stockholms södra",
            Geometry: {
              SWEREF99TM: "POINT (674193 6578955)",
              WGS84: "POINT (18.060508539616663 59.313422739013326)"
            },
            LocationSignature: "Sst"
          },
          {
            AdvertisedShortLocationName: "Svappavaara",
            Geometry: {
              SWEREF99TM: "POINT (754197 7517145)",
              WGS84: "POINT (21.000230748164466 67.658755321732514)"
            },
            LocationSignature: "Svv"
          },
          {
            AdvertisedShortLocationName: "Tumba",
            Geometry: {
              SWEREF99TM: "POINT (662096 6565716)",
              WGS84: "POINT (17.838385524043542 59.199494369094495)"
            },
            LocationSignature: "Tu"
          },
          {
            AdvertisedShortLocationName: "Värnamo",
            Geometry: {
              SWEREF99TM: "POINT (441733 6338545)",
              WGS84: "POINT (14.035995992549305 57.186378585516657)"
            },
            LocationSignature: "V"
          },
          {
            AdvertisedShortLocationName: "Taberg",
            Geometry: {
              SWEREF99TM: "POINT (445550 6393304)",
              WGS84: "POINT (14.086971324390367 57.678678622316184)"
            },
            LocationSignature: "Tag"
          },
          {
            AdvertisedShortLocationName: "Vara",
            Geometry: {
              SWEREF99TM: "POINT (379809 6459592)",
              WGS84: "POINT (12.95151028626041 58.260961628756981)"
            },
            LocationSignature: "Vaa"
          },
          {
            AdvertisedShortLocationName: "Tunadal",
            Geometry: {
              SWEREF99TM: "POINT (623407 6921657)",
              WGS84: "POINT (17.388325109569184 62.405701585389721)"
            },
            LocationSignature: "Tud"
          },
          {
            AdvertisedShortLocationName: "Trångsviken",
            Geometry: {
              SWEREF99TM: "POINT (450598 7022943)",
              WGS84: "POINT (14.013444875942062 63.331841669071174)"
            },
            LocationSignature: "Tåv"
          },
          {
            AdvertisedShortLocationName: "Tillberga",
            Geometry: {
              SWEREF99TM: "POINT (591435 6617720)",
              WGS84: "POINT (16.624087476646721 59.68742415596676)"
            },
            LocationSignature: "Tb"
          },
          {
            AdvertisedShortLocationName: "Vad",
            Geometry: {
              SWEREF99TM: "POINT (535864 6655173)",
              WGS84: "POINT (15.6436137387409 60.032211267941534)"
            },
            LocationSignature: "Vad"
          },
          {
            AdvertisedShortLocationName: "Skytts Vemmerlöv",
            Geometry: {
              SWEREF99TM: "POINT (383138 6141983)",
              WGS84: "POINT (13.154144494652416 55.410141427277154)"
            },
            LocationSignature: "Svö"
          },
          {
            AdvertisedShortLocationName: "Svartå",
            Geometry: {
              SWEREF99TM: "POINT (472292 6554886)",
              WGS84: "POINT (14.515860321730184 59.132314979381853)"
            },
            LocationSignature: "Svå"
          },
          {
            AdvertisedShortLocationName: "Stockaryd",
            Geometry: {
              SWEREF99TM: "POINT (475414 6351951)",
              WGS84: "POINT (14.591878829462207 57.309845252479448)"
            },
            LocationSignature: "Sy"
          },
          {
            AdvertisedShortLocationName: "Tullinge",
            Geometry: {
              SWEREF99TM: "POINT (665884 6566571)",
              WGS84: "POINT (17.905269419542879 59.205698927528871)"
            },
            LocationSignature: "Tul"
          },
          {
            AdvertisedShortLocationName: "Segersäng",
            Geometry: {
              SWEREF99TM: "POINT (667991 6547018)",
              WGS84: "POINT (17.927110595566532 59.029504897567406)"
            },
            LocationSignature: "Ssä"
          },
          {
            AdvertisedShortLocationName: "Tystberga",
            Geometry: {
              SWEREF99TM: "POINT (629016 6525340)",
              WGS84: "POINT (17.236070652701297 58.848522060712575)"
            },
            LocationSignature: "Tba"
          },
          {
            AdvertisedShortLocationName: "Vargön",
            Geometry: {
              SWEREF99TM: "POINT (347369 6471725)",
              WGS84: "POINT (12.391194643610309 58.359772561497209)"
            },
            LocationSignature: "Vag"
          },
          {
            AdvertisedShortLocationName: "Tunneby",
            Geometry: {
              SWEREF99TM: "POINT (443473 6257393)",
              WGS84: "POINT (14.082767770671795 56.457642618864028)"
            },
            LocationSignature: "Tun"
          },
          {
            AdvertisedShortLocationName: "Skillingaryd",
            Geometry: {
              SWEREF99TM: "POINT (445400 6365443)",
              WGS84: "POINT (14.090712832002865 57.428425417943011)"
            },
            LocationSignature: "Syd"
          },
          {
            AdvertisedShortLocationName: "Stuvsta",
            Geometry: {
              SWEREF99TM: "POINT (670885 6572252)",
              WGS84: "POINT (17.997188639671837 59.254661701565212)"
            },
            LocationSignature: "Sta"
          },
          {
            AdvertisedShortLocationName: "Stångby",
            Geometry: {
              SWEREF99TM: "POINT (386970 6179686)",
              WGS84: "POINT (13.199201061644683 55.749656202440093)"
            },
            LocationSignature: "Stb"
          },
          {
            AdvertisedShortLocationName: "Tväråbäck",
            Geometry: {
              SWEREF99TM: "POINT (730993 7104407)",
              WGS84: "POINT (19.724129384573281 63.989480436762896)"
            },
            LocationSignature: "Tvb"
          },
          {
            AdvertisedShortLocationName: "Torved",
            Geometry: {
              SWEREF99TM: "POINT (448068 6521056)",
              WGS84: "POINT (14.100594332661101 58.826269085859657)"
            },
            LocationSignature: "Tvd"
          },
          {
            AdvertisedShortLocationName: "Varjisträsk",
            Geometry: {
              SWEREF99TM: "POINT (705093 7332292)",
              WGS84: "POINT (19.529869928454637 66.044568401930064)"
            },
            LocationSignature: "Vaj"
          },
          {
            AdvertisedShortLocationName: "Alléparken",
            Geometry: {
              SWEREF99TM: "POINT (669195 6580426)",
              WGS84: "POINT (17.973987618728962 59.328646128444653)"
            },
            LocationSignature: "wAll"
          },
          {
            AdvertisedShortLocationName: "Aga",
            Geometry: {
              SWEREF99TM: "POINT (679479 6582868)",
              WGS84: "POINT (18.156476025262659 59.346296449912714)"
            },
            LocationSignature: "wAga"
          },
          {
            AdvertisedShortLocationName: "Skyttorp",
            Geometry: {
              SWEREF99TM: "POINT (652263 6663405)",
              WGS84: "POINT (17.7369006258753 60.079384892487)"
            },
            LocationSignature: "Syt"
          },
          {
            AdvertisedShortLocationName: "Tälle",
            Geometry: {
              SWEREF99TM: "POINT (501091 6545639)",
              WGS84: "POINT (15.019017352589032 59.050173123572272)"
            },
            LocationSignature: "Täl"
          },
          {
            AdvertisedShortLocationName: "Säter",
            Geometry: {
              SWEREF99TM: "POINT (541785 6690251)",
              WGS84: "POINT (15.75707875341139 60.346589456337419)"
            },
            LocationSignature: "St"
          },
          {
            AdvertisedShortLocationName: "Tjörnarp",
            Geometry: {
              SWEREF99TM: "POINT (414638 6207090)",
              WGS84: "POINT (13.631212179236938 56.001482609448786)"
            },
            LocationSignature: "Tö"
          },
          {
            AdvertisedShortLocationName: "Alvik",
            Geometry: {
              SWEREF99TM: "POINT (669627 6580979)",
              WGS84: "POINT (17.982003937832268 59.333432105336861)"
            },
            LocationSignature: "wAlv"
          },
          {
            AdvertisedShortLocationName: "Tvärålund",
            Geometry: {
              SWEREF99TM: "POINT (727820 7116492)",
              WGS84: "POINT (19.677608488593513 64.099664131461154)"
            },
            LocationSignature: "Tvä"
          },
          {
            AdvertisedShortLocationName: "Stenåsen",
            Geometry: {
              SWEREF99TM: "POINT (405909 6597271)",
              WGS84: "POINT (13.337844988313991 59.503281542468557)"
            },
            LocationSignature: "Sån"
          },
          {
            AdvertisedShortLocationName: "Vissefjärda",
            Geometry: {
              SWEREF99TM: "POINT (535828 6266114)",
              WGS84: "POINT (15.582586142693545 56.538016942124543)"
            },
            LocationSignature: "Vfa"
          },
          {
            AdvertisedShortLocationName: "Vänersborg",
            Geometry: {
              SWEREF99TM: "POINT (343207 6473870)",
              WGS84: "POINT (12.318685025914473 58.377548604339857)"
            },
            LocationSignature: "Vg"
          },
          {
            AdvertisedShortLocationName: "Viskafors",
            Geometry: {
              SWEREF99TM: "POINT (371326 6389481)",
              WGS84: "POINT (12.84512087808266 57.629270780655169)"
            },
            LocationSignature: "Vfo"
          },
          {
            AdvertisedShortLocationName: "Töva",
            Geometry: {
              SWEREF99TM: "POINT (609136 6917597)",
              WGS84: "POINT (17.109809779390329 62.37374129482955)"
            },
            LocationSignature: "Töv"
          },
          {
            AdvertisedShortLocationName: "Söråkers södra",
            Geometry: {
              SWEREF99TM: "POINT (625494 6937818)",
              WGS84: "POINT (17.440481170671575 62.549933385119772)"
            },
            LocationSignature: "Sårs"
          },
          {
            AdvertisedShortLocationName: "Baggeby",
            Geometry: {
              SWEREF99TM: "POINT (678141 6583980)",
              WGS84: "POINT (18.133905338031912 59.35683449080269)"
            },
            LocationSignature: "wBag"
          },
          {
            AdvertisedShortLocationName: "Varberg",
            Geometry: {
              SWEREF99TM: "POINT (333348 6332926)",
              WGS84: "POINT (12.248148605641644 57.109404357338668)"
            },
            LocationSignature: "Vb"
          },
          {
            AdvertisedShortLocationName: "Tösse",
            Geometry: {
              SWEREF99TM: "POINT (364511 6539251)",
              WGS84: "POINT (12.643358969894535 58.97135854973525)"
            },
            LocationSignature: "Töe"
          },
          {
            AdvertisedShortLocationName: "Klövervägen",
            Geometry: {
              SWEREF99TM: "POINT (669208 6579986)",
              WGS84: "POINT (17.973870734398464 59.324694958930337)"
            },
            LocationSignature: "wKlv"
          },
          {
            AdvertisedShortLocationName: "Vaggeryd",
            Geometry: {
              SWEREF99TM: "POINT (448782 6373168)",
              WGS84: "POINT (14.145410375900997 57.498203709590534)"
            },
            LocationSignature: "Vgd"
          },
          {
            AdvertisedShortLocationName: "Vega",
            Geometry: {
              SWEREF99TM: "POINT (679142 6565064.8)",
              WGS84: "POINT (18.135840879679357 59.186802676715665)"
            },
            LocationSignature: "Vga"
          },
          {
            AdvertisedShortLocationName: "Kottla",
            Geometry: {
              SWEREF99TM: "POINT (680828 6582722)",
              WGS84: "POINT (18.1800359947369 59.344411379668557)"
            },
            LocationSignature: "wKoa"
          },
          {
            AdvertisedShortLocationName: "Uppsala",
            Geometry: {
              SWEREF99TM: "POINT (648345 6638550)",
              WGS84: "POINT (17.648693814369921 59.857881697817483)"
            },
            LocationSignature: "U"
          },
          {
            AdvertisedShortLocationName: "Västra Bodarne",
            Geometry: {
              SWEREF99TM: "POINT (350250 6418989)",
              WGS84: "POINT (12.474109701084204 57.887564065583405)"
            },
            LocationSignature: "Vbd"
          },
          {
            AdvertisedShortLocationName: "Käppala",
            Geometry: {
              SWEREF99TM: "POINT (682924 6583742)",
              WGS84: "POINT (18.217695117662636 59.352653287383589)"
            },
            LocationSignature: "wKäp"
          },
          {
            AdvertisedShortLocationName: "Vallsta",
            Geometry: {
              SWEREF99TM: "POINT (572750 6821257)",
              WGS84: "POINT (16.367481271382928 61.518063691991316)"
            },
            LocationSignature: "Vl"
          },
          {
            AdvertisedShortLocationName: "Bodal",
            Geometry: {
              SWEREF99TM: "POINT (678416 6583643)",
              WGS84: "POINT (18.138455611843831 59.353696475730722)"
            },
            LocationSignature: "wBod"
          },
          {
            AdvertisedShortLocationName: "Vårgårda",
            Geometry: {
              SWEREF99TM: "POINT (370633 6434276)",
              WGS84: "POINT (12.809253563632469 58.031143570805469)"
            },
            LocationSignature: "Vgå"
          },
          {
            AdvertisedShortLocationName: "Ulriksdal",
            Geometry: {
              SWEREF99TM: "POINT (670491 6586185)",
              WGS84: "POINT (18.00129058481793 59.3797706297159)"
            },
            LocationSignature: "Udl"
          },
          {
            AdvertisedShortLocationName: "Larsberg",
            Geometry: {
              SWEREF99TM: "POINT (678873 6583309)",
              WGS84: "POINT (18.146203151896497 59.350508075964285)"
            },
            LocationSignature: "wLab"
          },
          {
            AdvertisedShortLocationName: "Gåshaga",
            Geometry: {
              SWEREF99TM: "POINT (683482 6584223)",
              WGS84: "POINT (18.227902262967749 59.356723541320626)"
            },
            LocationSignature: "wGåh"
          },
          {
            AdvertisedShortLocationName: "Brevik",
            Geometry: {
              SWEREF99TM: "POINT (682149 6583230)",
              WGS84: "POINT (18.203654485120779 59.348398005363443)"
            },
            LocationSignature: "wBvi"
          },
          {
            AdvertisedShortLocationName: "Vinlidsberg",
            Geometry: {
              SWEREF99TM: "POINT (597229 7211936)",
              WGS84: "POINT (17.063427485714946 65.016996406809682)"
            },
            LocationSignature: "Vld"
          },
          {
            AdvertisedShortLocationName: "Vegeholm",
            Geometry: {
              SWEREF99TM: "POINT (363158 6231493)",
              WGS84: "POINT (12.793779564559399 56.20865773217615)"
            },
            LocationSignature: "Vh"
          },
          {
            AdvertisedShortLocationName: "Vännäsby",
            Geometry: {
              SWEREF99TM: "POINT (736173 7096492)",
              WGS84: "POINT (19.817416135342015 63.915223210714174)"
            },
            LocationSignature: "Vby"
          },
          {
            AdvertisedShortLocationName: "Ulriksfors",
            Geometry: {
              SWEREF99TM: "POINT (530547 7078477)",
              WGS84: "POINT (15.620817312727549 63.832312201347108)"
            },
            LocationSignature: "Uf"
          },
          {
            AdvertisedShortLocationName: "Vilhelmsborg",
            Geometry: {
              SWEREF99TM: "POINT (419753 6143041)",
              WGS84: "POINT (13.73198571879785 55.427005031975433)"
            },
            LocationSignature: "Vlb"
          },
          {
            AdvertisedShortLocationName: "Gåshaga brygga",
            Geometry: {
              SWEREF99TM: "POINT (683822 6584256)",
              WGS84: "POINT (18.233900831405908 59.356871363470781)"
            },
            LocationSignature: "wGåb"
          },
          {
            AdvertisedShortLocationName: "Vallnäs",
            Geometry: {
              SWEREF99TM: "POINT (528363 6386249)",
              WGS84: "POINT (15.474793537802535 57.617708533968148)"
            },
            LocationSignature: "Vln"
          },
          {
            AdvertisedShortLocationName: "Ulvshyttan",
            Geometry: {
              SWEREF99TM: "POINT (519703 6688228)",
              WGS84: "POINT (15.356803337692019 60.33010085615723)"
            },
            LocationSignature: "Uly"
          },
          {
            AdvertisedShortLocationName: "Vattholma",
            Geometry: {
              SWEREF99TM: "POINT (652177 6657351)",
              WGS84: "POINT (17.730865290008413 60.02511868161011)"
            },
            LocationSignature: "Vha"
          },
          {
            AdvertisedShortLocationName: "Undersåker",
            Geometry: {
              SWEREF99TM: "POINT (411745 7021898)",
              WGS84: "POINT (13.238468868154436 63.314993806109705)"
            },
            LocationSignature: "Un"
          },
          {
            AdvertisedShortLocationName: "Uppsala norra",
            Geometry: {
              SWEREF99TM: "POINT (646262 6639501)",
              WGS84: "POINT (17.612216446551198 59.867154527317211)"
            },
            LocationSignature: "Una"
          },
          {
            AdvertisedShortLocationName: "Värmlands Bro",
            Geometry: {
              SWEREF99TM: "POINT (386518 6562380)",
              WGS84: "POINT (13.013889775896303 59.185344492542917)"
            },
            LocationSignature: "Vdb"
          },
          {
            AdvertisedShortLocationName: "Vagnhärad",
            Geometry: {
              SWEREF99TM: "POINT (643765 6536707)",
              WGS84: "POINT (17.49878397536677 58.945834700227039)"
            },
            LocationSignature: "Vhd"
          },
          {
            AdvertisedShortLocationName: "Vindeln",
            Geometry: {
              SWEREF99TM: "POINT (728727 7128236)",
              WGS84: "POINT (19.713976874034127 64.20409934111386)"
            },
            LocationSignature: "Vdn"
          },
          {
            AdvertisedShortLocationName: "Höglandstorget",
            Geometry: {
              SWEREF99TM: "POINT (667275 6579764)",
              WGS84: "POINT (17.939777900735383 59.323474134169345)"
            },
            LocationSignature: "wHlt"
          },
          {
            AdvertisedShortLocationName: "Västerhaninge",
            Geometry: {
              SWEREF99TM: "POINT (677618 6557882)",
              WGS84: "POINT (18.103366450191004 59.12303313879594)"
            },
            LocationSignature: "Vhe"
          },
          {
            AdvertisedShortLocationName: "Veddige",
            Geometry: {
              SWEREF99TM: "POINT (339402 6350213)",
              WGS84: "POINT (12.336845403258469 57.266682893872741)"
            },
            LocationSignature: "Vdi"
          },
          {
            AdvertisedShortLocationName: "Upplands Väsby",
            Geometry: {
              SWEREF99TM: "POINT (664013 6601588)",
              WGS84: "POINT (17.899233873234227 59.520484953244853)"
            },
            LocationSignature: "Upv"
          },
          {
            AdvertisedShortLocationName: "Väse",
            Geometry: {
              SWEREF99TM: "POINT (434849 6583110)",
              WGS84: "POINT (13.853246879190458 59.381638023283962)"
            },
            LocationSignature: "Ve"
          },
          {
            AdvertisedShortLocationName: "Vedevåg",
            Geometry: {
              SWEREF99TM: "POINT (515971 6598391)",
              WGS84: "POINT (15.282285132489159 59.523595975577507)"
            },
            LocationSignature: "Vdv"
          },
          {
            AdvertisedShortLocationName: "Ulvstorp",
            Geometry: {
              SWEREF99TM: "POINT (481366 6370538)",
              WGS84: "POINT (14.68926900521358 57.4770900942035)"
            },
            LocationSignature: "Utp"
          },
          {
            AdvertisedShortLocationName: "Vikmanshyttan",
            Geometry: {
              SWEREF99TM: "POINT (547671 6684755)",
              WGS84: "POINT (15.862408417564374 60.296597860917281)"
            },
            LocationSignature: "Vhy"
          },
          {
            AdvertisedShortLocationName: "Uddevalla",
            Geometry: {
              SWEREF99TM: "POINT (319985 6472264)",
              WGS84: "POINT (11.92343684034566 58.354223335381008)"
            },
            LocationSignature: "Uv"
          },
          {
            AdvertisedShortLocationName: "Utsikten",
            Geometry: {
              SWEREF99TM: "POINT (665389 6566261)",
              WGS84: "POINT (17.896377300602548 59.2031118281726)"
            },
            LocationSignature: "Uts"
          },
          {
            AdvertisedShortLocationName: "Högberga",
            Geometry: {
              SWEREF99TM: "POINT (681615 6582752)",
              WGS84: "POINT (18.193876545373673 59.3443423712286)"
            },
            LocationSignature: "wHöb"
          },
          {
            AdvertisedShortLocationName: "Via",
            Geometry: {
              SWEREF99TM: "POINT (615469 6854731)",
              WGS84: "POINT (17.191079582866042 61.80793952683063)"
            },
            LocationSignature: "Via"
          },
          {
            AdvertisedShortLocationName: "Velanda Södra",
            Geometry: {
              SWEREF99TM: "POINT (342903 6456115)",
              WGS84: "POINT (12.325544559205545 58.218145415698153)"
            },
            LocationSignature: "Veas"
          },
          {
            AdvertisedShortLocationName: "Wibe",
            Geometry: {
              SWEREF99TM: "POINT (474250 6761102)",
              WGS84: "POINT (14.5241409312912 60.984029545968724)"
            },
            LocationSignature: "Wibe"
          },
          {
            AdvertisedShortLocationName: "Vimmerby",
            Geometry: {
              SWEREF99TM: "POINT (551218 6391520)",
              WGS84: "POINT (15.858462336452869 57.663034933118141)"
            },
            LocationSignature: "Vib"
          },
          {
            AdvertisedShortLocationName: "Vedum",
            Geometry: {
              SWEREF99TM: "POINT (382272 6449271)",
              WGS84: "POINT (12.998680295557389 58.168983333147388)"
            },
            LocationSignature: "Ved"
          },
          {
            AdvertisedShortLocationName: "Umeå",
            Geometry: {
              SWEREF99TM: "POINT (758960 7088780)",
              WGS84: "POINT (20.26700335933932 63.830145338113354)"
            },
            LocationSignature: "Uå"
          },
          {
            AdvertisedShortLocationName: "Ursviken",
            Geometry: {
              SWEREF99TM: "POINT (793761 7190280)",
              WGS84: "POINT (21.169963182259128 64.708429103863025)"
            },
            LocationSignature: "Uvn"
          },
          {
            AdvertisedShortLocationName: "Vislanda",
            Geometry: {
              SWEREF99TM: "POINT (466797 6293992)",
              WGS84: "POINT (14.456503391464464 56.78865375112148)"
            },
            LocationSignature: "Vs"
          },
          {
            AdvertisedShortLocationName: "Vimmerby Hamra",
            Geometry: {
              SWEREF99TM: "POINT (551885 6388643)",
              WGS84: "POINT (15.869022590346383 57.63711876388124)"
            },
            LocationSignature: "Vibh"
          },
          {
            AdvertisedShortLocationName: "Skara",
            Geometry: {
              SWEREF99TM: "POINT (408731 6472423)",
              WGS84: "POINT (13.439133971127497 58.383109667082614)"
            },
            LocationSignature: "wSa"
          },
          {
            AdvertisedShortLocationName: "Vikingstad",
            Geometry: {
              SWEREF99TM: "POINT (525319 6471487)",
              WGS84: "POINT (15.432983306582676 58.383480569219309)"
            },
            LocationSignature: "Vsd"
          },
          {
            AdvertisedShortLocationName: "Valskog",
            Geometry: {
              SWEREF99TM: "POINT (553946 6589829)",
              WGS84: "POINT (15.951253655535792 59.443550861026786)"
            },
            LocationSignature: "Vsg"
          },
          {
            AdvertisedShortLocationName: "V. Ingelstad",
            Geometry: {
              SWEREF99TM: "POINT (380367 6151119)",
              WGS84: "POINT (13.106475478453619 55.491522424202245)"
            },
            LocationSignature: "Vid"
          },
          {
            AdvertisedShortLocationName: "Vikersvik",
            Geometry: {
              SWEREF99TM: "POINT (492054 6591789)",
              WGS84: "POINT (14.859800877442353 59.464539581160821)"
            },
            LocationSignature: "Vik"
          },
          {
            AdvertisedShortLocationName: "Västra Ämtervik",
            Geometry: {
              SWEREF99TM: "POINT (395812 6622546)",
              WGS84: "POINT (13.147127417799577 59.727740269934941)"
            },
            LocationSignature: "Vät"
          },
          {
            AdvertisedShortLocationName: "Vartofta",
            Geometry: {
              SWEREF99TM: "POINT (419114 6439790)",
              WGS84: "POINT (13.628000302571145 58.0921342693588)"
            },
            LocationSignature: "Vf"
          },
          {
            AdvertisedShortLocationName: "Västeraspby",
            Geometry: {
              SWEREF99TM: "POINT (638878 6994763)",
              WGS84: "POINT (17.747631407792724 63.055686897113183)"
            },
            LocationSignature: "Väy"
          },
          {
            AdvertisedShortLocationName: "Vuonoskogen",
            Geometry: {
              SWEREF99TM: "POINT (897129 7332022)",
              WGS84: "POINT (23.724902929037633 65.860469451108429)"
            },
            LocationSignature: "Vsk"
          },
          {
            AdvertisedShortLocationName: "Viarp",
            Geometry: {
              SWEREF99TM: "POINT (364440 6245300)",
              WGS84: "POINT (12.807348951422938 56.332983578012481)"
            },
            LocationSignature: "Vip"
          },
          {
            AdvertisedShortLocationName: "Växjö",
            Geometry: {
              SWEREF99TM: "POINT (488135 6303674)",
              WGS84: "POINT (14.805327926627928 56.876666244681225)"
            },
            LocationSignature: "Vö"
          },
          {
            AdvertisedShortLocationName: "Vimnarp",
            Geometry: {
              SWEREF99TM: "POINT (481693 6396204)",
              WGS84: "POINT (14.692784357841488 57.707648462130308)"
            },
            LocationSignature: "Vim"
          },
          {
            AdvertisedShortLocationName: "Vittsjö",
            Geometry: {
              SWEREF99TM: "POINT (417355 6244984)",
              WGS84: "POINT (13.662988629771739 56.342332381096334)"
            },
            LocationSignature: "Vsj"
          },
          {
            AdvertisedShortLocationName: "Skärsätra",
            Geometry: {
              SWEREF99TM: "POINT (680279 6582579)",
              WGS84: "POINT (18.170278855757868 59.343364096459055)"
            },
            LocationSignature: "wSkr"
          },
          {
            AdvertisedShortLocationName: "Vinslöv",
            Geometry: {
              SWEREF99TM: "POINT (432611 6218286)",
              WGS84: "POINT (13.916529317596337 56.104920792915152)"
            },
            LocationSignature: "Vöv"
          },
          {
            AdvertisedShortLocationName: "Anten",
            Geometry: {
              SWEREF99TM: "POINT (348690 6430190)",
              WGS84: "POINT (12.440677771210064 57.987547162328589)"
            },
            LocationSignature: "xA"
          },
          {
            AdvertisedShortLocationName: "Smedslätten",
            Geometry: {
              SWEREF99TM: "POINT (668649 6579546)",
              WGS84: "POINT (17.963717645341116 59.320972586205741)"
            },
            LocationSignature: "wSms"
          },
          {
            AdvertisedShortLocationName: "Ankarsrum",
            Geometry: {
              SWEREF99TM: "POINT (579535 6396078)",
              WGS84: "POINT (16.334464810860112 57.69985651307497)"
            },
            LocationSignature: "xAkm"
          },
          {
            AdvertisedShortLocationName: "Altorp",
            Geometry: {
              SWEREF99TM: "POINT (674394 6589833)",
              WGS84: "POINT (18.07284721681037 59.410885681003634)"
            },
            LocationSignature: "xAlp"
          },
          {
            AdvertisedShortLocationName: "Almunge",
            Geometry: {
              SWEREF99TM: "POINT (670409 6641513)",
              WGS84: "POINT (18.044469400578777 59.875945507619221)"
            },
            LocationSignature: "xAlg"
          },
          {
            AdvertisedShortLocationName: "Virsbo",
            Geometry: {
              SWEREF99TM: "POINT (560711 6637637)",
              WGS84: "POINT (16.084287806932494 59.871855109392925)"
            },
            LocationSignature: "Vso"
          },
          {
            AdvertisedShortLocationName: "Sissehult",
            Geometry: {
              SWEREF99TM: "POINT (523498 6339842)",
              WGS84: "POINT (15.388913604373016 57.201128460461618)"
            },
            LocationSignature: "wSsu"
          },
          {
            AdvertisedShortLocationName: "Arelid",
            Geometry: {
              SWEREF99TM: "POINT (350316 6433975)",
              WGS84: "POINT (12.465749217001125 58.022061001629488)"
            },
            LocationSignature: "xArl"
          },
          {
            AdvertisedShortLocationName: "Aska",
            Geometry: {
              SWEREF99TM: "POINT (498727 6479278)",
              WGS84: "POINT (14.978186718728612 58.454184991564546)"
            },
            LocationSignature: "xAsk"
          },
          {
            AdvertisedShortLocationName: "Viresjö",
            Geometry: {
              SWEREF99TM: "POINT (553657 6451775)",
              WGS84: "POINT (15.912973109730595 58.203902731540808)"
            },
            LocationSignature: "Vsö"
          },
          {
            AdvertisedShortLocationName: "Bärby",
            Geometry: {
              SWEREF99TM: "POINT (657686 6638852)",
              WGS84: "POINT (17.815478304564717 59.857132957117287)"
            },
            LocationSignature: "xB"
          },
          {
            AdvertisedShortLocationName: "Vretstorp",
            Geometry: {
              SWEREF99TM: "POINT (492242 6542463)",
              WGS84: "POINT (14.864881658041284 59.021581712813649)"
            },
            LocationSignature: "Vt"
          },
          {
            AdvertisedShortLocationName: "Vetlanda",
            Geometry: {
              SWEREF99TM: "POINT (504902 6364804)",
              WGS84: "POINT (15.081629057016732 57.425938777634038)"
            },
            LocationSignature: "Vta"
          },
          {
            AdvertisedShortLocationName: "Blägda",
            Geometry: {
              SWEREF99TM: "POINT (567122 6385875)",
              WGS84: "POINT (16.123409956482053 57.610248961688647)"
            },
            LocationSignature: "xBlä"
          },
          {
            AdvertisedShortLocationName: "Vattnäs",
            Geometry: {
              SWEREF99TM: "POINT (478282 6768350)",
              WGS84: "POINT (14.597827372400163 61.0493419740301)"
            },
            LocationSignature: "Vtn"
          },
          {
            AdvertisedShortLocationName: "Västra Torup",
            Geometry: {
              SWEREF99TM: "POINT (407281 6223135)",
              WGS84: "POINT (13.507725853681846 56.144230143160463)"
            },
            LocationSignature: "Vto"
          },
          {
            AdvertisedShortLocationName: "Brobacka",
            Geometry: {
              SWEREF99TM: "POINT (348286 6429121)",
              WGS84: "POINT (12.434538316482998 57.977817370372122)"
            },
            LocationSignature: "xBb"
          },
          {
            AdvertisedShortLocationName: "Bråvallavägen",
            Geometry: {
              SWEREF99TM: "POINT (673718 6589201)",
              WGS84: "POINT (18.060444090481472 59.405497959798929)"
            },
            LocationSignature: "xBvv"
          },
          {
            AdvertisedShortLocationName: "Vitåfors",
            Geometry: {
              SWEREF99TM: "POINT (747229 7464338)",
              WGS84: "POINT (20.722180971398505 67.193447641838915)"
            },
            LocationSignature: "Vtå"
          },
          {
            AdvertisedShortLocationName: "Brösarp",
            Geometry: {
              SWEREF99TM: "POINT (445077 6176938)",
              WGS84: "POINT (14.125331508124054 55.735045660325262)"
            },
            LocationSignature: "xBöp"
          },
          {
            AdvertisedShortLocationName: "Torsvik",
            Geometry: {
              SWEREF99TM: "POINT (677200 6584504)",
              WGS84: "POINT (18.117810788530836 59.36192953892423)"
            },
            LocationSignature: "wTov"
          },
          {
            AdvertisedShortLocationName: "Bor Norra",
            Geometry: {
              SWEREF99TM: "POINT (449753 6330644)",
              WGS84: "POINT (14.170256813603578 57.116357851072983)"
            },
            LocationSignature: "xBn"
          },
          {
            AdvertisedShortLocationName: "Bällsta",
            Geometry: {
              SWEREF99TM: "POINT (673774 6602296)",
              WGS84: "POINT (18.072075530118497 59.522899466094422)"
            },
            LocationSignature: "xBäl"
          },
          {
            AdvertisedShortLocationName: "Vitvattnet",
            Geometry: {
              SWEREF99TM: "POINT (870403 7350846)",
              WGS84: "POINT (23.199019541268463 66.059737642515316)"
            },
            LocationSignature: "Vtv"
          },
          {
            AdvertisedShortLocationName: "Tallås Grusgropsväxel",
            Geometry: {
              SWEREF99TM: "POINT (576128 6749348)",
              WGS84: "POINT (16.401978040744993 60.872036548818734)"
            },
            LocationSignature: "wTås"
          },
          {
            AdvertisedShortLocationName: "Brösarp södra",
            Geometry: {
              SWEREF99TM: "POINT (445117 6176592)",
              WGS84: "POINT (14.126037896459557 55.731941628588196)"
            },
            LocationSignature: "xBös"
          },
          {
            AdvertisedShortLocationName: "Vallvik",
            Geometry: {
              SWEREF99TM: "POINT (614451 6786192)",
              WGS84: "POINT (17.129317681523769 61.193388572173731)"
            },
            LocationSignature: "Vv"
          },
          {
            AdvertisedShortLocationName: "Dirhuvden",
            Geometry: {
              SWEREF99TM: "POINT (349352 6431733)",
              WGS84: "POINT (12.450878204416583 58.00161741781681)"
            },
            LocationSignature: "xDir"
          },
          {
            AdvertisedShortLocationName: "Västerås",
            Geometry: {
              SWEREF99TM: "POINT (587636 6608747)",
              WGS84: "POINT (16.552911395701365 59.607695913469442)"
            },
            LocationSignature: "Vå"
          },
          {
            AdvertisedShortLocationName: "Ålstens Gård",
            Geometry: {
              SWEREF99TM: "POINT (667956 6579464)",
              WGS84: "POINT (17.951494334883026 59.320513351606344)"
            },
            LocationSignature: "wÅlG"
          },
          {
            AdvertisedShortLocationName: "Djursholms Ekeby",
            Geometry: {
              SWEREF99TM: "POINT (673517 6590027)",
              WGS84: "POINT (18.057576876345586 59.412987845686629)"
            },
            LocationSignature: "xDje"
          },
          {
            AdvertisedShortLocationName: "Dala kvarn",
            Geometry: {
              SWEREF99TM: "POINT (409100 6481419)",
              WGS84: "POINT (13.441878140986709 58.463953734933092)"
            },
            LocationSignature: "xDkn"
          },
          {
            AdvertisedShortLocationName: "Vålberg",
            Geometry: {
              SWEREF99TM: "POINT (397645 6585861)",
              WGS84: "POINT (13.197398736891367 59.398934277506505)"
            },
            LocationSignature: "Våb"
          },
          {
            AdvertisedShortLocationName: "Vallåkra",
            Geometry: {
              SWEREF99TM: "POINT (366559 6204117)",
              WGS84: "POINT (12.862229987247117 55.963827239580787)"
            },
            LocationSignature: "Våk"
          },
          {
            AdvertisedShortLocationName: "Djursholms Ösby",
            Geometry: {
              SWEREF99TM: "POINT (673613 6588236)",
              WGS84: "POINT (18.057816910970494 59.396887842703777)"
            },
            LocationSignature: "xDjö"
          },
          {
            AdvertisedShortLocationName: "Ekskogen",
            Geometry: {
              SWEREF99TM: "POINT (681862 6615634)",
              WGS84: "POINT (18.226243736528897 59.639050979118394)"
            },
            LocationSignature: "xEkg"
          },
          {
            AdvertisedShortLocationName: "Ålstensgatan",
            Geometry: {
              SWEREF99TM: "POINT (668187 6579789)",
              WGS84: "POINT (17.955800675611837 59.323336105347906)"
            },
            LocationSignature: "wÅls"
          },
          {
            AdvertisedShortLocationName: "Delsbo",
            Geometry: {
              SWEREF99TM: "POINT (581973 6852619)",
              WGS84: "POINT (16.554852663970188 61.7976518296692)"
            },
            LocationSignature: "xDo"
          },
          {
            AdvertisedShortLocationName: "Västerås norra",
            Geometry: {
              SWEREF99TM: "POINT (589236 6613051)",
              WGS84: "POINT (16.583068638375146 59.645991203887846)"
            },
            LocationSignature: "Vån"
          },
          {
            AdvertisedShortLocationName: "Väring",
            Geometry: {
              SWEREF99TM: "POINT (439371 6486125)",
              WGS84: "POINT (13.959383096702147 58.511465342624554)"
            },
            LocationSignature: "Vä"
          },
          {
            AdvertisedShortLocationName: "Västerås västra",
            Geometry: {
              SWEREF99TM: "POINT (585115 6607342)",
              WGS84: "POINT (16.50769251598782 59.595605235848161)"
            },
            LocationSignature: "Våv"
          },
          {
            AdvertisedShortLocationName: "Eken",
            Geometry: {
              SWEREF99TM: "POINT (710902 6382969)",
              WGS84: "POINT (18.523880337659939 57.539956467976495)"
            },
            LocationSignature: "xEkn"
          },
          {
            AdvertisedShortLocationName: "Ekebohult",
            Geometry: {
              SWEREF99TM: "POINT (458080 6338817)",
              WGS84: "POINT (14.306377784408138 57.190607044655621)"
            },
            LocationSignature: "xEkh"
          },
          {
            AdvertisedShortLocationName: "Enebyberg",
            Geometry: {
              SWEREF99TM: "POINT (673083 6591446)",
              WGS84: "POINT (18.051087404118764 59.425891223587023)"
            },
            LocationSignature: "xEnb"
          },
          {
            AdvertisedShortLocationName: "Ervalla NBVJ",
            Geometry: {
              SWEREF99TM: "POINT (514052 6587551)",
              WGS84: "POINT (15.247654109647817 59.426322622345715)"
            },
            LocationSignature: "xErn"
          },
          {
            AdvertisedShortLocationName: "Vätteryd",
            Geometry: {
              SWEREF99TM: "POINT (416154.04 6209037.7)",
              WGS84: "POINT (13.654906572522266 56.01924510051186)"
            },
            LocationSignature: "Väd"
          },
          {
            AdvertisedShortLocationName: "Vännäs norra",
            Geometry: {
              SWEREF99TM: "POINT (732335 7097796)",
              WGS84: "POINT (19.741427866518897 63.929462382550923)"
            },
            LocationSignature: "Vän"
          },
          {
            AdvertisedShortLocationName: "Erstaviksbadet",
            Geometry: {
              SWEREF99TM: "POINT (687190 6575060)",
              WGS84: "POINT (18.28506986875821 59.272944121224263)"
            },
            LocationSignature: "xEvb"
          },
          {
            AdvertisedShortLocationName: "Faringe",
            Geometry: {
              SWEREF99TM: "POINT (674105 6646599)",
              WGS84: "POINT (18.114658699900897 59.920006289693745)"
            },
            LocationSignature: "xF"
          },
          {
            AdvertisedShortLocationName: "Ensta",
            Geometry: {
              SWEREF99TM: "POINT (673661 6594390)",
              WGS84: "POINT (18.063647238304949 59.452052418805458)"
            },
            LocationSignature: "xEsa"
          },
          {
            AdvertisedShortLocationName: "Fagerrör",
            Geometry: {
              SWEREF99TM: "POINT (627160 6354160)",
              WGS84: "POINT (17.11117418092352 57.31263565346643)"
            },
            LocationSignature: "xFgr"
          },
          {
            AdvertisedShortLocationName: "Funbo",
            Geometry: {
              SWEREF99TM: "POINT (660154 6638106)",
              WGS84: "POINT (17.858906554137764 59.849493917586017)"
            },
            LocationSignature: "xFb"
          },
          {
            AdvertisedShortLocationName: "Hjorthagen",
            Geometry: {
              SWEREF99TM: "POINT (625552 6570708)",
              WGS84: "POINT (17.201992968372984 59.256680040461546)"
            },
            LocationSignature: "xHhn"
          },
          {
            AdvertisedShortLocationName: "Elgaryd",
            Geometry: {
              SWEREF99TM: "POINT (456358 6337527)",
              WGS84: "POINT (14.278113529822166 57.178858985355483)"
            },
            LocationSignature: "xEyd"
          },
          {
            AdvertisedShortLocationName: "Hjortöström",
            Geometry: {
              SWEREF99TM: "POINT (533175 6352261)",
              WGS84: "POINT (15.550731457084289 57.312086555924843)"
            },
            LocationSignature: "xHjm"
          },
          {
            AdvertisedShortLocationName: "Finkelboda",
            Geometry: {
              SWEREF99TM: "POINT (577840 6748039)",
              WGS84: "POINT (16.432968327153315 60.85995571438783)"
            },
            LocationSignature: "xFia"
          },
          {
            AdvertisedShortLocationName: "Fyrislund",
            Geometry: {
              SWEREF99TM: "POINT (650213 6638686)",
              WGS84: "POINT (17.682102807465331 59.858427026105161)"
            },
            LocationSignature: "xFl"
          },
          {
            AdvertisedShortLocationName: "Hjorted",
            Geometry: {
              SWEREF99TM: "POINT (574213 6391844)",
              WGS84: "POINT (16.243892252964947 57.662743120826086)"
            },
            LocationSignature: "xHjt"
          },
          {
            AdvertisedShortLocationName: "Fiskåsen",
            Geometry: {
              SWEREF99TM: "POINT (628050 6354832)",
              WGS84: "POINT (17.126287225305646 57.318419350276066)"
            },
            LocationSignature: "xFie"
          },
          {
            AdvertisedShortLocationName: "Flaten",
            Geometry: {
              SWEREF99TM: "POINT (540418 6358253)",
              WGS84: "POINT (15.671944539667296 57.365325202956939)"
            },
            LocationSignature: "xFla"
          },
          {
            AdvertisedShortLocationName: "Forsmöllan",
            Geometry: {
              SWEREF99TM: "POINT (386940 6220620)",
              WGS84: "POINT (13.181581395009614 56.117259332714028)"
            },
            LocationSignature: "xFmö"
          },
          {
            AdvertisedShortLocationName: "Forsa",
            Geometry: {
              SWEREF99TM: "POINT (602780 6846134)",
              WGS84: "POINT (16.945595482051544 61.734437626498334)"
            },
            LocationSignature: "xFsa"
          },
          {
            AdvertisedShortLocationName: "Fredriksfors",
            Geometry: {
              SWEREF99TM: "POINT (585457 6851376)",
              WGS84: "POINT (16.620318578057756 61.7857343060372)"
            },
            LocationSignature: "xFos"
          },
          {
            AdvertisedShortLocationName: "Fagersand",
            Geometry: {
              SWEREF99TM: "POINT (576858 6395553)",
              WGS84: "POINT (16.28939490890582 57.695607290144913)"
            },
            LocationSignature: "xFsd"
          },
          {
            AdvertisedShortLocationName: "Frösunda",
            Geometry: {
              SWEREF99TM: "POINT (678790 6613818)",
              WGS84: "POINT (18.170307313549305 59.624097014229065)"
            },
            LocationSignature: "xFsu"
          },
          {
            AdvertisedShortLocationName: "Gimarpsby",
            Geometry: {
              SWEREF99TM: "POINT (455314 6336075)",
              WGS84: "POINT (14.261106502924489 57.165715922027246)"
            },
            LocationSignature: "xGby"
          },
          {
            AdvertisedShortLocationName: "Gunsta",
            Geometry: {
              SWEREF99TM: "POINT (658755 6638414)",
              WGS84: "POINT (17.834203816484763 59.852795645294066)"
            },
            LocationSignature: "xGa"
          },
          {
            AdvertisedShortLocationName: "Fårhult",
            Geometry: {
              SWEREF99TM: "POINT (584549 6400395)",
              WGS84: "POINT (16.420080270411653 57.737707369910865)"
            },
            LocationSignature: "xFåt"
          },
          {
            AdvertisedShortLocationName: "Fisksätra",
            Geometry: {
              SWEREF99TM: "POINT (685420 6577335)",
              WGS84: "POINT (18.256014844936281 59.294120504032634)"
            },
            LocationSignature: "xFsä"
          },
          {
            AdvertisedShortLocationName: "Gripsholmsviken",
            Geometry: {
              SWEREF99TM: "POINT (625883 6570823)",
              WGS84: "POINT (17.207859994540851 59.257613717601636)"
            },
            LocationSignature: "xGhn"
          },
          {
            AdvertisedShortLocationName: "Gnötteln",
            Geometry: {
              SWEREF99TM: "POINT (553708 6375633)",
              WGS84: "POINT (15.896673367557071 57.520055302618047)"
            },
            LocationSignature: "xGnl"
          },
          {
            AdvertisedShortLocationName: "Gimarp",
            Geometry: {
              SWEREF99TM: "POINT (455930 6337015)",
              WGS84: "POINT (14.27112512240911 57.174219034496048)"
            },
            LocationSignature: "xGim"
          },
          {
            AdvertisedShortLocationName: "Gräfsnäs",
            Geometry: {
              SWEREF99TM: "POINT (352017 6440426)",
              WGS84: "POINT (12.490459181415128 58.080518052321082)"
            },
            LocationSignature: "xGr"
          },
          {
            AdvertisedShortLocationName: "Galoppfältet",
            Geometry: {
              SWEREF99TM: "POINT (674866 6593862)",
              WGS84: "POINT (18.084438120209207 59.446818060645725)"
            },
            LocationSignature: "xGpf"
          },
          {
            AdvertisedShortLocationName: "Gudå",
            Geometry: {
              SWEREF99TM: "POINT (354604 7024068)",
              WGS84: "POINT (12.097409536169001 63.315807840009228)"
            },
            LocationSignature: "Xgu"
          },
          {
            AdvertisedShortLocationName: "Gyllebosjö",
            Geometry: {
              SWEREF99TM: "POINT (450305 6161570)",
              WGS84: "POINT (14.211361581188745 55.597535069202451)"
            },
            LocationSignature: "xGyb"
          },
          {
            AdvertisedShortLocationName: "Gyttorp",
            Geometry: {
              SWEREF99TM: "POINT (498371 6595915)",
              WGS84: "POINT (14.971226414337908 59.50166298232147)"
            },
            LocationSignature: "xGyt"
          },
          {
            AdvertisedShortLocationName: "Hedlandet",
            Geometry: {
              SWEREF99TM: "POINT (627317 6569541)",
              WGS84: "POINT (17.232236307193496 59.245680901166018)"
            },
            LocationSignature: "xHdt"
          },
          {
            AdvertisedShortLocationName: "Gårdveda",
            Geometry: {
              SWEREF99TM: "POINT (545383 6360184)",
              WGS84: "POINT (15.754835549847648 57.382202255009318)"
            },
            LocationSignature: "xGåv"
          },
          {
            AdvertisedShortLocationName: "Hultarp",
            Geometry: {
              SWEREF99TM: "POINT (536773 6355766)",
              WGS84: "POINT (15.610979728013083 57.343294596861725)"
            },
            LocationSignature: "xHap"
          },
          {
            AdvertisedShortLocationName: "Hybo",
            Geometry: {
              SWEREF99TM: "POINT (562885 6852087)",
              WGS84: "POINT (16.192716031497113 61.796497886107204)"
            },
            LocationSignature: "xHbo"
          },
          {
            AdvertisedShortLocationName: "Henriksdal",
            Geometry: {
              SWEREF99TM: "POINT (676913 6578951)",
              WGS84: "POINT (18.108213766779954 59.3122566315866)"
            },
            LocationSignature: "xHed"
          },
          {
            AdvertisedShortLocationName: "Hell",
            Geometry: {
              SWEREF99TM: "POINT (299098 7036893)",
              WGS84: "POINT (10.976086984843768 63.40380375151755)"
            },
            LocationSignature: "Xhel"
          },
          {
            AdvertisedShortLocationName: "Hultsfreds Hembygdspark",
            Geometry: {
              SWEREF99TM: "POINT (551658 6372944)",
              WGS84: "POINT (15.861882846699331 57.496141865700196)"
            },
            LocationSignature: "xHhf"
          },
          {
            AdvertisedShortLocationName: "Hägernäs",
            Geometry: {
              SWEREF99TM: "POINT (677133 6594427)",
              WGS84: "POINT (18.124824565553563 59.450934820674334)"
            },
            LocationSignature: "xHgä"
          },
          {
            AdvertisedShortLocationName: "Ranheim",
            Geometry: {
              SWEREF99TM: "POINT (354604 7024068)",
              WGS84: "POINT (12.097409536169001 63.315807840009228)"
            },
            LocationSignature: "Xrhm"
          },
          {
            AdvertisedShortLocationName: "Rydbo",
            Geometry: {
              SWEREF99TM: "POINT (680453 6596199)",
              WGS84: "POINT (18.184784410871831 59.465410150469886)"
            },
            LocationSignature: "xRdb"
          },
          {
            AdvertisedShortLocationName: "Roslags Näsby",
            Geometry: {
              SWEREF99TM: "POINT (673421 6592556)",
              WGS84: "POINT (18.057934324630494 59.435705649465568)"
            },
            LocationSignature: "xRnb"
          },
          {
            AdvertisedShortLocationName: "Ravlundabro",
            Geometry: {
              SWEREF99TM: "POINT (446529 6174043)",
              WGS84: "POINT (14.149018022722705 55.709198356989113)"
            },
            LocationSignature: "xRav"
          },
          {
            AdvertisedShortLocationName: "Ravlunda bränneri",
            Geometry: {
              SWEREF99TM: "POINT (446738 6173872)",
              WGS84: "POINT (14.152377074144669 55.707685024652669)"
            },
            LocationSignature: "xRaä"
          },
          {
            AdvertisedShortLocationName: "Roma kungsgård",
            Geometry: {
              SWEREF99TM: "POINT (707746 6379766)",
              WGS84: "POINT (18.468528270418187 57.512696858595888)"
            },
            LocationSignature: "xRok"
          },
          {
            AdvertisedShortLocationName: "Skölsta",
            Geometry: {
              SWEREF99TM: "POINT (653610 6640610)",
              WGS84: "POINT (17.744099388332536 59.874435370075751)"
            },
            LocationSignature: "xSa"
          },
          {
            AdvertisedShortLocationName: "Ringvägen",
            Geometry: {
              SWEREF99TM: "POINT (688109 6576244)",
              WGS84: "POINT (18.302195429914828 59.283151567965852)"
            },
            LocationSignature: "xRvä"
          },
          {
            AdvertisedShortLocationName: "Skara camping",
            Geometry: {
              SWEREF99TM: "POINT (409755 6472766)",
              WGS84: "POINT (13.456504337730943 58.38640134505134)"
            },
            LocationSignature: "xSac"
          },
          {
            AdvertisedShortLocationName: "Rombakk",
            Geometry: {
              SWEREF99TM: "POINT (614603 7590572)",
              WGS84: "POINT (17.790981037982274 68.404611741576389)"
            },
            LocationSignature: "Xrom"
          },
          {
            AdvertisedShortLocationName: "Scoutstugan",
            Geometry: {
              SWEREF99TM: "POINT (445400 6166468)",
              WGS84: "POINT (14.13255970532887 55.641015810779287)"
            },
            LocationSignature: "xScs"
          },
          {
            AdvertisedShortLocationName: "Saltsjöbaden",
            Geometry: {
              SWEREF99TM: "POINT (688749 6575814)",
              WGS84: "POINT (18.313033766495227 59.279011419619962)"
            },
            LocationSignature: "xSbn"
          },
          {
            AdvertisedShortLocationName: "Saltsjö-Duvnäs",
            Geometry: {
              SWEREF99TM: "POINT (682120 6577896)",
              WGS84: "POINT (18.19864428848485 59.300584934518255)"
            },
            LocationSignature: "xSdn"
          },
          {
            AdvertisedShortLocationName: "Sandudden",
            Geometry: {
              SWEREF99TM: "POINT (589762 6851098)",
              WGS84: "POINT (16.70176454303342 61.782252699442353)"
            },
            LocationSignature: "xSdu"
          },
          {
            AdvertisedShortLocationName: "Saltsjö-Järla",
            Geometry: {
              SWEREF99TM: "POINT (679299 6578465)",
              WGS84: "POINT (18.149657485372831 59.306893023851707)"
            },
            LocationSignature: "xSjl"
          },
          {
            AdvertisedShortLocationName: "Sickla",
            Geometry: {
              SWEREF99TM: "POINT (677678 6578384)",
              WGS84: "POINT (18.121164786583147 59.306851383599756)"
            },
            LocationSignature: "xSik"
          },
          {
            AdvertisedShortLocationName: "Sjövägen",
            Geometry: {
              SWEREF99TM: "POINT (450068 6332330)",
              WGS84: "POINT (14.175121266489853 57.131536445732912)"
            },
            LocationSignature: "xSjv"
          },
          {
            AdvertisedShortLocationName: "Solsidan",
            Geometry: {
              SWEREF99TM: "POINT (687828 6574862)",
              WGS84: "POINT (18.29607324729065 59.270886266668768)"
            },
            LocationSignature: "xSln"
          },
          {
            AdvertisedShortLocationName: "Selknä",
            Geometry: {
              SWEREF99TM: "POINT (662917 6638896)",
              WGS84: "POINT (17.908774109095056 59.855499313538793)"
            },
            LocationSignature: "xSlä"
          },
          {
            AdvertisedShortLocationName: "Slussen",
            Geometry: {
              SWEREF99TM: "POINT (674890 6579692)",
              WGS84: "POINT (18.07333110181467 59.319743667860507)"
            },
            LocationSignature: "xSlu"
          },
          {
            AdvertisedShortLocationName: "Stora Mon",
            Geometry: {
              SWEREF99TM: "POINT (504832 6593747)",
              WGS84: "POINT (15.085300168630395 59.48216976466724)"
            },
            LocationSignature: "xSm"
          },
          {
            AdvertisedShortLocationName: "Skogsmark",
            Geometry: {
              SWEREF99TM: "POINT (408977 6480233)",
              WGS84: "POINT (13.440242266886367 58.453280118694643)"
            },
            LocationSignature: "xSmk"
          },
          {
            AdvertisedShortLocationName: "Spångenäs",
            Geometry: {
              SWEREF99TM: "POINT (565790 6384683)",
              WGS84: "POINT (16.1007976219144 57.599739780502816)"
            },
            LocationSignature: "xSpä"
          },
          {
            AdvertisedShortLocationName: "Stensjön",
            Geometry: {
              SWEREF99TM: "POINT (451699 6333641)",
              WGS84: "POINT (14.201809009935975 57.143486668503556)"
            },
            LocationSignature: "xSn"
          },
          {
            AdvertisedShortLocationName: "S:t Olof",
            Geometry: {
              SWEREF99TM: "POINT (445470 6165811)",
              WGS84: "POINT (14.133801921003823 55.635120883435988)"
            },
            LocationSignature: "xSoo"
          },
          {
            AdvertisedShortLocationName: "Stocksund",
            Geometry: {
              SWEREF99TM: "POINT (672877 6586866)",
              WGS84: "POINT (18.043772668457464 59.3849052920553)"
            },
            LocationSignature: "xSsu"
          },
          {
            AdvertisedShortLocationName: "Storängen",
            Geometry: {
              SWEREF99TM: "POINT (680916 6578396)",
              WGS84: "POINT (18.177954322624949 59.305585180546423)"
            },
            LocationSignature: "xStä"
          },
          {
            AdvertisedShortLocationName: "Svartbäcken Nedre",
            Geometry: {
              SWEREF99TM: "POINT (575154 6749590)",
              WGS84: "POINT (16.384141023323441 60.874394309569148)"
            },
            LocationSignature: "xSvb"
          },
          {
            AdvertisedShortLocationName: "Tattby",
            Geometry: {
              SWEREF99TM: "POINT (686976 6575730)",
              WGS84: "POINT (18.281899946391484 59.279045636673196)"
            },
            LocationSignature: "xTab"
          },
          {
            AdvertisedShortLocationName: "Sjöbygget",
            Geometry: {
              SWEREF99TM: "POINT (628309 6569474)",
              WGS84: "POINT (17.249573844889159 59.24478033749007)"
            },
            LocationSignature: "xSöy"
          },
          {
            AdvertisedShortLocationName: "Tule",
            Geometry: {
              SWEREF99TM: "POINT (709970 6381060)",
              WGS84: "POINT (18.506695704416128 57.523273815042735)"
            },
            LocationSignature: "xTe"
          },
          {
            AdvertisedShortLocationName: "Tibble",
            Geometry: {
              SWEREF99TM: "POINT (673655 6593296)",
              WGS84: "POINT (18.062653782067116 59.442244794795563)"
            },
            LocationSignature: "xTbl"
          },
          {
            AdvertisedShortLocationName: "Tule grusgrop",
            Geometry: {
              SWEREF99TM: "POINT (710110 6381350)",
              WGS84: "POINT (18.509278865173027 57.525809008493127)"
            },
            LocationSignature: "xTeg"
          },
          {
            AdvertisedShortLocationName: "Tuna",
            Geometry: {
              SWEREF99TM: "POINT (566014 6382150)",
              WGS84: "POINT (16.103855524336549 57.576958281975855)"
            },
            LocationSignature: "xTna"
          },
          {
            AdvertisedShortLocationName: "Tippen",
            Geometry: {
              SWEREF99TM: "POINT (686682 6576280)",
              WGS84: "POINT (18.277223624061218 59.284106530851027)"
            },
            LocationSignature: "xTip"
          },
          {
            AdvertisedShortLocationName: "Triabo",
            Geometry: {
              SWEREF99TM: "POINT (532325 6343897)",
              WGS84: "POINT (15.535529723253855 57.237016238079796)"
            },
            LocationSignature: "xTib"
          },
          {
            AdvertisedShortLocationName: "Trondheim",
            Geometry: {
              SWEREF99TM: "POINT (296829 7043012)",
              WGS84: "POINT (10.922988176949668 63.457296481173181)"
            },
            LocationSignature: "Xtnd"
          },
          {
            AdvertisedShortLocationName: "Totebo",
            Geometry: {
              SWEREF99TM: "POINT (570523 6387909)",
              WGS84: "POINT (16.180910950093736 57.627997103793021)"
            },
            LocationSignature: "xTob"
          },
          {
            AdvertisedShortLocationName: "Torpa",
            Geometry: {
              SWEREF99TM: "POINT (509642 6590354)",
              WGS84: "POINT (15.170058497470597 59.451617801229823)"
            },
            LocationSignature: "xTp"
          },
          {
            AdvertisedShortLocationName: "Tomtskog",
            Geometry: {
              SWEREF99TM: "POINT (627987 6356493)",
              WGS84: "POINT (17.126103150657087 57.333347539934969)"
            },
            LocationSignature: "xTog"
          },
          {
            AdvertisedShortLocationName: "Tunagård",
            Geometry: {
              SWEREF99TM: "POINT (687375 6596904)",
              WGS84: "POINT (18.307335802628376 59.468699209727951)"
            },
            LocationSignature: "xTug"
          },
          {
            AdvertisedShortLocationName: "Trollskogen",
            Geometry: {
              SWEREF99TM: "POINT (627608 6357392)",
              WGS84: "POINT (17.12027727436195 57.341523898124294)"
            },
            LocationSignature: "xTsk"
          },
          {
            AdvertisedShortLocationName: "Tveta",
            Geometry: {
              SWEREF99TM: "POINT (408327 6475759)",
              WGS84: "POINT (13.430897323337012 58.412976336899192)"
            },
            LocationSignature: "xTve"
          },
          {
            AdvertisedShortLocationName: "Tallås",
            Geometry: {
              SWEREF99TM: "POINT (576527 6749072)",
              WGS84: "POINT (16.409214257398137 60.869482586199005)"
            },
            LocationSignature: "xTås"
          },
          {
            AdvertisedShortLocationName: "Taxinge-Näsby",
            Geometry: {
              SWEREF99TM: "POINT (631237 6569131)",
              WGS84: "POINT (17.300654057314397 59.240805515938838)"
            },
            LocationSignature: "xTx"
          },
          {
            AdvertisedShortLocationName: "Täby kyrkby",
            Geometry: {
              SWEREF99TM: "POINT (673601 6598947)",
              WGS84: "POINT (18.066293874857447 59.492940479861694)"
            },
            LocationSignature: "xTäb"
          },
          {
            AdvertisedShortLocationName: "Täljö",
            Geometry: {
              SWEREF99TM: "POINT (683274 6597202)",
              WGS84: "POINT (18.235340631788731 59.473181071721847)"
            },
            LocationSignature: "xTäl"
          },
          {
            AdvertisedShortLocationName: "Täby Centrum",
            Geometry: {
              SWEREF99TM: "POINT (674332 6593560)",
              WGS84: "POINT (18.074788735664004 59.444331861691019)"
            },
            LocationSignature: "xTäc"
          },
          {
            AdvertisedShortLocationName: "Uppsala Östra",
            Geometry: {
              SWEREF99TM: "POINT (648388 6638550)",
              WGS84: "POINT (17.64946062121286 59.857866265083686)"
            },
            LocationSignature: "xUö"
          },
          {
            AdvertisedShortLocationName: "Universitetet",
            Geometry: {
              SWEREF99TM: "POINT (673411 6584650)",
              WGS84: "POINT (18.051372336635271 59.364814106901953)"
            },
            LocationSignature: "xUnv"
          },
          {
            AdvertisedShortLocationName: "Valstad",
            Geometry: {
              SWEREF99TM: "POINT (588344 6400224)",
              WGS84: "POINT (16.483734075736763 57.735441499361791)"
            },
            LocationSignature: "xVas"
          },
          {
            AdvertisedShortLocationName: "Viggbyholm",
            Geometry: {
              SWEREF99TM: "POINT (675971 6594189)",
              WGS84: "POINT (18.104164877840077 59.449288972896312)"
            },
            LocationSignature: "xVbm"
          },
          {
            AdvertisedShortLocationName: "Verkebäck",
            Geometry: {
              SWEREF99TM: "POINT (590268 6399515)",
              WGS84: "POINT (16.51576846284091 57.728692669890442)"
            },
            LocationSignature: "xVbä"
          },
          {
            AdvertisedShortLocationName: "Vena",
            Geometry: {
              SWEREF99TM: "POINT (558125 6376164)",
              WGS84: "POINT (15.970531743884132 57.524279131183896)"
            },
            LocationSignature: "xVen"
          },
          {
            AdvertisedShortLocationName: "Vendevägen",
            Geometry: {
              SWEREF99TM: "POINT (674158 6588591)",
              WGS84: "POINT (18.067687906277655 59.3998461453414)"
            },
            LocationSignature: "xVev"
          },
          {
            AdvertisedShortLocationName: "Värdshuset",
            Geometry: {
              SWEREF99TM: "POINT (626683 6570880)",
              WGS84: "POINT (17.221912298683208 59.257886576159962)"
            },
            LocationSignature: "xVht"
          },
          {
            AdvertisedShortLocationName: "Virestad",
            Geometry: {
              SWEREF99TM: "POINT (450082 6158006)",
              WGS84: "POINT (14.20846758144333 55.565490786170955)"
            },
            LocationSignature: "xVir"
          },
          {
            AdvertisedShortLocationName: "Visinge",
            Geometry: {
              SWEREF99TM: "POINT (673574 6595559)",
              WGS84: "POINT (18.063063842676154 59.462571000760754)"
            },
            LocationSignature: "xVis"
          },
          {
            AdvertisedShortLocationName: "Vallentuna",
            Geometry: {
              SWEREF99TM: "POINT (674166 6603570)",
              WGS84: "POINT (18.080036678438514 59.53416057661871)"
            },
            LocationSignature: "xVlt"
          },
          {
            AdvertisedShortLocationName: "Virserum",
            Geometry: {
              SWEREF99TM: "POINT (534778 6353267)",
              WGS84: "POINT (15.577482699014372 57.321003723968026)"
            },
            LocationSignature: "xVsm"
          },
          {
            AdvertisedShortLocationName: "Vadstena",
            Geometry: {
              SWEREF99TM: "POINT (493237 6478183)",
              WGS84: "POINT (14.884146125384978 58.444299863032604)"
            },
            LocationSignature: "xVst"
          },
          {
            AdvertisedShortLocationName: "Vitaby kyrka",
            Geometry: {
              SWEREF99TM: "POINT (447618 6172350)",
              WGS84: "POINT (14.166670918081085 55.694106559210582)"
            },
            LocationSignature: "xVtk"
          },
          {
            AdvertisedShortLocationName: "Väderum",
            Geometry: {
              SWEREF99TM: "POINT (564030 6377655)",
              WGS84: "POINT (16.069502755387756 57.536873603983565)"
            },
            LocationSignature: "xVäm"
          },
          {
            AdvertisedShortLocationName: "Vitaby",
            Geometry: {
              SWEREF99TM: "POINT (446903 6171295)",
              WGS84: "POINT (14.155501903984003 55.684550281554984)"
            },
            LocationSignature: "xVty"
          },
          {
            AdvertisedShortLocationName: "Åbo",
            Geometry: {
              SWEREF99TM: "POINT (578959 6746782)",
              WGS84: "POINT (16.453047973265519 60.848452856535133)"
            },
            LocationSignature: "xÅbo"
          },
          {
            AdvertisedShortLocationName: "Åkers Runö",
            Geometry: {
              SWEREF99TM: "POINT (685210 6598130)",
              WGS84: "POINT (18.270257405601821 59.480651297017744)"
            },
            LocationSignature: "xÅru"
          },
          {
            AdvertisedShortLocationName: "Årsta",
            Geometry: {
              SWEREF99TM: "POINT (651338 6639376)",
              WGS84: "POINT (17.702666420281403 59.864205632680964)"
            },
            LocationSignature: "xÅs"
          },
          {
            AdvertisedShortLocationName: "Åtorp",
            Geometry: {
              SWEREF99TM: "POINT (306545 6484532)",
              WGS84: "POINT (11.683837085076481 58.458503677981753)"
            },
            LocationSignature: "xÅtp"
          },
          {
            AdvertisedShortLocationName: "Åkersberga",
            Geometry: {
              SWEREF99TM: "POINT (686854 6598035)",
              WGS84: "POINT (18.299146775379395 59.479070910325561)"
            },
            LocationSignature: "xÅbg"
          },
          {
            AdvertisedShortLocationName: "Älvstorp",
            Geometry: {
              SWEREF99TM: "POINT (501974 6596975)",
              WGS84: "POINT (15.034877293498333 59.511180236294564)"
            },
            LocationSignature: "xÄp"
          },
          {
            AdvertisedShortLocationName: "Ödhult",
            Geometry: {
              SWEREF99TM: "POINT (549956 6366464)",
              WGS84: "POINT (15.832165677807446 57.438130127733913)"
            },
            LocationSignature: "xÖdh"
          },
          {
            AdvertisedShortLocationName: "Östberga",
            Geometry: {
              SWEREF99TM: "POINT (674491 6589068)",
              WGS84: "POINT (18.073931444756095 59.403985604310876)"
            },
            LocationSignature: "xÖga"
          },
          {
            AdvertisedShortLocationName: "Österskär",
            Geometry: {
              SWEREF99TM: "POINT (687626 6596095)",
              WGS84: "POINT (18.311047418607 59.461334443912953)"
            },
            LocationSignature: "xÖsk"
          },
          {
            AdvertisedShortLocationName: "Stockholms Östra",
            Geometry: {
              SWEREF99TM: "POINT (674581 6582676)",
              WGS84: "POINT (18.070325407863859 59.34662991319712)"
            },
            LocationSignature: "xÖst"
          },
          {
            AdvertisedShortLocationName: "Östervik",
            Geometry: {
              SWEREF99TM: "POINT (684249 6577390)",
              WGS84: "POINT (18.235536826198125 59.295125551457218)"
            },
            LocationSignature: "xÖsv"
          },
          {
            AdvertisedShortLocationName: "Ytterby",
            Geometry: {
              SWEREF99TM: "POINT (317132 6417547)",
              WGS84: "POINT (11.917445420699801 57.86230188185646)"
            },
            LocationSignature: "Yb"
          },
          {
            AdvertisedShortLocationName: "Ytterhogdal",
            Geometry: {
              SWEREF99TM: "POINT (492475 6896167)",
              WGS84: "POINT (14.855394844494286 62.197288513778865)"
            },
            LocationSignature: "Yl"
          },
          {
            AdvertisedShortLocationName: "Östra Vemmerlöv",
            Geometry: {
              SWEREF99TM: "POINT (451358 6160293)",
              WGS84: "POINT (14.228295708062049 55.586167884098046)"
            },
            LocationSignature: "xÖvl"
          },
          {
            AdvertisedShortLocationName: "Ystad",
            Geometry: {
              SWEREF99TM: "POINT (425669 6142978)",
              WGS84: "POINT (13.825460699219333 55.427372002991056)"
            },
            LocationSignature: "Y"
          },
          {
            AdvertisedShortLocationName: "Yttersjön",
            Geometry: {
              SWEREF99TM: "POINT (724398 7150980)",
              WGS84: "POINT (19.659404346793703 64.410373509748979)"
            },
            LocationSignature: "Yö"
          },
          {
            AdvertisedShortLocationName: "Yttermalung",
            Geometry: {
              SWEREF99TM: "POINT (435564 6716579)",
              WGS84: "POINT (13.824086592717391 60.579961367826783)"
            },
            LocationSignature: "Ym"
          },
          {
            AdvertisedShortLocationName: "Drogden",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zdro"
          },
          {
            AdvertisedShortLocationName: "Espergaerde",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zgae"
          },
          {
            AdvertisedShortLocationName: "Kalvebod",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zklv"
          },
          {
            AdvertisedShortLocationName: "Klampenborg",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zkl"
          },
          {
            AdvertisedShortLocationName: "Helsingör",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zhg"
          },
          {
            AdvertisedShortLocationName: "Hellerup",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zhl"
          },
          {
            AdvertisedShortLocationName: "Humlebaek",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zhum"
          },
          {
            AdvertisedShortLocationName: "Österport",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zkk"
          },
          {
            AdvertisedShortLocationName: "Nörreport",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zkn"
          },
          {
            AdvertisedShortLocationName: "Nivå",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zni"
          },
          {
            AdvertisedShortLocationName: "Kokkedal",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zok"
          },
          {
            AdvertisedShortLocationName: "Rungsted",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zru"
          },
          {
            AdvertisedShortLocationName: "Tårnby",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Ztåt"
          },
          {
            AdvertisedShortLocationName: "Vedbaek",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zvb"
          },
          {
            AdvertisedShortLocationName: "Snekkersten",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zsq"
          },
          {
            AdvertisedShortLocationName: "Skodsborg",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zså"
          },
          {
            AdvertisedShortLocationName: "Örestad",
            Geometry: {
              SWEREF99TM: "POINT (355099 6163988)",
              WGS84: "POINT (12.700128437886463 55.600231403463866)"
            },
            LocationSignature: "Zöre"
          },
          {
            AdvertisedShortLocationName: "Åsbro",
            Geometry: {
              SWEREF99TM: "POINT (503515 6539851)",
              WGS84: "POINT (15.061177971911832 58.998180290882345)"
            },
            LocationSignature: "Å"
          },
          {
            AdvertisedShortLocationName: "Åsensbruk",
            Geometry: {
              SWEREF99TM: "POINT (351282 6521237)",
              WGS84: "POINT (12.425564222019361 58.805352333360794)"
            },
            LocationSignature: "Åb"
          },
          {
            AdvertisedShortLocationName: "Åseda",
            Geometry: {
              SWEREF99TM: "POINT (521036 6336126)",
              WGS84: "POINT (15.347852330103017 57.167867002190448)"
            },
            LocationSignature: "Åa"
          },
          {
            AdvertisedShortLocationName: "Ålberga",
            Geometry: {
              SWEREF99TM: "POINT (591344 6510404)",
              WGS84: "POINT (16.577401419812951 58.724083639244775)"
            },
            LocationSignature: "Åba"
          },
          {
            AdvertisedShortLocationName: "Årstaberg",
            Geometry: {
              SWEREF99TM: "POINT (672397 6577311)",
              WGS84: "POINT (18.027693219158454 59.2994166097003)"
            },
            LocationSignature: "Åbe"
          },
          {
            AdvertisedShortLocationName: "Åby",
            Geometry: {
              SWEREF99TM: "POINT (568543 6502437)",
              WGS84: "POINT (16.181344955306518 58.656763543278281)"
            },
            LocationSignature: "Åby"
          },
          {
            AdvertisedShortLocationName: "Åby godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (569414 6501564)",
              WGS84: "POINT (16.196084749530531 58.648786108429562)"
            },
            LocationSignature: "Åbyg"
          },
          {
            AdvertisedShortLocationName: "Ådalsliden",
            Geometry: {
              SWEREF99TM: "POINT (593734 7035944)",
              WGS84: "POINT (16.879038511141722 63.439593967427157)"
            },
            LocationSignature: "Åd"
          },
          {
            AdvertisedShortLocationName: "Ånge",
            Geometry: {
              SWEREF99TM: "POINT (533811 6932697)",
              WGS84: "POINT (15.656838659985995 62.523717796197879)"
            },
            LocationSignature: "Åg"
          },
          {
            AdvertisedShortLocationName: "Ånge godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (533087 6932880)",
              WGS84: "POINT (15.642810127449046 62.525425668925166)"
            },
            LocationSignature: "Åggb"
          },
          {
            AdvertisedShortLocationName: "Ångebyn",
            Geometry: {
              SWEREF99TM: "POINT (531396 6932722)",
              WGS84: "POINT (15.609930877788354 62.524154775676529)"
            },
            LocationSignature: "Ågy"
          },
          {
            AdvertisedShortLocationName: "Åhus",
            Geometry: {
              SWEREF99TM: "POINT (456305 6198241)",
              WGS84: "POINT (14.300698801911857 55.927585710350364)"
            },
            LocationSignature: "Åhus"
          },
          {
            AdvertisedShortLocationName: "Årskogen",
            Geometry: {
              SWEREF99TM: "POINT (622404 6892415)",
              WGS84: "POINT (17.348409755439985 62.143772517701031)"
            },
            LocationSignature: "Åkg"
          },
          {
            AdvertisedShortLocationName: "Åkarp",
            Geometry: {
              SWEREF99TM: "POINT (380980 6169561)",
              WGS84: "POINT (13.108224150276582 55.65729391186111)"
            },
            LocationSignature: "Åk"
          },
          {
            AdvertisedShortLocationName: "Åshammar",
            Geometry: {
              SWEREF99TM: "POINT (584637 6724636)",
              WGS84: "POINT (16.547889870294242 60.6485241554113)"
            },
            LocationSignature: "Åh"
          },
          {
            AdvertisedShortLocationName: "Åkers styckebruk",
            Geometry: {
              SWEREF99TM: "POINT (619480 6570019)",
              WGS84: "POINT (17.095204229938588 59.252253971901951)"
            },
            LocationSignature: "Åks"
          },
          {
            AdvertisedShortLocationName: "Åskott",
            Geometry: {
              SWEREF99TM: "POINT (481700 7016858)",
              WGS84: "POINT (14.635213285650043 63.280173653530142)"
            },
            LocationSignature: "Åkt"
          },
          {
            AdvertisedShortLocationName: "Åkarps norra",
            Geometry: {
              SWEREF99TM: "POINT (381344 6169925)",
              WGS84: "POINT (13.113849041815991 55.660651854672842)"
            },
            LocationSignature: "Åkn"
          },
          {
            AdvertisedShortLocationName: "Åmål",
            Geometry: {
              SWEREF99TM: "POINT (367959 6547498)",
              WGS84: "POINT (12.698337633501968 59.046439406816006)"
            },
            LocationSignature: "Ål"
          },
          {
            AdvertisedShortLocationName: "Ålsäng",
            Geometry: {
              SWEREF99TM: "POINT (540311 6586561)",
              WGS84: "POINT (15.710231760563884 59.415735631577768)"
            },
            LocationSignature: "Ålg"
          },
          {
            AdvertisedShortLocationName: "Åmsele",
            Geometry: {
              SWEREF99TM: "POINT (707720 7158550)",
              WGS84: "POINT (19.325027499935544 64.488669680532567)"
            },
            LocationSignature: "Åm"
          },
          {
            AdvertisedShortLocationName: "Ångsågsmossen",
            Geometry: {
              SWEREF99TM: "POINT (498603 6229716)",
              WGS84: "POINT (14.977476978948824 56.212366133102)"
            },
            LocationSignature: "Åmn"
          },
          {
            AdvertisedShortLocationName: "Åmyran",
            Geometry: {
              SWEREF99TM: "POINT (618286 6875102)",
              WGS84: "POINT (17.257917230867687 61.989800495997677)"
            },
            LocationSignature: "Åmy"
          },
          {
            AdvertisedShortLocationName: "Ånimskog",
            Geometry: {
              SWEREF99TM: "POINT (359853 6528928)",
              WGS84: "POINT (12.568944927296426 58.877234675480686)"
            },
            LocationSignature: "Ånm"
          },
          {
            AdvertisedShortLocationName: "Åre",
            Geometry: {
              SWEREF99TM: "POINT (403832 7031535)",
              WGS84: "POINT (13.074856075628473 63.3993976740134)"
            },
            LocationSignature: "Åre"
          },
          {
            AdvertisedShortLocationName: "Åstorp",
            Geometry: {
              SWEREF99TM: "POINT (372666 6222807)",
              WGS84: "POINT (12.951115223843647 56.133304970486478)"
            },
            LocationSignature: "Åp"
          },
          {
            AdvertisedShortLocationName: "Åryd",
            Geometry: {
              SWEREF99TM: "POINT (498990 6297438)",
              WGS84: "POINT (14.983453372011274 56.820794404320523)"
            },
            LocationSignature: "Ård"
          },
          {
            AdvertisedShortLocationName: "Ånn",
            Geometry: {
              SWEREF99TM: "POINT (376740 7023760)",
              WGS84: "POINT (12.539021467159916 63.321352292118576)"
            },
            LocationSignature: "Ånn"
          },
          {
            AdvertisedShortLocationName: "Ås",
            Geometry: {
              SWEREF99TM: "POINT (351155 6638508)",
              WGS84: "POINT (12.3424199728652 59.857325241527782)"
            },
            LocationSignature: "Ås"
          },
          {
            AdvertisedShortLocationName: "Åsa",
            Geometry: {
              SWEREF99TM: "POINT (327696 6361568)",
              WGS84: "POINT (12.135074440823439 57.364298611769861)"
            },
            LocationSignature: "Åsa"
          },
          {
            AdvertisedShortLocationName: "Åsarna central",
            Geometry: {
              SWEREF99TM: "POINT (467936 6946431)",
              WGS84: "POINT (14.374511968718771 62.647139731088146)"
            },
            LocationSignature: "Åsal"
          },
          {
            AdvertisedShortLocationName: "Åsarna Södra",
            Geometry: {
              SWEREF99TM: "POINT (467800 6945728)",
              WGS84: "POINT (14.371992639994378 62.640818302167972)"
            },
            LocationSignature: "Åsra"
          },
          {
            AdvertisedShortLocationName: "Åsträsk",
            Geometry: {
              SWEREF99TM: "POINT (737789 7174964)",
              WGS84: "POINT (19.97518855564272 64.6157222754548)"
            },
            LocationSignature: "Åst"
          },
          {
            AdvertisedShortLocationName: "Åmotfors",
            Geometry: {
              SWEREF99TM: "POINT (352103 6628557)",
              WGS84: "POINT (12.366380780707596 59.768404963699972)"
            },
            LocationSignature: "Åt"
          },
          {
            AdvertisedShortLocationName: "Åtvidaberg",
            Geometry: {
              SWEREF99TM: "POINT (558893 6451821)",
              WGS84: "POINT (16.002060255222808 58.203647880652014)"
            },
            LocationSignature: "Åvg"
          },
          {
            AdvertisedShortLocationName: "Ängelholm",
            Geometry: {
              SWEREF99TM: "POINT (366989 6235616)",
              WGS84: "POINT (12.853425440320063 56.246761113348178)"
            },
            LocationSignature: "Ä"
          },
          {
            AdvertisedShortLocationName: "Älvboda",
            Geometry: {
              SWEREF99TM: "POINT (631734 6722659)",
              WGS84: "POINT (17.407170645142418 60.618067203019024)"
            },
            LocationSignature: "Äba"
          },
          {
            AdvertisedShortLocationName: "Ängelsbergs bruk",
            Geometry: {
              SWEREF99TM: "POINT (556238 6648067)",
              WGS84: "POINT (16.007249206492432 59.966128699400635)"
            },
            LocationSignature: "Äbgb"
          },
          {
            AdvertisedShortLocationName: "Ängelsberg",
            Geometry: {
              SWEREF99TM: "POINT (556365 6647050)",
              WGS84: "POINT (16.009245690118707 59.956980779208422)"
            },
            LocationSignature: "Äbg"
          },
          {
            AdvertisedShortLocationName: "Äggfors",
            Geometry: {
              SWEREF99TM: "POINT (435192 7019114)",
              WGS84: "POINT (13.707411814286063 63.295026622145777)"
            },
            LocationSignature: "Äfs"
          },
          {
            AdvertisedShortLocationName: "Älmhult",
            Geometry: {
              SWEREF99TM: "POINT (446929 6267626)",
              WGS84: "POINT (14.136752817329516 56.549969218446471)"
            },
            LocationSignature: "Äh"
          },
          {
            AdvertisedShortLocationName: "Älgarås",
            Geometry: {
              SWEREF99TM: "POINT (456991 6519527)",
              WGS84: "POINT (14.25540874129622 58.813522274978752)"
            },
            LocationSignature: "Äl"
          },
          {
            AdvertisedShortLocationName: "Älvkarleby",
            Geometry: {
              SWEREF99TM: "POINT (633134 6715739)",
              WGS84: "POINT (17.428060189184563 60.555529674134917)"
            },
            LocationSignature: "Äkb"
          },
          {
            AdvertisedShortLocationName: "Älvho",
            Geometry: {
              SWEREF99TM: "POINT (486549 6818280)",
              WGS84: "POINT (14.747337466605702 61.497955391396012)"
            },
            LocationSignature: "Älo"
          },
          {
            AdvertisedShortLocationName: "Älvros",
            Geometry: {
              SWEREF99TM: "POINT (477855 6881259)",
              WGS84: "POINT (14.576326444452182 62.062894286422228)"
            },
            LocationSignature: "Äls"
          },
          {
            AdvertisedShortLocationName: "Älvängen",
            Geometry: {
              SWEREF99TM: "POINT (328790 6427299)",
              WGS84: "POINT (12.106636408564174 57.954401371317779)"
            },
            LocationSignature: "Än"
          },
          {
            AdvertisedShortLocationName: "Äng",
            Geometry: {
              SWEREF99TM: "POINT (474176 6394542)",
              WGS84: "POINT (14.56682091811564 57.692351127247996)"
            },
            LocationSignature: "Äng"
          },
          {
            AdvertisedShortLocationName: "Ängersjö",
            Geometry: {
              SWEREF99TM: "POINT (738154 7061814)",
              WGS84: "POINT (19.804550997023345 63.603770997932408)"
            },
            LocationSignature: "Änö"
          },
          {
            AdvertisedShortLocationName: "Älvsjö",
            Geometry: {
              SWEREF99TM: "POINT (671567 6574951)",
              WGS84: "POINT (18.011268352356289 59.278590231138971)"
            },
            LocationSignature: "Äs"
          },
          {
            AdvertisedShortLocationName: "Äppelbo",
            Geometry: {
              SWEREF99TM: "POINT (445086 6706507)",
              WGS84: "POINT (14.000614075352448 60.49095876494237)"
            },
            LocationSignature: "Äp"
          },
          {
            AdvertisedShortLocationName: "Älandsbro",
            Geometry: {
              SWEREF99TM: "POINT (645651 6952749)",
              WGS84: "POINT (17.844732792951369 62.676401917769304)"
            },
            LocationSignature: "Äsb"
          },
          {
            AdvertisedShortLocationName: "Älvsjö godsbangård",
            Geometry: {
              SWEREF99TM: "POINT (672044 6576364)",
              WGS84: "POINT (18.020750312361056 59.2910679753198)"
            },
            LocationSignature: "Äsg"
          },
          {
            AdvertisedShortLocationName: "Äskekärr",
            Geometry: {
              SWEREF99TM: "POINT (419219 6499252)",
              WGS84: "POINT (13.608936221931133 58.626059018190567)"
            },
            LocationSignature: "Äsr"
          },
          {
            AdvertisedShortLocationName: "Älvsbyn",
            Geometry: {
              SWEREF99TM: "POINT (775107 7297175)",
              WGS84: "POINT (20.993327001954647 65.678248203250419)"
            },
            LocationSignature: "Äy"
          },
          {
            AdvertisedShortLocationName: "Ättekulla",
            Geometry: {
              SWEREF99TM: "POINT (360868 6210727)",
              WGS84: "POINT (12.767715494704804 56.021558483006558)"
            },
            LocationSignature: "Ätk"
          },
          {
            AdvertisedShortLocationName: "Örtofta",
            Geometry: {
              SWEREF99TM: "POINT (389783 6182822)",
              WGS84: "POINT (13.242727367694334 55.778469204604448)"
            },
            LocationSignature: "Ö"
          },
          {
            AdvertisedShortLocationName: "Ökna",
            Geometry: {
              SWEREF99TM: "POINT (541174 6584955)",
              WGS84: "POINT (15.725127138831709 59.40123119913266)"
            },
            LocationSignature: "Öa"
          },
          {
            AdvertisedShortLocationName: "Österalnö",
            Geometry: {
              SWEREF99TM: "POINT (675810 7029980)",
              WGS84: "POINT (18.51497038587344 63.355130308684672)"
            },
            LocationSignature: "Öal"
          },
          {
            AdvertisedShortLocationName: "Örebro S",
            Geometry: {
              SWEREF99TM: "POINT (511541 6570134)",
              WGS84: "POINT (15.202467158375073 59.269992557053094)"
            },
            LocationSignature: "Öb"
          },
          {
            AdvertisedShortLocationName: "Ösjöbol",
            Geometry: {
              SWEREF99TM: "POINT (515116 6338801)",
              WGS84: "POINT (15.250122469346081 57.19213003059749)"
            },
            LocationSignature: "Öbl"
          },
          {
            AdvertisedShortLocationName: "Örabäcken",
            Geometry: {
              SWEREF99TM: "POINT (539385 6886813)",
              WGS84: "POINT (15.754715976214593 62.111340824466005)"
            },
            LocationSignature: "Öbn"
          },
          {
            AdvertisedShortLocationName: "Ödåkra",
            Geometry: {
              SWEREF99TM: "POINT (359761 6220025)",
              WGS84: "POINT (12.745100556797613 56.104712508503411)"
            },
            LocationSignature: "Öda"
          },
          {
            AdvertisedShortLocationName: "Ö. Grevie",
            Geometry: {
              SWEREF99TM: "POINT (382054 6148054)",
              WGS84: "POINT (13.134462058169955 55.46440567449536)"
            },
            LocationSignature: "Ög"
          },
          {
            AdvertisedShortLocationName: "Överhogdal",
            Geometry: {
              SWEREF99TM: "POINT (489500 6905158)",
              WGS84: "POINT (14.797685868461908 62.277922252020709)"
            },
            LocationSignature: "Öhl"
          },
          {
            AdvertisedShortLocationName: "Örbyhus",
            Geometry: {
              SWEREF99TM: "POINT (649721 6680018)",
              WGS84: "POINT (17.703482816120193 60.229325280792139)"
            },
            LocationSignature: "Öh"
          },
          {
            AdvertisedShortLocationName: "Övergård",
            Geometry: {
              SWEREF99TM: "POINT (616800 7005890)",
              WGS84: "POINT (17.31924052492959 63.16326792665398)"
            },
            LocationSignature: "Ögd"
          },
          {
            AdvertisedShortLocationName: "Östansjö",
            Geometry: {
              SWEREF99TM: "POINT (498929 6545133)",
              WGS84: "POINT (14.98133376536957 59.045629001609704)"
            },
            LocationSignature: "Öj"
          },
          {
            AdvertisedShortLocationName: "Överhogdals grusgrop",
            Geometry: {
              SWEREF99TM: "POINT (490817 6900022)",
              WGS84: "POINT (14.823331744737931 62.231855099694833)"
            },
            LocationSignature: "Öhlg"
          },
          {
            AdvertisedShortLocationName: "Öjervik",
            Geometry: {
              SWEREF99TM: "POINT (394571 6627698)",
              WGS84: "POINT (13.122478360101043 59.773665351502444)"
            },
            LocationSignature: "Öjr"
          },
          {
            AdvertisedShortLocationName: "Örnsköldsvik norra",
            Geometry: {
              SWEREF99TM: "POINT (686618 7025116)",
              WGS84: "POINT (18.724879373534005 63.306090834562184)"
            },
            LocationSignature: "Ökn"
          },
          {
            AdvertisedShortLocationName: "Örnsköldsvik",
            Geometry: {
              SWEREF99TM: "POINT (685721 7023094)",
              WGS84: "POINT (18.704691643493067 63.288447675720725)"
            },
            LocationSignature: "Ök"
          },
          {
            AdvertisedShortLocationName: "Önaskogen",
            Geometry: {
              SWEREF99TM: "POINT (507034 6497910)",
              WGS84: "POINT (15.121105516818247 58.621469313371747)"
            },
            LocationSignature: "Öna"
          },
          {
            AdvertisedShortLocationName: "Ölme",
            Geometry: {
              SWEREF99TM: "POINT (443459 6580661)",
              WGS84: "POINT (14.005410800638506 59.360892712012124)"
            },
            LocationSignature: "Öl"
          },
          {
            AdvertisedShortLocationName: "Örsjö",
            Geometry: {
              SWEREF99TM: "POINT (545917 6283879)",
              WGS84: "POINT (15.749782017233676 56.6967277555331)"
            },
            LocationSignature: "Örs"
          },
          {
            AdvertisedShortLocationName: "Önnestad",
            Geometry: {
              SWEREF99TM: "POINT (438784 6213938)",
              WGS84: "POINT (14.016756119481466 56.066691237055373)"
            },
            LocationSignature: "Önd"
          },
          {
            AdvertisedShortLocationName: "Örebro",
            Geometry: {
              SWEREF99TM: "POINT (512022 6571051)",
              WGS84: "POINT (15.210956333462374 59.2782140091467)"
            },
            LocationSignature: "Ör"
          },
          {
            AdvertisedShortLocationName: "Östersund",
            Geometry: {
              SWEREF99TM: "POINT (481778 7004584)",
              WGS84: "POINT (14.638147585139462 63.170020707339219)"
            },
            LocationSignature: "Ös"
          },
          {
            AdvertisedShortLocationName: "Östersund V",
            Geometry: {
              SWEREF99TM: "POINT (481431 7005535)",
              WGS84: "POINT (14.631148538939899 63.178538096655487)"
            },
            LocationSignature: "Ösv"
          },
          {
            AdvertisedShortLocationName: "Ösmo",
            Geometry: {
              SWEREF99TM: "POINT (666805 6541950)",
              WGS84: "POINT (17.902643771807412 58.98451424987104)"
            },
            LocationSignature: "Öso"
          },
          {
            AdvertisedShortLocationName: "Österås",
            Geometry: {
              SWEREF99TM: "POINT (609827 7010999)",
              WGS84: "POINT (17.184355651495373 63.2112806252443)"
            },
            LocationSignature: "Öså"
          },
          {
            AdvertisedShortLocationName: "Östertälje",
            Geometry: {
              SWEREF99TM: "POINT (651885 6563678)",
              WGS84: "POINT (17.658394772630633 59.184989919946844)"
            },
            LocationSignature: "Öte"
          },
          {
            AdvertisedShortLocationName: "Överby",
            Geometry: {
              SWEREF99TM: "POINT (284227 6528662)",
              WGS84: "POINT (11.260022093088789 58.843557039027118)"
            },
            LocationSignature: "Övb"
          },
          {
            AdvertisedShortLocationName: "Östavall",
            Geometry: {
              SWEREF99TM: "POINT (524435 6922096)",
              WGS84: "POINT (15.473193759598685 62.429304190301153)"
            },
            LocationSignature: "Öv"
          },
          {
            AdvertisedShortLocationName: "Överum",
            Geometry: {
              SWEREF99TM: "POINT (578385 6427516)",
              WGS84: "POINT (16.325504979538049 57.982368325433434)"
            },
            LocationSignature: "Övm"
          },
          {
            AdvertisedShortLocationName: "Överums Bruk",
            Geometry: {
              SWEREF99TM: "POINT (578014 6428331)",
              WGS84: "POINT (16.319502298649159 57.989751979329924)"
            },
            LocationSignature: "Övmb"
          },
          {
            AdvertisedShortLocationName: "Östervärn",
            Geometry: {
              SWEREF99TM: "POINT (376124 6164075)",
              WGS84: "POINT (13.033559582580143 55.606815073121048)"
            },
            LocationSignature: "Övn"
          },
          {
            AdvertisedShortLocationName: "Övsjö",
            Geometry: {
              SWEREF99TM: "POINT (550024 6982067)",
              WGS84: "POINT (15.986436805899796 62.964944296149532)"
            },
            LocationSignature: "Övö"
          },
          {
            AdvertisedShortLocationName: "Öreälv",
            Geometry: {
              SWEREF99TM: "POINT (713887 7081292)",
              WGS84: "POINT (19.343424648943145 63.793587786192852)"
            },
            LocationSignature: "Öä"
          },
          {
            AdvertisedShortLocationName: "Öxnered",
            Geometry: {
              SWEREF99TM: "POINT (340418 6471668)",
              WGS84: "POINT (12.272577388536199 58.356786999658738)"
            },
            LocationSignature: "Öx"
          },
          {
            AdvertisedShortLocationName: "Österäng",
            Geometry: {
              SWEREF99TM: "POINT (416388 6500207)",
              WGS84: "POINT (13.559850447039009 58.634097100051186)"
            },
            LocationSignature: "Öäg"
          },
          {
            AdvertisedShortLocationName: "Stensjön",
            Geometry: {
              SWEREF99TM: "POINT (489460 6382247)",
              WGS84: "POINT (14.823732604032834 57.582528600216293)"
            },
            LocationSignature: "Snö"
          },
          {
            AdvertisedShortLocationName: "Stordalen",
            Geometry: {
              SWEREF99TM: "POINT (667539 7586705)",
              WGS84: "POINT (19.070536571088198 68.343576114937235)"
            },
            LocationSignature: "Soa"
          },
          {
            AdvertisedShortLocationName: "Solna",
            Geometry: {
              SWEREF99TM: "POINT (671076 6584623)",
              WGS84: "POINT (18.010330020813157 59.365525934131234)"
            },
            LocationSignature: "So"
          },
          {
            AdvertisedShortLocationName: "Sthlm Odenplan",
            Geometry: {
              SWEREF99TM: "POINT (673161 6582367)",
              WGS84: "POINT (18.045144912665808 59.344444151961333)"
            },
            LocationSignature: "Sod"
          },
          {
            AdvertisedShortLocationName: "Stolpen",
            Geometry: {
              SWEREF99TM: "POINT (473265 6383320)",
              WGS84: "POINT (14.552781202059069 57.591498645494426)"
            },
            LocationSignature: "Soe"
          },
          {
            AdvertisedShortLocationName: "Sollentuna",
            Geometry: {
              SWEREF99TM: "POINT (667293 6591402)",
              WGS84: "POINT (17.949147258050402 59.427839621686111)"
            },
            LocationSignature: "Sol"
          },
          {
            AdvertisedShortLocationName: "Stormyran",
            Geometry: {
              SWEREF99TM: "POINT (622372 7028991)",
              WGS84: "POINT (17.447253325130042 63.36856162640737)"
            },
            LocationSignature: "Som"
          },
          {
            AdvertisedShortLocationName: "Viskan",
            Geometry: {
              SWEREF99TM: "POINT (573969 6925074)",
              WGS84: "POINT (16.433481172691373 62.44947324741554)"
            },
            LocationSignature: "Visk"
          },
          {
            AdvertisedShortLocationName: "Vassijaure",
            Geometry: {
              SWEREF99TM: "POINT (633605 7594293)",
              WGS84: "POINT (18.257670045642197 68.429577312909458)"
            },
            LocationSignature: "Vj"
          },
          {
            AdvertisedShortLocationName: "Vojmån",
            Geometry: {
              SWEREF99TM: "POINT (586319 7186495)",
              WGS84: "POINT (16.816545306197494 64.791848292679575)"
            },
            LocationSignature: "Vjm"
          },
          {
            AdvertisedShortLocationName: "Vika",
            Geometry: {
              SWEREF99TM: "POINT (470730 6756840)",
              WGS84: "POINT (14.459743968959296 60.945522002186543)"
            },
            LocationSignature: "Vka"
          },
          {
            AdvertisedShortLocationName: "Västervik",
            Geometry: {
              SWEREF99TM: "POINT (597764 6402690)",
              WGS84: "POINT (16.642875950478558 57.755631715740407)"
            },
            LocationSignature: "Vk"
          },
          {
            AdvertisedShortLocationName: "Hudiksvall (xHkl)",
            Geometry: {
              SWEREF99TM: "POINT (610168 6842961)",
              WGS84: "POINT (17.083419579006552 61.703918267668321)"
            },
            LocationSignature: "xHkl"
          },
          {
            AdvertisedShortLocationName: "Hultsfred (xHpf)",
            Geometry: {
              SWEREF99TM: "POINT (551012 6371270)",
              WGS84: "POINT (15.850756384163192 57.481179497108549)"
            },
            LocationSignature: "xHpf"
          },
          {
            AdvertisedShortLocationName: "Hegra",
            Geometry: {
              SWEREF99TM: "POINT (354604 7024068)",
              WGS84: "POINT (12.097409536169001 63.315807840009228)"
            },
            LocationSignature: "Xhra"
          },
          {
            AdvertisedShortLocationName: "Hesselby",
            Geometry: {
              SWEREF99TM: "POINT (711315 6383494)",
              WGS84: "POINT (18.531221822673114 57.544470844988162)"
            },
            LocationSignature: "xHy"
          },
          {
            AdvertisedShortLocationName: "Härnön",
            Geometry: {
              SWEREF99TM: "POINT (630541 6569525)",
              WGS84: "POINT (17.288701123568067 59.244555973346358)"
            },
            LocationSignature: "xHön"
          },
          {
            AdvertisedShortLocationName: "Hösjömo",
            Geometry: {
              SWEREF99TM: "POINT (453314 6334454)",
              WGS84: "POINT (14.228342654015272 57.150956346397741)"
            },
            LocationSignature: "xHöo"
          },
          {
            AdvertisedShortLocationName: "Hultanäs",
            Geometry: {
              SWEREF99TM: "POINT (526496 6341413)",
              WGS84: "POINT (15.43869906894383 57.215077171392089)"
            },
            LocationSignature: "xHäs"
          },
          {
            AdvertisedShortLocationName: "Impregneringen",
            Geometry: {
              SWEREF99TM: "POINT (459018 6338875)",
              WGS84: "POINT (14.321887446535548 57.191212808978129)"
            },
            LocationSignature: "xIpr"
          },
          {
            AdvertisedShortLocationName: "Igelboda",
            Geometry: {
              SWEREF99TM: "POINT (686548 6576923)",
              WGS84: "POINT (18.275430036381575 59.289930513751223)"
            },
            LocationSignature: "xIgb"
          },
          {
            AdvertisedShortLocationName: "Järle",
            Geometry: {
              SWEREF99TM: "POINT (508572 6591757)",
              WGS84: "POINT (15.151242964604952 59.464239907679932)"
            },
            LocationSignature: "xJ"
          },
          {
            AdvertisedShortLocationName: "Jagbacken",
            Geometry: {
              SWEREF99TM: "POINT (624558 6569712)",
              WGS84: "POINT (17.184002396565969 59.24803578067138)"
            },
            LocationSignature: "xJbn"
          },
          {
            AdvertisedShortLocationName: "Jädraås",
            Geometry: {
              SWEREF99TM: "POINT (579801 6746112)",
              WGS84: "POINT (16.468261096740488 60.842271191212788)"
            },
            LocationSignature: "xJås"
          },
          {
            AdvertisedShortLocationName: "Kragstalund",
            Geometry: {
              SWEREF99TM: "POINT (674046 6600904)",
              WGS84: "POINT (18.075738433408951 59.510304525293307)"
            },
            LocationSignature: "xKgl"
          },
          {
            AdvertisedShortLocationName: "Katterat",
            Geometry: {
              SWEREF99TM: "POINT (621815 7590163)",
              WGS84: "POINT (17.96585545435336 68.397927960629048)"
            },
            LocationSignature: "Xkat"
          },
          {
            AdvertisedShortLocationName: "Kambshagtorp",
            Geometry: {
              SWEREF99TM: "POINT (709713 6380699)",
              WGS84: "POINT (18.502102117316351 57.52015615471273)"
            },
            LocationSignature: "xKht"
          },
          {
            AdvertisedShortLocationName: "Källarhalsen",
            Geometry: {
              SWEREF99TM: "POINT (503707 6594590)",
              WGS84: "POINT (15.065455007779068 59.48975132293166)"
            },
            LocationSignature: "xKh"
          },
          {
            AdvertisedShortLocationName: "Kårsta",
            Geometry: {
              SWEREF99TM: "POINT (684085 6617709)",
              WGS84: "POINT (18.267415831880122 59.656678396850083)"
            },
            LocationSignature: "xKår"
          },
          {
            AdvertisedShortLocationName: "Kopperå",
            Geometry: {
              SWEREF99TM: "POINT (351686 7027970)",
              WGS84: "POINT (12.035649996350431 63.3495841748434)"
            },
            LocationSignature: "xKpr"
          },
          {
            AdvertisedShortLocationName: "Löth",
            Geometry: {
              SWEREF99TM: "POINT (512637 6588400)",
              WGS84: "POINT (15.222766304686532 59.433991531717481)"
            },
            LocationSignature: "xL"
          },
          {
            AdvertisedShortLocationName: "Långbacka",
            Geometry: {
              SWEREF99TM: "POINT (576518 6852895)",
              WGS84: "POINT (16.451540567509696 61.801260687408352)"
            },
            LocationSignature: "xLba"
          },
          {
            AdvertisedShortLocationName: "Lindholmen",
            Geometry: {
              SWEREF99TM: "POINT (675562 6609224)",
              WGS84: "POINT (18.109357019599226 59.584275202441916)"
            },
            LocationSignature: "xLdm"
          },
          {
            AdvertisedShortLocationName: "Länna bruk",
            Geometry: {
              SWEREF99TM: "POINT (666280 6641465)",
              WGS84: "POINT (17.9707806436961 59.877197703938783)"
            },
            LocationSignature: "xLbr"
          },
          {
            AdvertisedShortLocationName: "Läggesta nedre",
            Geometry: {
              SWEREF99TM: "POINT (624004 6569487)",
              WGS84: "POINT (17.174168067621 59.24617924200534)"
            },
            LocationSignature: "xLgn"
          },
          {
            AdvertisedShortLocationName: "Ljungbyheds grusgrop",
            Geometry: {
              SWEREF99TM: "POINT (389735 6217078)",
              WGS84: "POINT (13.227972791339253 56.086103808131647)"
            },
            LocationSignature: "xLjd"
          },
          {
            AdvertisedShortLocationName: "Lövstahagen",
            Geometry: {
              SWEREF99TM: "POINT (661735 6637925)",
              WGS84: "POINT (17.886946736212263 59.847255404116495)"
            },
            LocationSignature: "xLh"
          },
          {
            AdvertisedShortLocationName: "Lillängen",
            Geometry: {
              SWEREF99TM: "POINT (679979 6578300)",
              WGS84: "POINT (18.161444242312808 59.30512448060616)"
            },
            LocationSignature: "xLiä"
          },
          {
            AdvertisedShortLocationName: "Lahäll",
            Geometry: {
              SWEREF99TM: "POINT (674397 6591300)",
              WGS84: "POINT (18.074093088593884 59.424039235122578)"
            },
            LocationSignature: "xLhl"
          },
          {
            AdvertisedShortLocationName: "Lilla Mon",
            Geometry: {
              SWEREF99TM: "POINT (507005 6592971)",
              WGS84: "POINT (15.123634971221357 59.475170662264752)"
            },
            LocationSignature: "xLm"
          },
          {
            AdvertisedShortLocationName: "Lundsbrunn",
            Geometry: {
              SWEREF99TM: "POINT (409194 6482338)",
              WGS84: "POINT (13.443123940678593 58.472224142128368)"
            },
            LocationSignature: "xLnb"
          },
          {
            AdvertisedShortLocationName: "Länna",
            Geometry: {
              SWEREF99TM: "POINT (665631 6640838)",
              WGS84: "POINT (17.95870357923155 59.871835839420825)"
            },
            LocationSignature: "xLna"
          },
          {
            AdvertisedShortLocationName: "Långsjön",
            Geometry: {
              SWEREF99TM: "POINT (577216 6395712)",
              WGS84: "POINT (16.295450052615593 57.696973836844407)"
            },
            LocationSignature: "xLåö"
          },
          {
            AdvertisedShortLocationName: "Länninge",
            Geometry: {
              SWEREF99TM: "POINT (628340 6355282)",
              WGS84: "POINT (17.131332806956639 57.322377470241477)"
            },
            LocationSignature: "xLäe"
          },
          {
            AdvertisedShortLocationName: "Löt",
            Geometry: {
              SWEREF99TM: "POINT (664819 6640168)",
              WGS84: "POINT (17.943689544134624 59.866152267681962)"
            },
            LocationSignature: "xLöt"
          },
          {
            AdvertisedShortLocationName: "Magnor",
            Geometry: {
              SWEREF99TM: "POINT (348761 6641525)",
              WGS84: "POINT (12.297534522161012 59.88351722261369)"
            },
            LocationSignature: "Xmag"
          },
          {
            AdvertisedShortLocationName: "Meråker",
            Geometry: {
              SWEREF99TM: "POINT (354604 7024068)",
              WGS84: "POINT (12.097409536169001 63.315807840009228)"
            },
            LocationSignature: "Xmer"
          },
          {
            AdvertisedShortLocationName: "Mariefred",
            Geometry: {
              SWEREF99TM: "POINT (626510 6570972)",
              WGS84: "POINT (17.218934355225702 59.25876387594888)"
            },
            LocationSignature: "xMfd"
          },
          {
            AdvertisedShortLocationName: "Mariefreds ångbåtsstation",
            Geometry: {
              SWEREF99TM: "POINT (626895 6570830)",
              WGS84: "POINT (17.225598082708178 59.257374408781338)"
            },
            LocationSignature: "xMfå"
          },
          {
            AdvertisedShortLocationName: "Moga",
            Geometry: {
              SWEREF99TM: "POINT (672167 6643785)",
              WGS84: "POINT (18.077709455026469 59.895588431425814)"
            },
            LocationSignature: "xMg"
          },
          {
            AdvertisedShortLocationName: "Mosstorp",
            Geometry: {
              SWEREF99TM: "POINT (532261 6349638)",
              WGS84: "POINT (15.535216809736863 57.288590535804623)"
            },
            LocationSignature: "xMop"
          },
          {
            AdvertisedShortLocationName: "Marielund",
            Geometry: {
              SWEREF99TM: "POINT (661082 6637404)",
              WGS84: "POINT (17.8749046825506 59.842837837390014)"
            },
            LocationSignature: "xMl"
          },
          {
            AdvertisedShortLocationName: "Målilla Sanatorium",
            Geometry: {
              SWEREF99TM: "POINT (546791 6360895)",
              WGS84: "POINT (15.778387088483424 57.3884460093449)"
            },
            LocationSignature: "xMsa"
          },
          {
            AdvertisedShortLocationName: "Marielund",
            Geometry: {
              SWEREF99TM: "POINT (624675 6570224)",
              WGS84: "POINT (17.186346447888777 59.252595917785463)"
            },
            LocationSignature: "xMln"
          },
          {
            AdvertisedShortLocationName: "Molnby",
            Geometry: {
              SWEREF99TM: "POINT (674338 6606172)",
              WGS84: "POINT (18.085207687052996 59.557420819100969)"
            },
            LocationSignature: "xMnb"
          },
          {
            AdvertisedShortLocationName: "Myråsen",
            Geometry: {
              SWEREF99TM: "POINT (408838 6479132)",
              WGS84: "POINT (13.438299542754198 58.443366269690827)"
            },
            LocationSignature: "xMyå"
          },
          {
            AdvertisedShortLocationName: "Munkebos",
            Geometry: {
              SWEREF99TM: "POINT (710679 6382510)",
              WGS84: "POINT (18.519765183018048 57.535945016647446)"
            },
            LocationSignature: "xMus"
          },
          {
            AdvertisedShortLocationName: "Mörby",
            Geometry: {
              SWEREF99TM: "POINT (673034 6587677)",
              WGS84: "POINT (18.047185484418566 59.39211340077091)"
            },
            LocationSignature: "xMöb"
          },
          {
            AdvertisedShortLocationName: "Nora stad",
            Geometry: {
              SWEREF99TM: "POINT (502379 6597532)",
              WGS84: "POINT (15.042039186412211 59.516179953488177)"
            },
            LocationSignature: "xN"
          },
          {
            AdvertisedShortLocationName: "Näsbyallé",
            Geometry: {
              SWEREF99TM: "POINT (675008 6591696)",
              WGS84: "POINT (18.085168459974835 59.4273364078845)"
            },
            LocationSignature: "xNbe"
          },
          {
            AdvertisedShortLocationName: "Näsbypark",
            Geometry: {
              SWEREF99TM: "POINT (675574 6592038)",
              WGS84: "POINT (18.09540968647935 59.430167197571265)"
            },
            LocationSignature: "xNbp"
          },
          {
            AdvertisedShortLocationName: "Neglinge",
            Geometry: {
              SWEREF99TM: "POINT (687509 6576814)",
              WGS84: "POINT (18.29217669854955 59.288528260593466)"
            },
            LocationSignature: "xNeg"
          },
          {
            AdvertisedShortLocationName: "Narvik",
            Geometry: {
              SWEREF99TM: "POINT (597871 7593449)",
              WGS84: "POINT (17.386687780396514 68.436692169074973)"
            },
            LocationSignature: "Xnk"
          },
          {
            AdvertisedShortLocationName: "Nacka",
            Geometry: {
              SWEREF99TM: "POINT (678192 6578377)",
              WGS84: "POINT (18.130172547252563 59.3065721897222)"
            },
            LocationSignature: "xNka"
          },
          {
            AdvertisedShortLocationName: "Näsviken",
            Geometry: {
              SWEREF99TM: "POINT (598740 6848445)",
              WGS84: "POINT (16.870426270920632 61.756235402087022)"
            },
            LocationSignature: "xNv"
          },
          {
            AdvertisedShortLocationName: "Nygårds Stall Dalhem",
            Geometry: {
              SWEREF99TM: "POINT (710312 6381764)",
              WGS84: "POINT (18.513002814956579 57.529427122763735)"
            },
            LocationSignature: "xNys"
          },
          {
            AdvertisedShortLocationName: "Ormsta",
            Geometry: {
              SWEREF99TM: "POINT (674070 6604910)",
              WGS84: "POINT (18.079438889749383 59.546216172473514)"
            },
            LocationSignature: "xOta"
          },
          {
            AdvertisedShortLocationName: "Ohs Bruk",
            Geometry: {
              SWEREF99TM: "POINT (459581 6339050)",
              WGS84: "POINT (14.331174043381088 57.192834726448879)"
            },
            LocationSignature: "xOhs"
          },
          {
            AdvertisedShortLocationName: "Pershyttevägen",
            Geometry: {
              SWEREF99TM: "POINT (500948 6596473)",
              WGS84: "POINT (15.016747357269125 59.506675884417348)"
            },
            LocationSignature: "xPgn"
          },
          {
            AdvertisedShortLocationName: "Pershyttan",
            Geometry: {
              SWEREF99TM: "POINT (500400 6595134)",
              WGS84: "POINT (15.007063891912594 59.494652613011944)"
            },
            LocationSignature: "xPh"
          },
          {
            AdvertisedShortLocationName: "Pallanite",
            Geometry: {
              SWEREF99TM: "POINT (578428 6747278)",
              WGS84: "POINT (16.443480671331276 60.853009806838045)"
            },
            LocationSignature: "xPte"
          },
          {
            AdvertisedShortLocationName: "Roma",
            Geometry: {
              SWEREF99TM: "POINT (707075 6379204)",
              WGS84: "POINT (18.4568714513221 57.507964843940222)"
            },
            LocationSignature: "xRa"
          },
          {
            AdvertisedShortLocationName: "Kvarnabo",
            Geometry: {
              SWEREF99TM: "POINT (351007 6437728)",
              WGS84: "POINT (12.475060700442278 58.055969984560122)"
            },
            LocationSignature: "xQo"
          },
          {
            AdvertisedShortLocationName: "Oslättfors",
            Geometry: {
              SWEREF99TM: "POINT (607779 6739131)",
              WGS84: "POINT (16.978843222145951 60.773027096679485)"
            },
            LocationSignature: "Osl"
          },
          {
            AdvertisedShortLocationName: "Ovansjö",
            Geometry: {
              SWEREF99TM: "POINT (530571 6931934)",
              WGS84: "POINT (15.593763880731869 62.51715116295648)"
            },
            LocationSignature: "Osö"
          },
          {
            AdvertisedShortLocationName: "Ottebol",
            Geometry: {
              SWEREF99TM: "POINT (357148 6620509)",
              WGS84: "POINT (12.461594101865348 59.697975902035061)"
            },
            LocationSignature: "Ot"
          },
          {
            AdvertisedShortLocationName: "Oxie",
            Geometry: {
              SWEREF99TM: "POINT (379876 6156714)",
              WGS84: "POINT (13.096284054069896 55.5416490616957)"
            },
            LocationSignature: "Ox"
          },
          {
            AdvertisedShortLocationName: "Oxelösund",
            Geometry: {
              SWEREF99TM: "POINT (621785 6505271)",
              WGS84: "POINT (17.099949191978347 58.670512239456521)"
            },
            LocationSignature: "Oxd"
          },
          {
            AdvertisedShortLocationName: "Partille",
            Geometry: {
              SWEREF99TM: "POINT (327535 6403532)",
              WGS84: "POINT (12.102643921452882 57.740710297135657)"
            },
            LocationSignature: "P"
          },
          {
            AdvertisedShortLocationName: "Oxmyran",
            Geometry: {
              SWEREF99TM: "POINT (708797 7078696)",
              WGS84: "POINT (19.236913571628566 63.773421446275172)"
            },
            LocationSignature: "Oxm"
          },
          {
            AdvertisedShortLocationName: "Polcirkeln",
            Geometry: {
              SWEREF99TM: "POINT (766860 7396027)",
              WGS84: "POINT (21.02118150459631 66.567304346078529)"
            },
            LocationSignature: "Pc"
          },
          {
            AdvertisedShortLocationName: "Prässebo",
            Geometry: {
              SWEREF99TM: "POINT (340422 6444245)",
              WGS84: "POINT (12.291472671036578 58.110759870948904)"
            },
            LocationSignature: "Pb"
          },
          {
            AdvertisedShortLocationName: "Persberg",
            Geometry: {
              SWEREF99TM: "POINT (457189 6623780)",
              WGS84: "POINT (14.238207213052981 59.749679913743385)"
            },
            LocationSignature: "Pbg"
          },
          {
            AdvertisedShortLocationName: "Peuravaara",
            Geometry: {
              SWEREF99TM: "POINT (716576 7537734)",
              WGS84: "POINT (20.157396090025767 67.872924884396738)"
            },
            LocationSignature: "Pea"
          },
          {
            AdvertisedShortLocationName: "Peberholm",
            Geometry: {
              SWEREF99TM: "POINT (358159 6163925)",
              WGS84: "POINT (12.748686749416848 55.600566583524916)"
            },
            LocationSignature: "Phm"
          },
          {
            AdvertisedShortLocationName: "Porjus",
            Geometry: {
              SWEREF99TM: "POINT (710704 7435785)",
              WGS84: "POINT (19.829651910179116 66.966146378057857)"
            },
            LocationSignature: "Pj"
          },
          {
            AdvertisedShortLocationName: "Pitkäjärvi",
            Geometry: {
              SWEREF99TM: "POINT (751589 7517503)",
              WGS84: "POINT (20.939888333139141 67.66419954112915)"
            },
            LocationSignature: "Pii"
          },
          {
            AdvertisedShortLocationName: "Pauliström",
            Geometry: {
              SWEREF99TM: "POINT (530441 6369814)",
              WGS84: "POINT (15.507521221099788 57.469948169438311)"
            },
            LocationSignature: "Plm"
          },
          {
            AdvertisedShortLocationName: "Pilgrimstad",
            Geometry: {
              SWEREF99TM: "POINT (502049 6980573)",
              WGS84: "POINT (15.040389875520408 62.954972127610361)"
            },
            LocationSignature: "Pl"
          },
          {
            AdvertisedShortLocationName: "Prästmon",
            Geometry: {
              SWEREF99TM: "POINT (639161 6997229)",
              WGS84: "POINT (17.755313133065048 63.077685513224)"
            },
            LocationSignature: "Pm"
          },
          {
            AdvertisedShortLocationName: "Perstorp",
            Geometry: {
              SWEREF99TM: "POINT (400480 6222416)",
              WGS84: "POINT (13.398581628274538 56.13640272456923)"
            },
            LocationSignature: "Pt"
          },
          {
            AdvertisedShortLocationName: "Piteå",
            Geometry: {
              SWEREF99TM: "POINT (800965 7259346)",
              WGS84: "POINT (21.468066583803726 65.317930286105948)"
            },
            LocationSignature: "Ptå"
          },
          {
            AdvertisedShortLocationName: "Pålsboda",
            Geometry: {
              SWEREF99TM: "POINT (519501 6547214)",
              WGS84: "POINT (15.340060316891568 59.063873128113606)"
            },
            LocationSignature: "På"
          },
          {
            AdvertisedShortLocationName: "Påarp",
            Geometry: {
              SWEREF99TM: "POINT (363978 6211486)",
              WGS84: "POINT (12.81718764853875 56.029265566714962)"
            },
            LocationSignature: "Påa"
          },
          {
            AdvertisedShortLocationName: "Piteälvsbron",
            Geometry: {
              SWEREF99TM: "POINT (697836 7325388)",
              WGS84: "POINT (19.3595803083385 65.98742483537643)"
            },
            LocationSignature: "Päb"
          },
          {
            AdvertisedShortLocationName: "Pölsebo",
            Geometry: {
              SWEREF99TM: "POINT (315217 6399488)",
              WGS84: "POINT (11.899147150690903 57.699540667493736)"
            },
            LocationSignature: "Pöb"
          },
          {
            AdvertisedShortLocationName: "Rotebro",
            Geometry: {
              SWEREF99TM: "POINT (665141 6596623)",
              WGS84: "POINT (17.915298260190166 59.475514234039295)"
            },
            LocationSignature: "R"
          },
          {
            AdvertisedShortLocationName: "Söräng",
            Geometry: {
              SWEREF99TM: "POINT (565197 6801308)",
              WGS84: "POINT (16.218544911532231 61.340364136588278)"
            },
            LocationSignature: "Säg"
          },
          {
            AdvertisedShortLocationName: "Sävsjö",
            Geometry: {
              SWEREF99TM: "POINT (479904 6362288)",
              WGS84: "POINT (14.665566693279215 57.402920397793451)"
            },
            LocationSignature: "Sä"
          },
          {
            AdvertisedShortLocationName: "Sävastklinten",
            Geometry: {
              SWEREF99TM: "POINT (808537 7311574)",
              WGS84: "POINT (21.749371324555021 65.776296461227659)"
            },
            LocationSignature: "Sän"
          },
          {
            AdvertisedShortLocationName: "Skärpan",
            Geometry: {
              SWEREF99TM: "POINT (642368 6688505)",
              WGS84: "POINT (17.576853802163885 60.308089113351215)"
            },
            LocationSignature: "Säp"
          },
          {
            AdvertisedShortLocationName: "Sunnäsbruk",
            Geometry: {
              SWEREF99TM: "POINT (614542 6776740)",
              WGS84: "POINT (17.125297957571942 61.108563249534164)"
            },
            LocationSignature: "Säu"
          },
          {
            AdvertisedShortLocationName: "Sävenäs rangerbangård",
            Geometry: {
              SWEREF99TM: "POINT (324125 6402500)",
              WGS84: "POINT (12.046198561249218 57.730130580574482)"
            },
            LocationSignature: "Sär"
          },
          {
            AdvertisedShortLocationName: "Sävenäs lokstation",
            Geometry: {
              SWEREF99TM: "POINT (324135 6402510)",
              WGS84: "POINT (12.046358939003424 57.730224199246436)"
            },
            LocationSignature: "Sävl"
          },
          {
            AdvertisedShortLocationName: "Sävenäs",
            Geometry: {
              SWEREF99TM: "POINT (322848 6401955)",
              WGS84: "POINT (12.025185985883473 57.724740151675235)"
            },
            LocationSignature: "Säv"
          },
          {
            AdvertisedShortLocationName: "Säby",
            Geometry: {
              SWEREF99TM: "POINT (651496 6635465)",
              WGS84: "POINT (17.702637227405763 59.829068148399806)"
            },
            LocationSignature: "Säy"
          },
          {
            AdvertisedShortLocationName: "Södertälje C",
            Geometry: {
              SWEREF99TM: "POINT (650142 6564295)",
              WGS84: "POINT (17.628350245585395 59.191144920124572)"
            },
            LocationSignature: "Söc"
          },
          {
            AdvertisedShortLocationName: "Södertälje hamn",
            Geometry: {
              SWEREF99TM: "POINT (651279 6562834)",
              WGS84: "POINT (17.647215457098191 59.177634908472093)"
            },
            LocationSignature: "Söd"
          },
          {
            AdvertisedShortLocationName: "Gunnarn",
            Geometry: {
              SWEREF99TM: "POINT (626101 7211380)",
              WGS84: "POINT (17.674941834351941 65.0023050549634)"
            },
            LocationSignature: "Gun"
          },
          {
            AdvertisedShortLocationName: "Gällivare",
            Geometry: {
              SWEREF99TM: "POINT (744773 7457377)",
              WGS84: "POINT (20.65107450057759 67.133324885720427)"
            },
            LocationSignature: "Gv"
          },
          {
            AdvertisedShortLocationName: "Lundsbrunn kurort",
            Geometry: {
              SWEREF99TM: "POINT (409304 6482903)",
              WGS84: "POINT (13.444785006843391 58.47731961930436)"
            },
            LocationSignature: "wLnb"
          },
          {
            AdvertisedShortLocationName: "Vilhelmina",
            Geometry: {
              SWEREF99TM: "POINT (578963 7167465)",
              WGS84: "POINT (16.651389785849108 64.6229731673905)"
            },
            LocationSignature: "Vma"
          },
          {
            AdvertisedShortLocationName: "Vattjom",
            Geometry: {
              SWEREF99TM: "POINT (603777 6916705)",
              WGS84: "POINT (17.005752809488232 62.367270060899145)"
            },
            LocationSignature: "Vm"
          },
          {
            AdvertisedShortLocationName: "Vilhelmina norra",
            Geometry: {
              SWEREF99TM: "POINT (577090 7170028)",
              WGS84: "POINT (16.613601624515624 64.646394885755583)"
            },
            LocationSignature: "Vman"
          },
          {
            AdvertisedShortLocationName: "Vilhelmina timmer",
            Geometry: {
              SWEREF99TM: "POINT (577089 7170361)",
              WGS84: "POINT (16.61375807543596 64.6493820117804)"
            },
            LocationSignature: "Vmat"
          },
          {
            AdvertisedShortLocationName: "VME",
            Geometry: {
              SWEREF99TM: "POINT (582093 6586133)",
              WGS84: "POINT (16.446014019975404 59.405815401145425)"
            },
            LocationSignature: "Vme"
          },
          {
            AdvertisedShortLocationName: "Värtan",
            Geometry: {
              SWEREF99TM: "POINT (675956 6583235)",
              WGS84: "POINT (18.094923050232673 59.3510713152609)"
            },
            LocationSignature: "Vn"
          },
          {
            AdvertisedShortLocationName: "Nockeby",
            Geometry: {
              SWEREF99TM: "POINT (666042 6580298)",
              WGS84: "POINT (17.918552137083967 59.328749944536682)"
            },
            LocationSignature: "wNob"
          },
          {
            AdvertisedShortLocationName: "Voxna",
            Geometry: {
              SWEREF99TM: "POINT (530631 6800870)",
              WGS84: "POINT (15.572487263238113 61.340688259018215)"
            },
            LocationSignature: "Vna"
          },
          {
            AdvertisedShortLocationName: "Nockeby torg",
            Geometry: {
              SWEREF99TM: "POINT (666564 6580363)",
              WGS84: "POINT (17.927763741891816 59.329127283479373)"
            },
            LocationSignature: "wNot"
          },
          {
            AdvertisedShortLocationName: "Vännäs",
            Geometry: {
              SWEREF99TM: "POINT (732865 7095690)",
              WGS84: "POINT (19.749005567890734 63.910274275617617)"
            },
            LocationSignature: "Vns"
          },
          {
            AdvertisedShortLocationName: "Vackernäset",
            Geometry: {
              SWEREF99TM: "POINT (556617 6986540)",
              WGS84: "POINT (16.117951207797987 63.004116018746068)"
            },
            LocationSignature: "Vnt"
          },
          {
            AdvertisedShortLocationName: "Vinnö",
            Geometry: {
              SWEREF99TM: "POINT (443271 6212373)",
              WGS84: "POINT (14.089146607505324 56.053184669355254)"
            },
            LocationSignature: "Vnö"
          },
          {
            AdvertisedShortLocationName: "Olovslund",
            Geometry: {
              SWEREF99TM: "POINT (666977 6580253)",
              WGS84: "POINT (17.934927046911895 59.327977622487133)"
            },
            LocationSignature: "wOll"
          },
          {
            AdvertisedShortLocationName: "Vansbro",
            Geometry: {
              SWEREF99TM: "POINT (457502 6708739)",
              WGS84: "POINT (14.226069019340349 60.512498020908353)"
            },
            LocationSignature: "Vo"
          },
          {
            AdvertisedShortLocationName: "Varpemossen",
            Geometry: {
              SWEREF99TM: "POINT (341187 6446100)",
              WGS84: "POINT (12.303182801258048 58.127677846624231)"
            },
            LocationSignature: "Vpm"
          },
          {
            AdvertisedShortLocationName: "Vingåker",
            Geometry: {
              SWEREF99TM: "POINT (550295 6545070)",
              WGS84: "POINT (15.876508044889901 59.042101764679089)"
            },
            LocationSignature: "Vr"
          },
          {
            AdvertisedShortLocationName: "Vrena",
            Geometry: {
              SWEREF99TM: "POINT (598299 6525983)",
              WGS84: "POINT (16.704290020129495 58.862410504368214)"
            },
            LocationSignature: "Vre"
          },
          {
            AdvertisedShortLocationName: "Verveln",
            Geometry: {
              SWEREF99TM: "POINT (536129 6417092)",
              WGS84: "POINT (15.609432792597241 57.894182234645179)"
            },
            LocationSignature: "Vrn"
          },
          {
            AdvertisedShortLocationName: "Ropsten",
            Geometry: {
              SWEREF99TM: "POINT (676424 6584043)",
              WGS84: "POINT (18.103802686428551 59.358121164186819)"
            },
            LocationSignature: "wRos"
          },
          {
            AdvertisedShortLocationName: "Vekerum",
            Geometry: {
              SWEREF99TM: "POINT (486387 6225796)",
              WGS84: "POINT (14.780727231863164 56.176953887852711)"
            },
            LocationSignature: "Vru"
          },
          {
            AdvertisedShortLocationName: "Värö",
            Geometry: {
              SWEREF99TM: "POINT (330787 6347432)",
              WGS84: "POINT (12.196072102584321 57.238625054834266)"
            },
            LocationSignature: "Vrö"
          },
          {
            AdvertisedShortLocationName: "Torbacken",
            Geometry: {
              SWEREF99TM: "POINT (337377 6439683)",
              WGS84: "POINT (12.243018803241961 58.068724021676495)"
            },
            LocationSignature: "Tbn"
          },
          {
            AdvertisedShortLocationName: "Tobo",
            Geometry: {
              SWEREF99TM: "POINT (645729 6683169)",
              WGS84: "POINT (17.6337596120473 60.259036019685695)"
            },
            LocationSignature: "Tbo"
          },
          {
            AdvertisedShortLocationName: "Tibro",
            Geometry: {
              SWEREF99TM: "POINT (451372 6476314)",
              WGS84: "POINT (14.167421816650002 58.424862342364044)"
            },
            LocationSignature: "Tbr"
          },
          {
            AdvertisedShortLocationName: "Tandsbyn",
            Geometry: {
              SWEREF99TM: "POINT (487034 6985474)",
              WGS84: "POINT (14.74403140627081 62.99873430320563)"
            },
            LocationSignature: "Tby"
          },
          {
            AdvertisedShortLocationName: "Trödje",
            Geometry: {
              SWEREF99TM: "POINT (619617 6744119)",
              WGS84: "POINT (17.199079624026957 60.814398904816088)"
            },
            LocationSignature: "Tdj"
          },
          {
            AdvertisedShortLocationName: "Torebo",
            Geometry: {
              SWEREF99TM: "POINT (345246 6314599)",
              WGS84: "POINT (12.455654810940652 56.949083482969478)"
            },
            LocationSignature: "Teo"
          },
          {
            AdvertisedShortLocationName: "Tågarp",
            Geometry: {
              SWEREF99TM: "POINT (371753 6199903)",
              WGS84: "POINT (12.947381489347032 55.927403258121785)"
            },
            LocationSignature: "Tgp"
          },
          {
            AdvertisedShortLocationName: "Tolikberget",
            Geometry: {
              SWEREF99TM: "POINT (763446 7378435)",
              WGS84: "POINT (20.907244817818512 66.4132585858858)"
            },
            LocationSignature: "Tet"
          },
          {
            AdvertisedShortLocationName: "Tenhult",
            Geometry: {
              SWEREF99TM: "POINT (459870 6396091)",
              WGS84: "POINT (14.326605469367479 57.70521548903799)"
            },
            LocationSignature: "Th"
          },
          {
            AdvertisedShortLocationName: "Trångstad",
            Geometry: {
              SWEREF99TM: "POINT (401560 6603119)",
              WGS84: "POINT (13.258352501514773 59.554773213650314)"
            },
            LocationSignature: "Tgs"
          },
          {
            AdvertisedShortLocationName: "Tallhed",
            Geometry: {
              SWEREF99TM: "POINT (484372 6786223)",
              WGS84: "POINT (14.709128203122093 61.210087670161826)"
            },
            LocationSignature: "Thd"
          },
          {
            AdvertisedShortLocationName: "Tornhill",
            Geometry: {
              SWEREF99TM: "POINT (386346 6178411)",
              WGS84: "POINT (13.189795351981873 55.73805960046775)"
            },
            LocationSignature: "Thl"
          },
          {
            AdvertisedShortLocationName: "Träskholm",
            Geometry: {
              SWEREF99TM: "POINT (737978 7243950)",
              WGS84: "POINT (20.095135158028381 65.232202130174272)"
            },
            LocationSignature: "Thm"
          },
          {
            AdvertisedShortLocationName: "Trehörningsjö",
            Geometry: {
              SWEREF99TM: "POINT (691068 7068409)",
              WGS84: "POINT (18.865575698427193 63.691412635844529)"
            },
            LocationSignature: "Thö"
          },
          {
            AdvertisedShortLocationName: "Trollhättan",
            Geometry: {
              SWEREF99TM: "POINT (341647 6463908)",
              WGS84: "POINT (12.298873391406515 58.287612877526279)"
            },
            LocationSignature: "Thn"
          },
          {
            AdvertisedShortLocationName: "Tierp",
            Geometry: {
              SWEREF99TM: "POINT (638685 6692565)",
              WGS84: "POINT (17.513066776528493 60.34578295707297)"
            },
            LocationSignature: "Tip"
          },
          {
            AdvertisedShortLocationName: "Timsfors",
            Geometry: {
              SWEREF99TM: "POINT (414442 6260834)",
              WGS84: "POINT (13.610699283769161 56.484175199377042)"
            },
            LocationSignature: "Tim"
          },
          {
            AdvertisedShortLocationName: "Tjunnaryd",
            Geometry: {
              SWEREF99TM: "POINT (498519 6373549)",
              WGS84: "POINT (14.975285149871361 57.504517540061464)"
            },
            LocationSignature: "Tj"
          },
          {
            AdvertisedShortLocationName: "Tjugonde slussen",
            Geometry: {
              SWEREF99TM: "POINT (341805 6543603)",
              WGS84: "POINT (12.245792469506286 59.002611531831818)"
            },
            LocationSignature: "Tjs"
          },
          {
            AdvertisedShortLocationName: "Tjustskolan",
            Geometry: {
              SWEREF99TM: "POINT (597037 6402372)",
              WGS84: "POINT (16.630536157017342 57.752934226149939)"
            },
            LocationSignature: "Tjsk"
          },
          {
            AdvertisedShortLocationName: "Tjärnvik",
            Geometry: {
              SWEREF99TM: "POINT (621081 6887490)",
              WGS84: "POINT (17.319671824986838 62.100027850098449)"
            },
            LocationSignature: "Tjä"
          },
          {
            AdvertisedShortLocationName: "Tallåsen",
            Geometry: {
              SWEREF99TM: "POINT (553271 6859809)",
              WGS84: "POINT (16.01268952858495 61.867268116267788)"
            },
            LocationSignature: "Tl"
          },
          {
            AdvertisedShortLocationName: "Tällberg",
            Geometry: {
              SWEREF99TM: "POINT (501110 6742600)",
              WGS84: "POINT (15.020406780817069 60.818755853282873)"
            },
            LocationSignature: "Tlg"
          },
          {
            AdvertisedShortLocationName: "Tolita",
            Geometry: {
              SWEREF99TM: "POINT (400594 6605708)",
              WGS84: "POINT (13.240058028329964 59.5777826994211)"
            },
            LocationSignature: "Tlt"
          },
          {
            AdvertisedShortLocationName: "Tomelilla",
            Geometry: {
              SWEREF99TM: "POINT (433728 6156035)",
              WGS84: "POINT (13.949663134726764 55.545834652072571)"
            },
            LocationSignature: "Tli"
          },
          {
            AdvertisedShortLocationName: "Tomteboda bangård",
            Geometry: {
              SWEREF99TM: "POINT (671743 6582437)",
              WGS84: "POINT (18.020304631522645 59.3456514379661)"
            },
            LocationSignature: "Tm"
          },
          {
            AdvertisedShortLocationName: "Tomteboda övre",
            Geometry: {
              SWEREF99TM: "POINT (671495 6583032)",
              WGS84: "POINT (18.016423862998142 59.351088102413044)"
            },
            LocationSignature: "Tmö"
          },
          {
            AdvertisedShortLocationName: "Tannefors",
            Geometry: {
              SWEREF99TM: "POINT (538591 6473480)",
              WGS84: "POINT (15.660269524864816 58.400411375265186)"
            },
            LocationSignature: "Tn"
          },
          {
            AdvertisedShortLocationName: "Tranås",
            Geometry: {
              SWEREF99TM: "POINT (498531 6432951)",
              WGS84: "POINT (14.975121288653369 58.038088925601144)"
            },
            LocationSignature: "Tns"
          },
          {
            AdvertisedShortLocationName: "Torneträsk",
            Geometry: {
              SWEREF99TM: "POINT (694806 7574553)",
              WGS84: "POINT (19.707929473987917 68.217515131929)"
            },
            LocationSignature: "Tnk"
          },
          {
            AdvertisedShortLocationName: "Tanum",
            Geometry: {
              SWEREF99TM: "POINT (285477 6514089)",
              WGS84: "POINT (11.295587334864106 58.713577029133404)"
            },
            LocationSignature: "Tnu"
          },
          {
            AdvertisedShortLocationName: "Torpshammar",
            Geometry: {
              SWEREF99TM: "POINT (568855 6927554)",
              WGS84: "POINT (16.335400817440309 62.4727105744491)"
            },
            LocationSignature: "To"
          },
          {
            AdvertisedShortLocationName: "Tofta",
            Geometry: {
              SWEREF99TM: "POINT (336796 6339912)",
              WGS84: "POINT (12.300448183722388 57.173327856590419)"
            },
            LocationSignature: "Tof"
          },
          {
            AdvertisedShortLocationName: "Torpåkra",
            Geometry: {
              SWEREF99TM: "POINT (383342 6423803)",
              WGS84: "POINT (13.029488485657703 57.940650410521783)"
            },
            LocationSignature: "Top"
          },
          {
            AdvertisedShortLocationName: "Toresta",
            Geometry: {
              SWEREF99TM: "POINT (645591 6602293)",
              WGS84: "POINT (17.574479262092098 59.533616523256647)"
            },
            LocationSignature: "Tot"
          },
          {
            AdvertisedShortLocationName: "Torup",
            Geometry: {
              SWEREF99TM: "POINT (383213 6314309)",
              WGS84: "POINT (13.079549912332952 56.957617017293622)"
            },
            LocationSignature: "Tou"
          },
          {
            AdvertisedShortLocationName: "Torsby",
            Geometry: {
              SWEREF99TM: "POINT (389068 6668289)",
              WGS84: "POINT (13.002740109219932 60.136490714118622)"
            },
            LocationSignature: "Toy"
          },
          {
            AdvertisedShortLocationName: "Tappudden",
            Geometry: {
              SWEREF99TM: "POINT (506306 6782178)",
              WGS84: "POINT (15.117234454926203 61.174034450017992)"
            },
            LocationSignature: "Tpu"
          },
          {
            AdvertisedShortLocationName: "Traryd",
            Geometry: {
              SWEREF99TM: "POINT (424326 6271830)",
              WGS84: "POINT (13.767949576468506 56.584633669369182)"
            },
            LocationSignature: "Trd"
          },
          {
            AdvertisedShortLocationName: "Teckomatorp",
            Geometry: {
              SWEREF99TM: "POINT (380020 6193332)",
              WGS84: "POINT (13.082523880380096 55.870528186990647)"
            },
            LocationSignature: "Tp"
          },
          {
            AdvertisedShortLocationName: "Trelleborg",
            Geometry: {
              SWEREF99TM: "POINT (383466 6137672)",
              WGS84: "POINT (13.161120593885759 55.3715014913109)"
            },
            LocationSignature: "Trg"
          },
          {
            AdvertisedShortLocationName: "Trekanten",
            Geometry: {
              SWEREF99TM: "POINT (568176 6284874)",
              WGS84: "POINT (16.113449667032402 56.702948067186448)"
            },
            LocationSignature: "Tre"
          },
          {
            AdvertisedShortLocationName: "Triangeln",
            Geometry: {
              SWEREF99TM: "POINT (374018 6162537)",
              WGS84: "POINT (13.000853697723674 55.592463367919031)"
            },
            LocationSignature: "Tri"
          },
          {
            AdvertisedShortLocationName: "Fjällåsen",
            Geometry: {
              SWEREF99TM: "POINT (717148 7498205)",
              WGS84: "POINT (20.093703207908689 67.519356969985637)"
            },
            LocationSignature: "Fjå"
          },
          {
            AdvertisedShortLocationName: "Fåker",
            Geometry: {
              SWEREF99TM: "POINT (478437 6984903)",
              WGS84: "POINT (14.5743926077072 62.993200596948732)"
            },
            LocationSignature: "Fkr"
          },
          {
            AdvertisedShortLocationName: "Fjälkinge",
            Geometry: {
              SWEREF99TM: "POINT (456270 6210914)",
              WGS84: "POINT (14.298079224161043 56.041440495737952)"
            },
            LocationSignature: "Fki"
          },
          {
            AdvertisedShortLocationName: "Nälden",
            Geometry: {
              SWEREF99TM: "POINT (463157 7024885)",
              WGS84: "POINT (14.263773013864942 63.350783259670948)"
            },
            LocationSignature: "Nä"
          },
          {
            AdvertisedShortLocationName: "Flädie",
            Geometry: {
              SWEREF99TM: "POINT (379032 6177008)",
              WGS84: "POINT (13.073995127687617 55.723689424454264)"
            },
            LocationSignature: "Fl"
          },
          {
            AdvertisedShortLocationName: "Nödinge",
            Geometry: {
              SWEREF99TM: "POINT (324721 6420568)",
              WGS84: "POINT (12.042947479417407 57.892440825736806)"
            },
            LocationSignature: "Nöe"
          },
          {
            AdvertisedShortLocationName: "Nättraby",
            Geometry: {
              SWEREF99TM: "POINT (532696 6229693)",
              WGS84: "POINT (15.527123636495114 56.211038461732464)"
            },
            LocationSignature: "Nät"
          },
          {
            AdvertisedShortLocationName: "Markaryd",
            Geometry: {
              SWEREF99TM: "POINT (413353 6258122)",
              WGS84: "POINT (13.593922735903572 56.45961821495866)"
            },
            LocationSignature: "Mrd"
          },
          {
            AdvertisedShortLocationName: "Marsvinsholm",
            Geometry: {
              SWEREF99TM: "POINT (417429 6147235)",
              WGS84: "POINT (13.694029878198478 55.464295506045836)"
            },
            LocationSignature: "Mrh"
          },
          {
            AdvertisedShortLocationName: "Axhult",
            Geometry: {
              SWEREF99TM: "POINT (419555 6264370)",
              WGS84: "POINT (13.692607159687721 56.516835950095555)"
            },
            LocationSignature: "Mrd.ax"
          },
          {
            AdvertisedShortLocationName: "Marma",
            Geometry: {
              SWEREF99TM: "POINT (633057 6707327)",
              WGS84: "POINT (17.421016802707587 60.480095151744059)"
            },
            LocationSignature: "Mrm"
          },
          {
            AdvertisedShortLocationName: "Morshyttan",
            Geometry: {
              SWEREF99TM: "POINT (576105 6681368)",
              WGS84: "POINT (16.375385043017541 60.261862421899536)"
            },
            LocationSignature: "Mrs"
          },
          {
            AdvertisedShortLocationName: "Skruv",
            Geometry: {
              SWEREF99TM: "POINT (522502 6281583)",
              WGS84: "POINT (15.367249504289669 56.67781516987047)"
            },
            LocationSignature: "Sru"
          },
          {
            AdvertisedShortLocationName: "Axmar Bruk",
            Geometry: {
              SWEREF99TM: "POINT (615192 6770206)",
              WGS84: "POINT (17.133398856743455 61.04975303693471)"
            },
            LocationSignature: "Ax.br"
          },
          {
            AdvertisedShortLocationName: "Lejonspåret",
            Geometry: {
              SWEREF99TM: "POINT (320577 6400886)",
              WGS84: "POINT (11.987907565368483 57.714250380524192)"
            },
            LocationSignature: "G.ls"
          },
          {
            AdvertisedShortLocationName: "Karlsvik",
            Geometry: {
              SWEREF99TM: "POINT (823643 7293155)",
              WGS84: "POINT (22.031965500045811 65.597417124207979)"
            },
            LocationSignature: "Le.k"
          },
          {
            AdvertisedShortLocationName: "Rosengård",
            Geometry: {
              SWEREF99TM: "POINT (375896 6162094)",
              WGS84: "POINT (13.030834150865605 55.588967186845821)"
            },
            LocationSignature: "Rog"
          },
          {
            AdvertisedShortLocationName: "Kronetorp",
            Geometry: {
              SWEREF99TM: "POINT (380127 6168721)",
              WGS84: "POINT (13.095040843362426 55.64954064342588)"
            },
            LocationSignature: "Kop"
          },
          {
            AdvertisedShortLocationName: "Kvarnängen",
            Geometry: {
              SWEREF99TM: "POINT (668503 6535864)",
              WGS84: "POINT (17.927513716982958 58.929263989097976)"
            },
            LocationSignature: "Kng"
          },
          {
            AdvertisedShortLocationName: "Oxberg",
            Geometry: {
              SWEREF99TM: "POINT (455430 6777534)",
              WGS84: "POINT (14.172544038433539 61.129862422991231)"
            },
            LocationSignature: "xOxb"
          },
          {
            AdvertisedShortLocationName: "Åseda (xÅa)",
            Geometry: {
              SWEREF99TM: "POINT (521045 6336093)",
              WGS84: "POINT (15.347998366508474 57.167570148000692)"
            },
            LocationSignature: "xÅa"
          },
          {
            AdvertisedShortLocationName: "Villersmuren",
            Geometry: {
              SWEREF99TM: "POINT (592872 6720232)",
              WGS84: "POINT (16.696344553652775 60.607175150309907)"
            },
            LocationSignature: "Vmu"
          },
          {
            AdvertisedShortLocationName: "Bolzano",
            Geometry: {
              WGS84: "POINT (11.256706733550708 46.516391107128129)"
            },
            LocationSignature: "It.bol"
          },
          {
            AdvertisedShortLocationName: "Venedig",
            Geometry: {
              WGS84: "POINT (12.323499057612219 45.444963021233782)"
            },
            LocationSignature: "It.ven"
          },
          {
            AdvertisedShortLocationName: "Falköpings norra",
            Geometry: {
              SWEREF99TM: "POINT (416376 6451316)",
              WGS84: "POINT (13.577451792839108 58.195118942752835)"
            },
            LocationSignature: "Fn"
          },
          {
            AdvertisedShortLocationName: "Auktsjaur",
            Geometry: {
              SWEREF99TM: "POINT (701333 7297826)",
              WGS84: "POINT (19.393928919392678 65.738681421480877)"
            },
            LocationSignature: "Auk"
          },
          {
            AdvertisedShortLocationName: "Mora lasarett",
            Geometry: {
              SWEREF99TM: "POINT (477354 6764648)",
              WGS84: "POINT (14.58108177023721 61.016054549794767)"
            },
            LocationSignature: "Mrl"
          },
          {
            AdvertisedShortLocationName: "Hålbergsliden",
            Geometry: {
              SWEREF99TM: "POINT (710152 7257104)",
              WGS84: "POINT (19.521930930464205 65.36882506933857)"
            },
            LocationSignature: "Håb"
          },
          {
            AdvertisedShortLocationName: "Bjørnfjell",
            Geometry: {
              SWEREF99TM: "POINT (625944 7594186)",
              WGS84: "POINT (18.071086739827635 68.432146381962568)"
            },
            LocationSignature: "Bjf"
          },
          {
            AdvertisedShortLocationName: "Copenhagen Airport",
            Geometry: {
              SWEREF99TM: "POINT (353645 6167527)",
              WGS84: "POINT (12.675191463290993 55.631570185075716)"
            },
            LocationSignature: "Cph"
          },
          {
            AdvertisedShortLocationName: "Kornsjö gränsen",
            Geometry: {
              SWEREF99TM: "POINT (307786 6538319)",
              WGS84: "POINT (11.659170027956689 58.941305938959005)"
            },
            LocationSignature: "Ko"
          },
          {
            AdvertisedShortLocationName: "f.d. Köpingebro",
            Geometry: {
              SWEREF99TM: "POINT (432727 6146193)",
              WGS84: "POINT (13.936188120894993 55.457275912121467)"
            },
            LocationSignature: "zKöp"
          },
          {
            AdvertisedShortLocationName: "Arninge",
            Geometry: {
              SWEREF99TM: "POINT (678018 6595323)",
              WGS84: "POINT (18.141155544890534 59.458594806216077)"
            },
            LocationSignature: "xAre"
          },
          {
            AdvertisedShortLocationName: "Vaikijaur",
            Geometry: {
              SWEREF99TM: "POINT (713331 7399754)",
              WGS84: "POINT (19.825794031744376 66.64224816962809)"
            },
            LocationSignature: "Vkj"
          },
          {
            AdvertisedShortLocationName: "Nolby",
            Geometry: {
              SWEREF99TM: "POINT (623257 6908613)",
              WGS84: "POINT (17.376155851531163 62.288767776317094)"
            },
            LocationSignature: "Nly"
          },
          {
            AdvertisedShortLocationName: "Njurundabommen",
            Geometry: {
              SWEREF99TM: "POINT (623494 6906754)",
              WGS84: "POINT (17.379403175180233 62.272017235169415)"
            },
            LocationSignature: "Njb"
          }
        ]
      }
    ]
  }
};

let locations: {
  [key: string]: {
    LocationSignature: string;
    Geometry: { SWEREF99TM?: string; WGS84: string };
    AdvertisedShortLocationName: string;
    east: number;
    north: number;
  };
};

export default (location: string) => {
  const response: { RESULT: { TrainStation: TrainStation[] }[] } = raw.RESPONSE;
  const [result]: { TrainStation: TrainStation[] }[] = response.RESULT;
  if (!locations) {
    locations = {};
    result.TrainStation.forEach(obj => {
      const match = /POINT \(([\d\\.]+) ([\d\\.]+)\)/.exec(obj.Geometry.WGS84);
      locations[obj.LocationSignature] = {
        ...obj,
        east: match ? parseFloat(match[1]) : 0,
        north: match ? parseFloat(match[2]) : 0
      };
    });
  }
  return locations[location];
};

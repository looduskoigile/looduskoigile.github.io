const
LIIKUMISPUUE_RATASTOOL = 0,
LIIKUMISPUUE_KARGUD = 1,

NAGEMISVAEGUS = 2,
TAISPIME = 3,

KUULMISLANGUS = 4,
TAISKURT = 5,

TASAKAALUHAIRED = 6,
ORIENTATSIOONIHAIRED = 7,

PULMONOLOOGILISED = 8,
SITT_VASTUPIDAVUS = 9,

SCLEROSIS = 10,
PARKINSONS = 11,
LAPSEVANKER = 12

const RABAD = [
    {
        name: "Männi raba",
        len: "3",
        supports: [LIIKUMISPUUE_KARGUD, LIIKUMISPUUE_RATASTOOL, NAGEMISVAEGUS, ORIENTATSIOONIHAIRED],
        description: "Männi raba on madala taimestikuga ning avarate vaadetega. Olemas on inva wc, ligipääsetavad infotahvlid, prügikastid ja reguleeritud parkimisala."
    },

    {
        name: "Mukri raba",
        len: "2,5",
        supports: [NAGEMISVAEGUS],
        description: "Mukri rabas on parkimisala, infotahvlid ja vaatetorn. Rabasse viib looklev mulsirada, mis vaheldub 40 cm laiuse laudteega. Olemas on palju puhkealasid ja pinke."
    },

    {
        name: "Tuhala matkaraba",
        len: "2,5",
        supports: [SITT_VASTUPIDAVUS, NAGEMISVAEGUS, TAISKURT],
        description: "Raba on kõige enam tuntud “ülekeeva nõiakaevu” järgi.  Vaatamisväärsusteks on erinevad kultusekivid ja kivikalmed. Rabas liikumine on raskendatud liikumispuuetega inimestele."
    },

    {
        name: "Hüppassaare matkarada",
        len: "4,4",
        supports: [LIIKUMISPUUE_KARGUD, TAISKURT, PARKINSONS, NAGEMISVAEGUS, KUULMISLANGUS],
        description: "Matkarada läbitakse laudteedel ning seal on rohkelt platvorme hinge tõmbamiseks ja puhkamiseks. Jalutades tunnetad oma ühtivust loodusega ning rabavaated võivad võtta sõnatuks."
    },

    {
        name: "Rebase raba",
        len: "2",
        supports: [0,1,2,3,4,5,6,7,8,9,10,11,12],
        description: "Rebase raba on ligipääsetav kõigile. Rabas on 1,3m laiune laudtee, piirded ja käsipuud ühel pool laudteed, 10 m vaatetorn, kust saab üles sõita ka liftiga. Reguleeritud parkimiskorraldusega parkla 10 autole, inva wc olemasolu parkimisala kõrval. Infotahvlid on varustatud ka audioesitlussüsteemiga. Rabas on küllaldaselt pinke ja puhkealasid, et koguda jõudu matka jooksul."
    },

    {
        name: "Loosalu raba matkarada",
        len: "7,7",
        supports: [],
        description: "Loosalu rabas on Eesti suurim rabajärv. Rabasse viib looklev ja künklik metsatee, mis asendub põlluteega. Rabas endas on kitsaslaudtee. Puuduvad puhkealad ja pingid rabas, kuid olemas on lõkke ja puhkamisplats koos wc-ga."
    },

    {
        name: "Liivanõmme matkarada",
        len: "7",
        supports: [LIIKUMISPUUE_KARGUD, LIIKUMISPUUE_RATASTOOL, KUULMISLANGUS, NAGEMISVAEGUS, PARKINSONS, LAPSEVANKER],
        description: "Rada algab looduskeskuse juurest ning raja alguses tutvud suure infotahvliga, mis annab sulle infot kuhu edasi suunduda. Ümberringi on mets ja palju taimeid ja puid. Metsateed on laiad ja veidi konarlikud. Üheks sihtkohaks selles matkarajas on ka suur ja avatud vaade merele, kuid sinna liikumispuudega inimene ei pääse, sest takistuseks on liiv ja kitsad rajad. Jalutuskäik selles rabas pakub igaühele palju avastamisrõõmu."
    }
]
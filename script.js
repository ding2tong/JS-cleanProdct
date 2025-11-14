// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle QA collapsible items
function toggleQA(id) {
    const content = document.getElementById('qa-' + id);
    const toggle = document.getElementById('toggle-' + id);
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.textContent = '+';
    } else {
        content.classList.add('expanded');
        toggle.textContent = '−';
    }
}

// Toggle Source References section
function toggleSourceReferences() {
    const content = document.getElementById('source-content');
    const toggle = document.getElementById('source-toggle');
    
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        toggle.textContent = '+';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        toggle.textContent = '−';
    }
}

// Data
const products = [
    {
        id: 1,
        name: "地板清潔液",
        category: "地板清潔",
        icon: "🧹",
        color: "var(--color-bg-1)",
        features: ["植萃黑酵素配方", "溫和分解髒汙黑垢", "不留痕、不黏膩、不黏腳", "深入去除異味"],
        benefits: ["無化學刺鼻味", "無化學殘留", "親膚不咬手"],
        usage_areas: ["地板", "磁磚", "家具", "牆角縫隙"],
        usage_steps: [
            "將清潔液倒入水中稀釋（1瓶蓋約7ml搭配1.5L清水）",
            "以拖把或抹布沾取稀釋清潔液",
            "擦拭需清潔處",
            "待其自然風乾即可"
        ]
    },
    {
        id: 2,
        name: "浴廁潔淨噴霧",
        category: "浴廁清潔",
        icon: "🚿",
        color: "var(--color-bg-2)",
        features: ["深入分解黃垢", "去除水漬", "有效去除浴廁異味", "溫和不咬手"],
        benefits: ["好沖洗不殘留", "無惱人刺鼻化學味"],
        usage_areas: ["馬桶", "磁磚", "洗手台", "浴缸"],
        usage_steps: [
            "將清潔劑噴於髒汙處",
            "靜置五分鐘",
            "以海綿或刷具刷洗",
            "再靜置五分鐘",
            "最後以清水清洗",
            "頑固污漬可重複上述步驟"
        ]
    },
    {
        id: 3,
        name: "廚房潔淨噴霧",
        category: "廚房清潔",
        icon: "🍳",
        color: "var(--color-bg-6)",
        features: ["靜置刷洗有效瓦解頑強油垢", "無化學刺鼻味", "清潔不刺激呼吸道", "溫和親膚低刺激"],
        benefits: ["輕鬆沖洗不殘留", "去除油臭異味", "不咬手"],
        usage_areas: ["抽油煙機", "瓦斯爐", "流理臺", "防濺板"],
        usage_steps: [
            "將清潔劑噴於髒汙處",
            "靜置五分鐘",
            "以海綿或刷具刷洗",
            "再靜置五分鐘",
            "最後以清水清洗",
            "頑固污漬可重複上述步驟"
        ]
    },
    {
        id: 4,
        name: "碗盤蔬果洗潔精",
        category: "餐廚清潔",
        icon: "🥬",
        color: "var(--color-bg-3)",
        features: ["SGS檢驗、食用級安全認證", "可洗蔬果、可洗碗盤", "溫和去油去漬", "咖啡漬茶垢輕鬆去除"],
        benefits: ["泡沫易沖洗、省水省時", "洗後不乾澀不咬手"],
        usage_areas: ["碗盤", "水槽", "餐廚具", "蔬果食材"],
        usage_steps_vegetables: [
            "壓取一下洗潔精於3~5公升的水中攪拌均勻",
            "浸泡蔬果2~3分鐘並不時攪動",
            "再以清水重複沖洗蔬果1~2次即可",
            "※請勿使用於海藻、海帶、菇類等易吸水食材"
        ],
        usage_steps_dishes: [
            "將洗潔精擠在海綿或刷具上搓揉起泡",
            "刷洗碗盤後以清水沖洗即可"
        ]
    }
];

const salesScenarios = [
    {
        id: 1,
        title: "客戶擔心清潔劑傷手",
        question: "這個清潔劑會不會傷手？我用過很多清潔劑手都會乾澀。",
        key_points: [
            "市面上很多清潔劑含有SLS、SLES等石化成分，長期使用會破壞皮膚的弱酸性皮脂膜，造成乾澀",
            "潔麗晶採用ECOCERT認證的植物性介面活性劑，成分來自天然植物，溫和親膚",
            "我們的配方是弱酸性的，能保護皮膚健康，能抑制黴菌等有害細菌的繁殖",
            "很多客戶用過都反映『洗完不緊繃、不咬手』",
            "SGS認證，安全性有保障"
        ]
    },
    {
        id: 2,
        title: "客戶質疑清潔效果",
        question: "天然的清潔劑清潔效果真的夠嗎？我怕用了還是髒髒的。",
        key_points: [
            "潔麗晶的清潔力來自於『黑酵素精華』",
            "用可食用植物經過六個月以上的天然發酵技術形成",
            "含有豐富的有機酸、植物酚類、多酚等活性成分",
            "黑酵素的作用原理是『分解而非覆蓋』：滲透到油垢之間，將黏膩的油脂分解成小分子，隨水流沖散",
            "對於水垢、皂垢、陳年污垢特別有效",
            "靜置5分鐘讓黑酵素充分作用"
        ]
    },
    {
        id: 3,
        title: "客戶關心食品安全（蔬果清潔）",
        question: "現在農藥問題那麼嚴重，用清潔劑洗蔬果真的安全嗎？",
        key_points: [
            "我們的『碗盤蔬果洗潔精』特別為這個需求開發",
            "通過了SGS食品級認證",
            "黑酵素能分解蔬果表面的果蠟",
            "在分解果蠟的過程中帶走藏在蠟質下的農藥",
            "使用方法：1下洗潔精加3-5公升水，浸泡蔬果2-3分鐘，再沖洗1-2次",
            "SGS檢驗證明食用級安全，完全可以放心"
        ]
    },
    {
        id: 4,
        title: "環保意識客戶",
        question: "我很在乎環保。這個產品環保嗎？",
        key_points: [
            "潔麗晶的環保特性有三個層面",
            "第一，原料：採用可食用植物發酵，符合循環經濟理念",
            "同一套發酵技術實現『全利用、零浪費』",
            "第二，介面活性劑：使用ECOCERT全球認證的植物性介面活性劑，禁止使用石化原料和有害化學物質",
            "第三，分解：產品可完全生物分解",
            "分解後的物質最終轉化為二氧化碳和水，不污染水源"
        ]
    },
    {
        id: 5,
        title: "預算考量客戶",
        question: "這個產品好像比一般清潔劑貴？",
        key_points: [
            "潔麗晶採用的植物性介面活性劑成本比石化成分高3-10倍",
            "但為什麼值得？第一，安全性：不會接觸有害化學物質，長期省下看醫生的錢",
            "第二，效率：黑酵素持續分解的能力意味著用量更省，一瓶用得更久",
            "第三，多功能：一瓶浴廁噴霧解決所有浴室問題，不用買多種產品",
            "從整體成本來看，其實更划算",
            "最重要的是，買的是健康和安心，這是無價的"
        ]
    }
];

const quizQuestions = [
    {
        id: 1,
        question: "潔麗晶的黑酵素主要來自於什麼？",
        options: [
            "化學合成的酵素",
            "可食用植物經過六個月以上天然發酵",
            "動物提煉物",
            "礦物質混合物"
        ],
        correct: 1,
        explanation: "黑酵素是採用可食用植物原料天然發酵超過六個月形成的，富含有機酸、植物酚類、多酚及微生物代謝物，這是潔麗晶的獨家配方。"
    },
    {
        id: 2,
        question: "使用浴廁潔淨噴霧清潔浴室時，應該靜置多長時間讓黑酵素充分分解？",
        options: [
            "1-2分鐘",
            "3分鐘",
            "5分鐘",
            "10分鐘以上"
        ],
        correct: 2,
        explanation: "正確的使用方法是：噴於髒汙處靜置5分鐘，以海綿或刷具刷洗後，再靜置5分鐘，最後以清水清洗。頑固污漬可重複步驟。"
    },
    {
        id: 3,
        question: "碗盤蔬果洗潔精已通過什麼認證，可以安心用來清洗食材？",
        options: [
            "一般清潔用品認證",
            "SGS食品級認證",
            "一般環保認證",
            "國際清潔協會認證"
        ],
        correct: 1,
        explanation: "碗盤蔬果洗潔精通過了SGS檢驗，食用級安全認證，可以安心用來清洗蔬果和碗盤，完全符合食品安全標準。"
    },
    {
        id: 4,
        question: "潔麗晶使用的介面活性劑有什麼特點？",
        options: [
            "石化提煉，成本最低",
            "ECOCERT認證的植物性，可生物分解，對環境友善",
            "動物性提煉物",
            "已被禁用的成分"
        ],
        correct: 1,
        explanation: "潔麗晶嚴選ECOCERT認證的植物性介面活性劑，來自天然植物來源，完全可生物分解，禁止使用SLS、SLES等有害石化成分，體現環保友善理念。"
    },
    {
        id: 5,
        question: "當客戶擔心清潔劑傷手時，應該強調潔麗晶的哪個核心優勢？",
        options: [
            "價格最便宜",
            "香氣最好聞",
            "弱酸性配方+植物性介面活性劑，溫和親膚，能保護皮膚健康",
            "容量最大"
        ],
        correct: 2,
        explanation: "潔麗晶採用弱酸性的弱酸性配方和ECOCERT認證的植物性介面活性劑，能保護皮膚的弱酸性皮脂膜，不會造成乾澀或緊繃感，是對抗『傷手』擔憂的最佳論點。"
    }
];

const recommendations = [
    {
        id: 1,
        trigger: "我需要清潔浴室",
        recommended_product: "浴廁潔淨噴霧",
        reason: "專門為浴室清潔設計，能深入分解黃垢、去除水漬，有效去除浴廁異味。",
        quick_tips: [
            "噴於髒汙處靜置5分鐘",
            "用刷具刷洗後再靜置5分鐘",
            "用清水沖洗乾淨",
            "對於馬桶、磁磚、洗手台、浴缸都很有效"
        ]
    },
    {
        id: 2,
        trigger: "我擔心清潔劑傷手",
        recommended_products: ["地板清潔液", "浴廁潔淨噴霧", "廚房潔淨噴霧", "碗盤蔬果洗潔精"],
        reason: "所有潔麗晶產品都採用溫和的植物性成分，弱酸性配方能保護皮膚健康，完全不傷手。",
        quick_tips: [
            "採用ECOCERT認證的植物性介面活性劑",
            "弱酸性配方保護皮膚的弱酸性皮脂膜",
            "能有效抑制黴菌等有害細菌的繁殖",
            "很多客戶用過都反映『洗完不緊繃、不咬手』"
        ]
    },
    {
        id: 3,
        trigger: "我要洗蔬果",
        recommended_product: "碗盤蔬果洗潔精",
        reason: "通過SGS食品級認證，可以安心用來清洗蔬果，黑酵素能分解果蠟並帶走農藥殘留。",
        quick_tips: [
            "1下洗潔精加3-5公升水",
            "浸泡蔬果2-3分鐘",
            "再沖洗1-2次",
            "特別有效去除青花菜、番茄等高農藥殘留蔬菜的污染物"
        ]
    },
    {
        id: 4,
        trigger: "我想找環保產品",
        recommended_products: ["地板清潔液", "浴廁潔淨噴霧", "廚房潔淨噴霧", "碗盤蔬果洗潔精"],
        reason: "所有潔麗晶產品都體現環保理念：採用植物發酵原料、ECOCERT認證植物性介面活性劑、100%生物分解。",
        quick_tips: [
            "植物發酵原料落實『全利用、零浪費』",
            "禁止使用石化原料和有害化學物質",
            "可完全生物分解，分解後變為二氧化碳和水",
            "守護地球與家人健康的最佳選擇"
        ]
    },
    {
        id: 5,
        trigger: "我要清潔廚房油污",
        recommended_product: "廚房潔淨噴霧",
        reason: "專為廚房油污設計，黑酵素能分解油脂、瓦解頑強油垢，適用於抽油煙機、瓦斯爐、流理臺等油膩區域。",
        quick_tips: [
            "噴於髒汙處靜置5分鐘讓黑酵素分解油脂",
            "用刷具刷洗後再靜置5分鐘",
            "用清水沖洗乾淨",
            "頑固油污可重複步驟",
            "不刺激呼吸道，廚房使用安心"
        ]
    }
];

// State
let currentQuizQuestion = 0;
let quizScore = 0;
let quizAnswered = [];

// Initialize (Landing page doesn't need initialization functions)
// All content is now static HTML

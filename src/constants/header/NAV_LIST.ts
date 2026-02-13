export const NAV_LIST = [
    {
        id: 1,
        title: "이용안내",
        path: "/guide",
    },
    {
        id: 2,
        title: "면접 질문",
        path: "/interview/questions",
        sub_list: [
            { title: "질문 생성", path: "/interview/questions/create" }, 
            { title: "질문 보관함", path: "/interview/questions/storage" }
        ]
    },
    {
        id: 3,
        title: "면접 연습",
        path: "/interview/practice",
        sub_list: [
            { title: "면접 연습", path: "/interview/practice" }, 
            { title: "면접 보관함", path: "/interview/practice/storage" }
        ]
    },
    {
        id: 4,
        title: "생기부 관리",
        path: "/record_management",
    },
    {
        id: 5,
        title: "고객센터",
        path: "/support",
        sub_list: [
            { title: "공지사항", path: "/support" }, 
            { title: "FAQ", path: "/support/faq" }
        ]
    },
]
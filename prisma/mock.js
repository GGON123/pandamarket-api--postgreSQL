export const USERS = [
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6",
    email: "hong@example.com",
    firstName: "홍",
    lastName: "길동",
    address: "서울특별시 강남구 테헤란로 25",
    nickname: "hong123",
    image: "",
    createdAt: "2023-10-01T08:00:00Z",
    updatedAt: "2023-10-01T08:00:00Z"
  },
  {
    id: "a2b3c4d5-e6f7-8a9b-0c1d-f2e3a4b5c6d7",
    email: "kim@example.com",
    firstName: "김",
    lastName: "철수",
    address: "부산광역시 해운대구 해변로 89",
    nickname: "kimcs",
    image: "",
    createdAt: "2023-09-15T09:30:00Z",
    updatedAt: "2023-09-15T09:30:00Z"
  },
  {
    id: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8",
    email: "park@example.com",
    firstName: "박",
    lastName: "영희",
    address: "대구광역시 수성구 범어로 55",
    nickname: "parkyeong",
    image: "",
    createdAt: "2023-08-25T12:00:00Z",
    updatedAt: "2023-08-25T12:00:00Z"
  },
  {
    id: "a4b5c6d7-e8f9-0a1b-2c3d-h4f5a6b7c8d9",
    email: "lee@example.com",
    firstName: "이",
    lastName: "민수",
    address: "서울특별시 종로구 세종대로 99",
    nickname: "leems",
    image: "",
    createdAt: "2023-07-10T15:00:00Z",
    updatedAt: "2023-07-10T15:00:00Z"
  },
  {
    id: "a5b6c7d8-e9f0-1a2b-3c4d-i5f6a7b8c9d0",
    email: "choi@example.com",
    firstName: "최",
    lastName: "은지",
    address: "광주광역시 서구 상무대로 102",
    nickname: "choiej",
    image: "",
    createdAt: "2023-06-20T18:00:00Z",
    updatedAt: "2023-06-20T18:00:00Z"
  },
  {
    id: "a6b7c8d9-e0f1-2a3b-4c5d-j6f7a8b9c0d1",
    email: "jang@example.com",
    firstName: "장",
    lastName: "도윤",
    address: "인천광역시 연수구 청학로 50",
    nickname: "jangdy",
    image: "",
    createdAt: "2023-05-30T08:00:00Z",
    updatedAt: "2023-05-30T08:00:00Z"
  },
  {
    id: "a7b8c9d0-e1f2-3a4b-5c6d-k7f8a9b0c1d2",
    email: "jeong@example.com",
    firstName: "정",
    lastName: "하린",
    address: "대전광역시 유성구 대학로 12",
    nickname: "jeonghr",
    image: "",
    createdAt: "2023-05-05T11:00:00Z",
    updatedAt: "2023-05-05T11:00:00Z"
  },
  {
    id: "a8b9c0d1-e2f3-4a5b-6c7d-l8f9a0b1c2d3",
    email: "yoon@example.com",
    firstName: "윤",
    lastName: "서준",
    address: "경기도 성남시 분당구 불정로 10",
    nickname: "yoonsj",
    image: "",
    createdAt: "2023-04-15T10:00:00Z",
    updatedAt: "2023-04-15T10:00:00Z"
  },
  {
    id: "a9b0c1d2-e3f4-5a6b-7c8d-m9f0a1b2c3d4",
    email: "kang@example.com",
    firstName: "강",
    lastName: "지훈",
    address: "충청남도 천안시 서북구 백석로 20",
    nickname: "kangjh",
    image: "",
    createdAt: "2023-03-20T16:00:00Z",
    updatedAt: "2023-03-20T16:00:00Z"
  },
  {
    id: "a0b1c2d3-e4f5-6a7b-8c9d-n0f1a2b3c4d5",
    email: "han@example.com",
    firstName: "한",
    lastName: "수빈",
    address: "전라북도 전주시 덕진구 전북대로 22",
    nickname: "hansb",
    image: "",
    createdAt: "2023-02-10T09:00:00Z",
    updatedAt: "2023-02-10T09:00:00Z"
  }
];

export const PRODUCTS = [
  {
    id: "p1a2b3c4-d5e6-f7a8-9b0c-1d2e3f4g5h6i",
    name: "무선 헤드폰",
    description: "고품질 무선 헤드폰, 노이즈 캔슬링 기능 포함.",
    price: 150000,
    stock: 25,
    tags: ["전자제품", "오디오", "무선"],
    images: [
      "/images/products/headphones1.jpg",
      "/images/products/headphones2.jpg"
    ],
    favoriteCount: 10,
    createdAt: "2024-01-10T12:00:00+09:00",
    updatedAt: "2024-01-10T12:00:00+09:00",
    userId: "a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6"
  },
  {
    id: "p2b3c4d5-e6f7-a8b9-c0d1-e2f3g4h5i6j7",
    name: "게이밍 키보드",
    description: "RGB 조명과 빠른 반응 속도를 자랑하는 기계식 키보드.",
    price: 120000,
    stock: 50,
    tags: ["전자제품", "게임", "키보드"],
    images: [
      "/images/products/keyboard1.jpg",
      "/images/products/keyboard2.jpg"
    ],
    favoriteCount: 20,
    createdAt: "2024-01-15T15:30:00+09:00",
    updatedAt: "2024-01-15T15:30:00+09:00",
    userId: "a2b3c4d5-e6f7-8a9b-0c1d-f2e3a4b5c6d7"
  },
  {
    id: "p3c4d5e6-f7a8-b9c0-d1e2-f3g4h5i6j7k8",
    name: "스마트 워치",
    description: "운동, 심박수, 수면 모니터링 기능을 갖춘 스마트 워치.",
    price: 250000,
    stock: 30,
    tags: ["전자제품", "웨어러블", "건강"],
    images: [
      "/images/products/smartwatch1.jpg",
      "/images/products/smartwatch2.jpg"
    ],
    favoriteCount: 15,
    createdAt: "2024-01-20T10:00:00+09:00",
    updatedAt: "2024-01-20T10:00:00+09:00",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p4d5e6f7-a8b9-c0d1-e2f3-g4h5i6j7k8l9",
    name: "블루투스 스피커",
    description: "고출력, 휴대용 블루투스 스피커. 방수 기능 포함.",
    price: 99000,
    stock: 40,
    tags: ["전자제품", "오디오", "무선"],
    images: ["/images/products/speaker1.jpg", "/images/products/speaker2.jpg"],
    favoriteCount: 30,
    createdAt: "2024-01-25T14:00:00+09:00",
    updatedAt: "2024-01-25T14:00:00+09:00",
    userId: "a4b5c6d7-e8f9-0a1b-2c3d-h4f5a6b7c8d9"
  },
  {
    id: "p5e6f7a8-b9c0-d1e2-f3g4-h5i6j7k8l9m0",
    name: "노트북 스탠드",
    description: "인체공학적 디자인의 휴대용 노트북 스탠드.",
    price: 45000,
    stock: 100,
    tags: ["전자제품", "액세서리", "노트북"],
    images: [
      "/images/products/laptopstand1.jpg",
      "/images/products/laptopstand2.jpg"
    ],
    favoriteCount: 8,
    createdAt: "2024-02-01T09:30:00+09:00",
    updatedAt: "2024-02-01T09:30:00+09:00",
    userId: "a5b6c7d8-e9f0-1a2b-3c4d-i5f6a7b8c9d0"
  },
  {
    id: "p6f7a8b9-c0d1-e2f3-g4h5-i6j7k8l9m0n1",
    name: "무선 충전기",
    description: "고속 충전을 지원하는 무선 충전기.",
    price: 35000,
    stock: 80,
    tags: ["전자제품", "액세서리", "충전기"],
    images: ["/images/products/charger1.jpg", "/images/products/charger2.jpg"],
    favoriteCount: 18,
    createdAt: "2024-02-05T11:00:00+09:00",
    updatedAt: "2024-02-05T11:00:00+09:00",
    userId: "a6b7c8d9-e0f1-2a3b-4c5d-j6f7a8b9c0d1"
  },
  {
    id: "p7a8b9c0-d1e2-f3g4-h5i6-j7k8l9m0n1o2",
    name: "휴대용 보조 배터리",
    description: "20000mAh 대용량 휴대용 보조 배터리.",
    price: 60000,
    stock: 70,
    tags: ["전자제품", "액세서리", "배터리"],
    images: [
      "/images/products/powerbank1.jpg",
      "/images/products/powerbank2.jpg"
    ],
    favoriteCount: 25,
    createdAt: "2024-02-10T13:00:00+09:00",
    updatedAt: "2024-02-10T13:00:00+09:00",
    userId: "a7b8c9d0-e1f2-3a4b-5c6d-k7f8a9b0c1d2"
  },
  {
    id: "p8b9c0d1-e2f3-g4h5-i6j7-k8l9m0n1o2p3",
    name: "USB-C 허브",
    description: "다양한 장치를 연결할 수 있는 멀티포트 USB-C 허브.",
    price: 55000,
    stock: 60,
    tags: ["전자제품", "액세서리", "USB"],
    images: ["/images/products/usbchub1.jpg", "/images/products/usbchub2.jpg"],
    favoriteCount: 12,
    createdAt: "2024-02-15T08:00:00+09:00",
    updatedAt: "2024-02-15T08:00:00+09:00",
    userId: "a8b9c0d1-e2f3-4a5b-6c7d-l8f9a0b1c2d3"
  },
  {
    id: "p9c0d1e2-f3g4-h5i6-j7k8-l9m0n1o2p3q4",
    name: "외장 SSD",
    description: "초고속 전송 속도의 1TB 외장 SSD.",
    price: 180000,
    stock: 45,
    tags: ["전자제품", "저장장치", "SSD"],
    images: ["/images/products/ssd1.jpg", "/images/products/ssd2.jpg"],
    favoriteCount: 22,
    createdAt: "2024-02-20T16:30:00+09:00",
    updatedAt: "2024-02-20T16:30:00+09:00",
    userId: "a9b0c1d2-e3f4-5a6b-7c8d-m9f0a1b2c3d4"
  },
  {
    id: "p0d1e2f3-g4h5-i6j7-k8l9-m0n1o2p3q4r5",
    name: "미니 프로젝터",
    description: "휴대용 미니 프로젝터, Full HD 해상도 지원.",
    price: 220000,
    stock: 20,
    tags: ["전자제품", "프로젝터", "가전"],
    images: [
      "/images/products/projector1.jpg",
      "/images/products/projector2.jpg"
    ],
    favoriteCount: 40,
    createdAt: "2024-02-25T14:00:00+09:00",
    updatedAt: "2024-02-25T14:00:00+09:00",
    userId: "a0b1c2d3-e4f5-6a7b-8c9d-n0f1a2b3c4d5"
  },
  {
    id: "p1a2b3c4-d5e6-f7a8-9b0c-1d2e3f4g5h6",
    name: "무선 헤드폰",
    description:
      "고품질의 무선 헤드폰으로 노이즈 캔슬링 기능이 탑재되어 있습니다.",
    price: 150000,
    stock: 25,
    tags: ["전자제품", "오디오", "무선"],
    images: [
      "/images/products/headphones1.jpg",
      "/images/products/headphones2.jpg"
    ],
    favoriteCount: 10,
    createdAt: "2024-01-10T12:00:00Z",
    updatedAt: "2024-01-10T12:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p2a3b4c5-d6e7-f8a9-0b1c-2d3e4f5g6h7",
    name: "스마트폰",
    description: "최신 기능이 탑재된 프리미엄 스마트폰입니다.",
    price: 1000000,
    stock: 50,
    tags: ["전자제품", "스마트폰"],
    images: [
      "/images/products/smartphone1.jpg",
      "/images/products/smartphone2.jpg"
    ],
    favoriteCount: 30,
    createdAt: "2024-01-15T08:30:00Z",
    updatedAt: "2024-01-15T08:30:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p3a4b5c6-d7e8-f9a0-1b2c-3d4e5f6g7h8",
    name: "스마트워치",
    description: "건강 관리 및 알림 기능이 있는 스마트워치입니다.",
    price: 300000,
    stock: 15,
    tags: ["전자제품", "웨어러블"],
    images: [
      "/images/products/smartwatch1.jpg",
      "/images/products/smartwatch2.jpg"
    ],
    favoriteCount: 20,
    createdAt: "2024-01-20T09:00:00Z",
    updatedAt: "2024-01-20T09:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p4a5b6c7-d8e9-f0a1-2b3c-4d5e6f7g8h9",
    name: "게이밍 노트북",
    description: "최신 게임을 원활하게 실행할 수 있는 게이밍 노트북입니다.",
    price: 2500000,
    stock: 10,
    tags: ["전자제품", "노트북", "게이밍"],
    images: [
      "/images/products/gaminglaptop1.jpg",
      "/images/products/gaminglaptop2.jpg"
    ],
    favoriteCount: 5,
    createdAt: "2024-01-25T10:00:00Z",
    updatedAt: "2024-01-25T10:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p5a6b7c8-d9e0-f1a2-3b4c-5d6e7f8g9h0",
    name: "커피 머신",
    description: "집에서 쉽게 커피를 만들 수 있는 커피 머신입니다.",
    price: 80000,
    stock: 40,
    tags: ["가전제품", "주방용품"],
    images: [
      "/images/products/coffeemachine1.jpg",
      "/images/products/coffeemachine2.jpg"
    ],
    favoriteCount: 12,
    createdAt: "2024-02-01T14:00:00Z",
    updatedAt: "2024-02-01T14:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p6a7b8c9-d0e1-f2a3-4b5c-6d7e8f9g0h1",
    name: "블루투스 스피커",
    description: "고음질 사운드를 제공하는 블루투스 스피커입니다.",
    price: 120000,
    stock: 30,
    tags: ["전자제품", "오디오"],
    images: [
      "/images/products/bluetoothspeaker1.jpg",
      "/images/products/bluetoothspeaker2.jpg"
    ],
    favoriteCount: 25,
    createdAt: "2024-02-05T11:00:00Z",
    updatedAt: "2024-02-05T11:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p7a8b9c0-d1e2-f3a4-5b6c-7d8e9f0g1h2",
    name: "전기밥솥",
    description: "맛있는 밥을 쉽게 지을 수 있는 전기밥솥입니다.",
    price: 70000,
    stock: 20,
    tags: ["가전제품", "주방용품"],
    images: [
      "/images/products/ricecooker1.jpg",
      "/images/products/ricecooker2.jpg"
    ],
    favoriteCount: 18,
    createdAt: "2024-02-10T15:30:00Z",
    updatedAt: "2024-02-10T15:30:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p8a9b0c1-d2e3-f4a5-6b7c-8d9e0f1g2h3",
    name: "게임 콘솔",
    description: "최신 게임을 지원하는 게임 콘솔입니다.",
    price: 400000,
    stock: 15,
    tags: ["전자제품", "게임"],
    images: [
      "/images/products/gamingconsole1.jpg",
      "/images/products/gamingconsole2.jpg"
    ],
    favoriteCount: 8,
    createdAt: "2024-02-15T16:00:00Z",
    updatedAt: "2024-02-15T16:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p9a0b1c2-d3e4-f5a6-7b8c-9d0e1f2g3h4",
    name: "블렌더",
    description: "다양한 재료를 쉽게 갈아주는 블렌더입니다.",
    price: 50000,
    stock: 35,
    tags: ["가전제품", "주방용품"],
    images: ["/images/products/blender1.jpg", "/images/products/blender2.jpg"],
    favoriteCount: 14,
    createdAt: "2024-02-20T13:45:00Z",
    updatedAt: "2024-02-20T13:45:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p0a1b2c3-d4e5-f6a7-8b9c-0d1e2f3g4h5",
    name: "전기주전자",
    description: "빠르고 안전하게 물을 끓일 수 있는 전기주전자입니다.",
    price: 30000,
    stock: 45,
    tags: ["가전제품", "주방용품"],
    images: [
      "/images/products/electrickettle1.jpg",
      "/images/products/electrickettle2.jpg"
    ],
    favoriteCount: 20,
    createdAt: "2024-02-25T12:00:00Z",
    updatedAt: "2024-02-25T12:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p1a2b3c4-d5e6-f7a8-9b0c-1d2e3f4g5h6",
    name: "태블릿 PC",
    description:
      "휴대성이 뛰어난 태블릿 PC로 다양한 용도로 사용할 수 있습니다.",
    price: 600000,
    stock: 25,
    tags: ["전자제품", "태블릿"],
    images: ["/images/products/tablet1.jpg", "/images/products/tablet2.jpg"],
    favoriteCount: 22,
    createdAt: "2024-03-01T11:00:00Z",
    updatedAt: "2024-03-01T11:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p2a3b4c5-d6e7-f8a9-0b1c-2d3e4f5g6h7",
    name: "모니터",
    description: "고해상도를 지원하는 컴퓨터 모니터입니다.",
    price: 300000,
    stock: 30,
    tags: ["전자제품", "모니터"],
    images: ["/images/products/monitor1.jpg", "/images/products/monitor2.jpg"],
    favoriteCount: 16,
    createdAt: "2024-03-05T10:30:00Z",
    updatedAt: "2024-03-05T10:30:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p3a4b5c6-d7e8-f9a0-1b2c-3d4e5f6g7h8",
    name: "프린터",
    description: "문서 및 사진 인쇄가 가능한 컬러 프린터입니다.",
    price: 200000,
    stock: 12,
    tags: ["전자제품", "프린터"],
    images: ["/images/products/printer1.jpg", "/images/products/printer2.jpg"],
    favoriteCount: 10,
    createdAt: "2024-03-10T15:00:00Z",
    updatedAt: "2024-03-10T15:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p4a5b6c7-d8e9-f0a1-2b3c-4d5e6f7g8h9",
    name: "외장 하드 드라이브",
    description: "대용량 데이터를 저장할 수 있는 외장 하드 드라이브입니다.",
    price: 80000,
    stock: 25,
    tags: ["전자제품", "저장장치"],
    images: [
      "/images/products/externalharddrive1.jpg",
      "/images/products/externalharddrive2.jpg"
    ],
    favoriteCount: 15,
    createdAt: "2024-03-15T16:00:00Z",
    updatedAt: "2024-03-15T16:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p5a6b7c8-d9e0-f1a2-3b4c-5d6e7f8g9h0",
    name: "마사지기",
    description: "편안한 휴식을 제공하는 전기 마사지기입니다.",
    price: 150000,
    stock: 20,
    tags: ["가전제품", "건강"],
    images: [
      "/images/products/massager1.jpg",
      "/images/products/massager2.jpg"
    ],
    favoriteCount: 18,
    createdAt: "2024-03-20T09:00:00Z",
    updatedAt: "2024-03-20T09:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p6a7b8c9-d0e1-f2a3-4b5c-6d7e8f9g0h1",
    name: "항균 청소기",
    description: "위생적인 청소를 도와주는 항균 청소기입니다.",
    price: 200000,
    stock: 10,
    tags: ["가전제품", "청소"],
    images: [
      "/images/products/vacuumcleaner1.jpg",
      "/images/products/vacuumcleaner2.jpg"
    ],
    favoriteCount: 7,
    createdAt: "2024-03-25T14:30:00Z",
    updatedAt: "2024-03-25T14:30:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "p7a8b9c0-d1e2-f3a4-5b6c-7d8e9f0g1h2",
    name: "포터블 프로젝터",
    description: "어디서나 사용할 수 있는 포터블 프로젝터입니다.",
    price: 450000,
    stock: 5,
    tags: ["전자제품", "프로젝터"],
    images: [
      "/images/products/projector1.jpg",
      "/images/products/projector2.jpg"
    ],
    favoriteCount: 9,
    createdAt: "2024-04-01T11:00:00Z",
    updatedAt: "2024-04-01T11:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  }
];

export const ARTICLES = [
  {
    id: "b1c2d3e4-f5g6-7h8i-9j0k-l1m2n3o4p5q6",
    title: "여행 가이드",
    content: "가장 인기 있는 여행지와 팁을 소개합니다.",
    createdAt: "2023-10-05T08:00:00Z",
    updatedAt: "2023-10-05T08:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8"
  },
  {
    id: "c2d3e4f5-g6h7-8i9j-0k1l-m2n3o4p5q6r7",
    title: "인공지능과 미래",
    content: "인공지능의 발전과 미래 전망에 대해 논의합니다.",
    createdAt: "2023-09-15T10:00:00Z",
    updatedAt: "2023-09-15T10:00:00Z",
    userId: "a4b5c6d7-e8f9-0a1b-c2d3-e4f5g6h7i8j9"
  },
  {
    id: "d3e4f5g6-h7i8-9j0k-1l2m-n3o4p5q6r7s8",
    title: "요리 레시피",
    content: "간단하고 건강한 요리를 만들 수 있는 레시피를 소개합니다.",
    createdAt: "2023-08-12T12:00:00Z",
    updatedAt: "2023-08-12T12:00:00Z",
    userId: "a5b6c7d8-e9f0-1a2b-c3d4-e5f6g7h8i9j0"
  },
  {
    id: "e4f5g6h7-i8j9-0k1l-2m3n-o4p5q6r7s8t9",
    title: "패션 트렌드",
    content: "올해 가장 주목받는 패션 트렌드와 스타일링 팁을 소개합니다.",
    createdAt: "2023-07-30T14:00:00Z",
    updatedAt: "2023-07-30T14:00:00Z",
    userId: "a6b7c8d9-f0g1-2a3b-c4d5-e6f7g8h9i0j1"
  },
  {
    id: "f5g6h7i8-j9k0-1l2m-3n4o-p5q6r7s8t9u0",
    title: "영화 리뷰",
    content: "최신 영화 리뷰와 평점, 추천작을 소개합니다.",
    createdAt: "2023-06-22T16:00:00Z",
    updatedAt: "2023-06-22T16:00:00Z",
    userId: "a7b8c9d0-g1h2-3a4b-c5d6-e7f8g9h0i1j2"
  },
  {
    id: "g6h7i8j9-k0l1-2m3n-4o5p-q6r7s8t9u0v1",
    title: "음악 추천",
    content: "최신 음악 트렌드와 추천곡 리스트를 소개합니다.",
    createdAt: "2023-05-18T18:00:00Z",
    updatedAt: "2023-05-18T18:00:00Z",
    userId: "a8b9c0d1-h2i3-4a5b-c6d7-e8f9g0h1i2j3"
  },
  {
    id: "h7i8j9k0-l1m2-3n4o-5p6q-r7s8t9u0v1w2",
    title: "기술 혁신",
    content: "기술 혁신이 사회에 미치는 영향에 대해 분석합니다.",
    createdAt: "2023-04-10T20:00:00Z",
    updatedAt: "2023-04-10T20:00:00Z",
    userId: "a9b0c1d2-i3j4-5a6b-c7d8-e9f0g1h2i3j4"
  },
  {
    id: "i8j9k0l1-m2n3-4o5p-6q7r-s8t9u0v1w2x3",
    title: "스포츠 뉴스",
    content: "국내외 스포츠 뉴스와 경기 결과를 신속하게 전달합니다.",
    createdAt: "2023-03-15T22:00:00Z",
    updatedAt: "2023-03-15T22:00:00Z",
    userId: "a1b2c3d4-j5k6-7a8b-c9d0-e1f2g3h4i5j6"
  },
  {
    id: "j9k0l1m2-n3o4-5p6q-7r8s-t9u0v1w2x3y4",
    title: "경제 동향",
    content: "최신 경제 동향과 시장 분석 정보를 제공합니다.",
    createdAt: "2023-02-25T08:00:00Z",
    updatedAt: "2023-02-25T08:00:00Z",
    userId: "a2b3c4d5-k6l7-8a9b-c0d1-e2f3g4h5i6j7"
  },
  {
    id: "k0l1m2n3-o4p5-6q7r-8s9t-u0v1w2x3y4z5",
    title: "환경 보호",
    content: "환경 보호의 중요성과 실천할 수 있는 방법들을 공유합니다.",
    createdAt: "2023-01-12T12:00:00Z",
    updatedAt: "2023-01-12T12:00:00Z",
    userId: "a3b4c5d6-l7m8-9a0b-c1d2-e3f4g5h6i7j8"
  }
];
export const ARTICLE_COMMENTS = [
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6",
    content: "좋은 글입니다! 많은 도움이 되었어요.",
    createdAt: "2023-10-05T09:00:00Z",
    updatedAt: "2023-10-05T09:00:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8",
    articleId: "b1c2d3e4-f5g6-7h8i-9j0k-l1m2n3o4p5q6"
  },
  {
    id: "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
    content: "흥미로운 주제네요. 더 알고 싶어요!",
    createdAt: "2023-09-15T11:00:00Z",
    updatedAt: "2023-09-15T11:00:00Z",
    userId: "a4b5c6d7-e8f9-0a1b-c2d3-e4f5g6h7i8j9",
    articleId: "c2d3e4f5-g6h7-8i9j-0k1l-m2n3o4p5q6r7"
  },
  {
    id: "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
    content: "잘 읽었습니다. 유익한 정보 감사합니다.",
    createdAt: "2023-08-12T13:00:00Z",
    updatedAt: "2023-08-12T13:00:00Z",
    userId: "a5b6c7d8-e9f0-1a2b-c3d4-e5f6g7h8i9j0",
    articleId: "d3e4f5g6-h7i8-9j0k-1l2m-n3o4p5q6r7s8"
  },
  {
    id: "d4e5f6g7-h8i9-0j1k-2l3m-n4o5p6q7r8s9",
    content: "요리 레시피 정말 간단해요! 감사합니다.",
    createdAt: "2023-07-30T15:00:00Z",
    updatedAt: "2023-07-30T15:00:00Z",
    userId: "a6b7c8d9-f0g1-2a3b-c4d5-e6f7g8h9i0j1",
    articleId: "e4f5g6h7-i8j9-0k1l-2m3n-o4p5q6r7s8t9"
  },
  {
    id: "e5f6g7h8-i9j0-1k2l-3m4n-o5p6q7r8s9t0",
    content: "패션 트렌드에 대해 알게 되어 기쁩니다.",
    createdAt: "2023-06-22T17:00:00Z",
    updatedAt: "2023-06-22T17:00:00Z",
    userId: "a7b8c9d0-g1h2-3a4b-c5d6-e7f8g9h0i1j2",
    articleId: "f5g6h7i8-j9k0-1l2m-3n4o-p5q6r7s8t9u0"
  },
  {
    id: "f6g7h8i9-j0k1-2l3m-4n5o-p6q7r8s9t0u1",
    content: "음악 추천 정말 좋아요. 감사합니다!",
    createdAt: "2023-05-18T19:00:00Z",
    updatedAt: "2023-05-18T19:00:00Z",
    userId: "a8b9c0d1-h2i3-4a5b-c6d7-e8f9g0h1i2j3",
    articleId: "g6h7i8j9-k0l1-2m3n-4o5p-q6r7s8t9u0v1"
  },
  {
    id: "g7h8i9j0-k1l2-3m4n-5o6p-q7r8s9t0u1v2",
    content: "기술 혁신 주제에 대한 글 잘 읽었습니다.",
    createdAt: "2023-04-10T21:00:00Z",
    updatedAt: "2023-04-10T21:00:00Z",
    userId: "a9b0c1d2-i3j4-5a6b-c7d8-e9f0g1h2i3j4",
    articleId: "h7i8j9k0-l1m2-3n4o-5p6q-r7s8t9u0v1w2"
  },
  {
    id: "h8i9j0k1-l2m3-4n5o-6p7q-r8s9t0u1v2w3",
    content: "스포츠 뉴스를 빠르게 전달해 주셔서 감사합니다.",
    createdAt: "2023-03-15T23:00:00Z",
    updatedAt: "2023-03-15T23:00:00Z",
    userId: "a1b2c3d4-j5k6-7a8b-c9d0-e1f2g3h4i5j6",
    articleId: "i8j9k0l1-m2n3-4o5p-6q7r-s8t9u0v1w2x3"
  },
  {
    id: "i9j0k1l2-m3n4-5o6p-7q8r-s9t0u1v2w3x4",
    content: "경제 동향 분석 정말 유익했습니다.",
    createdAt: "2023-02-25T09:00:00Z",
    updatedAt: "2023-02-25T09:00:00Z",
    userId: "a2b3c4d5-k6l7-8a9b-c0d1-e2f3g4h5i6j7",
    articleId: "j9k0l1m2-n3o4-5p6q-7r8s-t9u0v1w2x3y4"
  },
  {
    id: "j0k1l2m3-n4o5-6p7q-8r9s-t0u1v2w3x4y5",
    content: "환경 보호에 대한 글에서 많은 걸 배웠습니다.",
    createdAt: "2023-01-12T13:00:00Z",
    updatedAt: "2023-01-12T13:00:00Z",
    userId: "a3b4c5d6-l7m8-9a0b-c1d2-e3f4g5h6i7j8",
    articleId: "k0l1m2n3-o4p5-6q7r-8s9t-u0v1w2x3y4z5"
  }
];

export const PRODUCT_COMMENTS = [
  {
    id: "c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6",
    content: "정말 마음에 들어요! 품질이 최고입니다.",
    createdAt: "2023-10-01T10:30:00Z",
    updatedAt: "2023-10-01T10:30:00Z",
    userId: "a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6",
    productId: "d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6"
  },
  {
    id: "c2d3e4f5-g6h7-i8j9-k0l1-m2n3o4p5q6r7",
    content: "배송이 빠르고, 사용하기 편리합니다.",
    createdAt: "2023-10-02T11:00:00Z",
    updatedAt: "2023-10-02T11:00:00Z",
    userId: "a2b3c4d5-e6f7-8a9b-0c1d-f2e3a4b5c6d7",
    productId: "d2e3f4g5-h6i7-j8k9-l0m1-n2o3p4q5r6s7"
  },
  {
    id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
    content: "가격이 조금 비싼 편이지만, 품질이 좋습니다.",
    createdAt: "2023-10-03T12:15:00Z",
    updatedAt: "2023-10-03T12:15:00Z",
    userId: "a3b4c5d6-e7f8-9a0b-1c2d-g3f4a5b6c7d8",
    productId: "d3e4f5g6-h7i8-j9k0-l1m2-n3o4p5q6r7s8"
  },
  {
    id: "c4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
    content: "이 제품은 추천합니다. 매우 만족스럽습니다.",
    createdAt: "2023-10-04T13:30:00Z",
    updatedAt: "2023-10-04T13:30:00Z",
    userId: "a4b5c6d7-e8f9-0a1b-2c3d-h4i5j6k7l8m9",
    productId: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9"
  },
  {
    id: "c5d6e7f8-g9h0-i1j2-k3l4-m5n6o7p8q9r0",
    content: "사용해보니 기대 이상이에요!",
    createdAt: "2023-10-05T14:45:00Z",
    updatedAt: "2023-10-05T14:45:00Z",
    userId: "a5b6c7d8-e9f0-1a2b-3c4d-j5k6l7m8n9o0",
    productId: "d5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0"
  },
  {
    id: "c6d7e8f9-g0h1-i2j3-k4l5-m6n7o8p9q0r1",
    content: "친구에게도 추천했어요. 모두가 좋아하더군요!",
    createdAt: "2023-10-06T15:00:00Z",
    updatedAt: "2023-10-06T15:00:00Z",
    userId: "a6b7c8d9-e0f1-2a3b-4c5d-k6l7m8n9o0p1",
    productId: "d6e7f8g9-h0i1-j2k3-l4m5-n6o7p8q9r0s1"
  },
  {
    id: "c7d8e9f0-g1h2-i3j4-k5l6-m7n8o9p0q1r2",
    content: "만족스러운 구매였습니다. 재구매 의사 있습니다.",
    createdAt: "2023-10-07T16:15:00Z",
    updatedAt: "2023-10-07T16:15:00Z",
    userId: "a7b8c9d0-e1f2-3a4b-5c6d-l7m8n9o0p1q2",
    productId: "d7e8f9g0-h1i2-j3k4-l5m6-n7o8p9q0r1s2"
  },
  {
    id: "c8d9e0f1-g2h3-i4j5-k6l7-m8n9o0p1q2r3",
    content: "문제가 있어 고객센터에 문의했는데 빠르게 해결해주셨어요.",
    createdAt: "2023-10-08T17:30:00Z",
    updatedAt: "2023-10-08T17:30:00Z",
    userId: "a8b9c0d1-e2f3-4a5b-6c7d-m8n9o0p1q2r3",
    productId: "d8e9f0g1-h2i3-j4k5-l6m7-n8o9p0q1r2s3"
  },
  {
    id: "c9d0e1f2-g3h4-i5j6-k7l8-m9n0o1p2q3r4",
    content: "디자인이 예쁘고 실용적입니다.",
    createdAt: "2023-10-09T18:45:00Z",
    updatedAt: "2023-10-09T18:45:00Z",
    userId: "a9b0c1d2-e3f4-5a6b-7c8d-n9o0p1q2r3s4",
    productId: "d9e0f1g2-h3i4-j5k6-l7m8-n9o0p1q2r3s4"
  },
  {
    id: "c0d1e2f3-g4h5-i6j7-k8l9-m0n1o2p3q4r5",
    content: "다른 제품보다 월등히 좋습니다!",
    createdAt: "2023-10-10T19:00:00Z",
    updatedAt: "2023-10-10T19:00:00Z",
    userId: "a0b1c2d3-e4f5-6a7b-8c9d-o0p1q2r3s4t5",
    productId: "d0e1f2g3-h4i5-j6k7-l8m9-n0o1p2q3r4s5"
  }
];

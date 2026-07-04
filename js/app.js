// ========== 二手车数据 ==========
// 注意：如果浏览器 localStorage 有 'car_inventory' 数据，网页会优先使用 localStorage 的数据
var CAR_DATA = [
  {
    "id": 1,
    "brand": "丰田",
    "model": "卡罗拉 1.8L CVT",
    "year": 2021,
    "price": 88000,
    "mileage": 3.2,
    "transmission": "自动",
    "fuel": "汽油",
    "displacement": "1.8L",
    "color": "白色",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1749058983469-11eaef8d7bc5?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "一手家用车，按时保养，无事故无水泡，车况极佳。内饰干净整洁，空调制冷效果好，适合家庭代步使用。"
  },
  {
    "id": 2,
    "brand": "本田",
    "model": "思域 1.5T CVT",
    "year": 2020,
    "price": 95000,
    "mileage": 4.5,
    "transmission": "自动",
    "fuel": "汽油",
    "displacement": "1.5T",
    "color": "蓝色",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1570303278489-041bd897a873?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "运动版思域，动力强劲，外观时尚。全车原版原漆，4S店定期保养，手续齐全，随时过户。"
  },
  {
    "id": 3,
    "brand": "大众",
    "model": "朗逸 280TSI DSG",
    "year": 2022,
    "price": 105000,
    "mileage": 2.1,
    "transmission": "自动",
    "fuel": "汽油",
    "displacement": "1.4T",
    "color": "黑色",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1619021897566-a5f30301fdb8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "准新车况，仅行驶2万公里。空间宽敞，油耗低，家用商务两相宜。配置丰富，带天窗、真皮座椅、倒车影像。"
  },
  {
    "id": 4,
    "brand": "宝马",
    "model": "320Li M运动套装",
    "year": 2019,
    "price": 168000,
    "mileage": 6.8,
    "transmission": "自动",
    "fuel": "汽油",
    "displacement": "2.0T",
    "color": "矿石白",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "宝马3系长轴版，操控与舒适兼顾。M运动套件外观动感，哈曼卡顿音响，抬头显示，配置到顶。全程4S店保养记录可查。"
  },
  {
    "id": 5,
    "brand": "比亚迪",
    "model": "秦PLUS DM-i 120km",
    "year": 2023,
    "price": 115000,
    "mileage": 1.2,
    "transmission": "自动",
    "fuel": "插电混动",
    "displacement": "1.5L",
    "color": "灰色",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1659430836138-b76c5b6a63bb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1669625304222-b11036fffbb8?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "新能源混动标杆，超低油耗，纯电通勤零油耗。2023年上牌，几乎全新，享受原厂质保。送充电桩。"
  },
  {
    "id": 6,
    "brand": "日产",
    "model": "轩逸 1.6L CVT",
    "year": 2020,
    "price": 72000,
    "mileage": 5.0,
    "transmission": "自动",
    "fuel": "汽油",
    "displacement": "1.6L",
    "color": "银色",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1575501707067-0e4c7db2a950?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1770321297121-c942831285b4?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "日产大沙发，座椅舒适度同级最佳。省油耐用，维修保养便宜。适合家用通勤，经济实惠之选。"
  },
  {
    "id": 7,
    "brand": "奔驰",
    "model": "C200 L 运动版",
    "year": 2020,
    "price": 198000,
    "mileage": 4.0,
    "transmission": "自动",
    "fuel": "汽油",
    "displacement": "1.5T",
    "color": "曜岩黑",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592309905620-e5b59f6dcb98?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "奔驰C级长轴版，内饰豪华，行驶质感一流。柏林之声音响，氛围灯，全景天窗。女士一手车，车况精品。"
  },
  {
    "id": 8,
    "brand": "五菱",
    "model": "宏光MINI EV 马卡龙",
    "year": 2023,
    "price": 36800,
    "mileage": 0.8,
    "transmission": "自动",
    "fuel": "纯电动",
    "displacement": "电动",
    "color": "牛油果绿",
    "location": "衢州",
    "images": [
      "https://images.unsplash.com/photo-1712621115285-ab3a4bdd8013?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501139437843-8cdee2c69805?w=800&h=600&fit=crop"
    ],
    "contact": "15967800642",
    "description": "网红代步神车，停车方便，用车成本极低。马卡龙配色时尚可爱，适合城市短途通勤、买菜接娃。续航120km。"
  }
];

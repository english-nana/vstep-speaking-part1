const fs = require('fs');
const path = require('path');
const groupPath = path.resolve(__dirname, '..', '..', 'data', 'group3.js');
let content = fs.readFileSync(groupPath, 'utf8');

const idx = content.indexOf('subtopics: [');
if (idx !== -1) {
    const newSubtopics = `subtopics: [
        {
          id: "sub3_1",
          title: "Travelling",
          subVocab: [],
          questions: [
            {
              q: { en: "Do you prefer traveling with friends or traveling alone?", vi: "Bạn thích đi du lịch với bạn bè hay đi một mình hơn?" },
              b1: [
                { en: "I prefer travelling with friends because it’s more fun and enjoyable.", vi: "Tôi thích đi du lịch với bạn bè hơn vì nó vui và thú vị hơn." },
                { en: "You know, we can talk together, do everything together, and create a lot of precious memories.", vi: "Bạn biết đấy, chúng tôi có thể nói chuyện cùng nhau, làm mọi việc cùng nhau và tạo ra nhiều kỷ niệm quý giá." }
              ],
              b2: [
                { en: "Personally speaking, I prefer travelling with my friends because it makes the whole experience more fun and enjoyable.", vi: "Cá nhân tôi mà nói, tôi thích đi du lịch với bạn bè hơn vì nó làm cho toàn bộ trải nghiệm vui vẻ và thú vị hơn." },
                { en: "I mean, when travelling with friends, I always have someone to talk to and share exciting moments with.", vi: "Ý tôi là, khi đi du lịch với bạn bè, tôi luôn có người để trò chuyện và chia sẻ những khoảnh khắc thú vị." },
                { en: "For example, we can explore new places, try local food, and take a lot of beautiful photos together.", vi: "Ví dụ, chúng tôi có thể khám phá những địa điểm mới, thử thức ăn địa phương và chụp nhiều bức ảnh đẹp cùng nhau." }
              ]
            },
            {
              q: { en: "What do you usually prepare before going on a trip?", vi: "Bạn thường chuẩn bị gì trước khi đi du lịch?" },
              b1: [
                { en: "Before going on a trip, I often prepare some clothes, things like T-shirts, pants, or jackets because I want to take beautiful photos.", vi: "Trước khi đi du lịch, tôi thường chuẩn bị một số quần áo, những thứ như áo thun, quần dài, hoặc áo khoác vì tôi muốn chụp những bức ảnh đẹp." },
                { en: "Besides, I also bring some necessary items like a power bank or sunscreen.", vi: "Bên cạnh đó, tôi cũng mang theo một số vật dụng cần thiết như sạc dự phòng hoặc kem chống nắng." }
              ],
              b2: [
                { en: "Let me see, before going on a trip, I always pack different kinds of clothes, such as T-shirts, jeans, or jackets because I enjoy taking photos during my trips.", vi: "Để tôi xem, trước khi đi du lịch, tôi luôn đóng gói nhiều loại quần áo khác nhau, chẳng hạn như áo thun, quần jeans, hoặc áo khoác vì tôi thích chụp ảnh trong suốt các chuyến đi của mình." },
                { en: "Not only that, I also bring some essential items, such as sunscreen, a power bank, and basic medicine, in case I need them.", vi: "Không chỉ vậy, tôi cũng mang theo một số vật dụng thiết yếu, chẳng hạn như kem chống nắng, sạc dự phòng và các loại thuốc cơ bản, phòng khi tôi cần dùng đến chúng." }
              ]
            },
            {
              q: { en: "Which season is the best for traveling in your hometown?", vi: "Mùa nào là tốt nhất để đi du lịch ở quê hương của bạn?" },
              b1: [
                { en: "The best season for travelling in my hometown is the dry season because the sky is clear and beautiful.", vi: "Mùa tốt nhất để đi du lịch ở quê tôi là mùa khô vì bầu trời trong xanh và tuyệt đẹp." },
                { en: "Therefore, tourists can go out and explore the city in a comfortable way.", vi: "Do đó, du khách có thể ra ngoài và khám phá thành phố một cách thoải mái." }
              ],
              b2: [
                { en: "I would say the best time to visit my hometown would be the dry season because the weather is usually pleasant and the sky is clear.", vi: "Tôi muốn nói rằng thời gian tốt nhất để đến thăm quê tôi sẽ là mùa khô vì thời tiết thường dễ chịu và bầu trời quang đãng." },
                { en: "There is less rain, so tourists can explore the city without worrying too much about sudden showers.", vi: "Trời ít mưa hơn, do đó du khách có thể khám phá thành phố mà không cần phải quá lo lắng về những cơn mưa rào bất chợt." },
                { en: "Another reason is that they can take part in outdoor activities in a comfortable way, such as visiting local markets or trying street food.", vi: "Một lý do khác là họ có thể tham gia vào các hoạt động ngoài trời một cách thoải mái, chẳng hạn như thăm các khu chợ địa phương hoặc thử các món ăn đường phố." }
              ]
            }
          ]
        },
        {
          id: "sub3_2",
          title: "Trips",
          subVocab: [],
          questions: [
            {
              q: { en: "Do you like going on trips?", vi: "Bạn có thích đi du lịch không?" },
              b1: [
                { en: "Yes, I do.", vi: "Vâng, tôi thích." },
                { en: "I really like going on trips because it’s a great way to relax and forget about studying for a while.", vi: "Tôi thực sự thích đi du lịch vì đó là một cách tuyệt vời để thư giãn và tạm quên đi việc học tập trong một thời gian." },
                { en: "It can help me reduce stress and feel happy.", vi: "Nó có thể giúp tôi giảm căng thẳng và cảm thấy hạnh phúc." }
              ],
              b2: [
                { en: "Yes, definitely.", vi: "Vâng, chắc chắn rồi." },
                { en: "I really enjoy going on trips because after spending a long time studying or working on assignments, I really feel exhausted.", vi: "Tôi thực sự thích đi du lịch bởi vì sau khi dành một thời gian dài để học tập hoặc làm các bài tập, tôi thực sự cảm thấy kiệt sức." },
                { en: "Therefore, travelling is a great way for me to temporarily forget about study pressure and recharge my batteries.", vi: "Do đó, đi du lịch là một cách tuyệt vời để tôi tạm thời quên đi áp lực học tập và nạp lại năng lượng cho bản thân." }
              ]
            },
            {
              q: { en: "Do you have any plans for your next trip?", vi: "Bạn có kế hoạch gì cho chuyến đi tiếp theo chưa?" },
              b1: [
                { en: "Not really.", vi: "Không hẳn." },
                { en: "I don’t have any plans for my next trip because I will be very busy with my studies at school.", vi: "Tôi không có bất kỳ kế hoạch nào cho chuyến đi tiếp theo vì tôi sẽ rất bận rộn với việc học ở trường." },
                { en: "Next month, I’m going to have many final exams and deadlines.", vi: "Tháng tới, tôi sẽ có nhiều bài thi cuối kỳ và hạn chót." }
              ],
              b2: [
                { en: "Not really.", vi: "Không hẳn." },
                { en: "I don’t have a detailed plan yet because I’m quite busy with my studies at the moment.", vi: "Tôi chưa có một kế hoạch chi tiết vì hiện tại tôi khá bận rộn với việc học của mình." },
                { en: "Next month, I’m going to have several final exams and deadlines, so I need to focus on my schoolwork first.", vi: "Tháng tới, tôi sẽ có một vài bài thi cuối kỳ và các hạn chót, vì vậy tôi cần tập trung vào việc học ở trường trước tiên." },
                { en: "However, once my exams are over, I would love to go on a short trip with my close friends to relax and unwind.", vi: "Tuy nhiên, một khi các kỳ thi của tôi kết thúc, tôi rất muốn đi một chuyến đi ngắn với những người bạn thân của mình để thư giãn và xả hơi." }
              ]
            },
            {
              q: { en: "What kind of trips do you enjoy the most?", vi: "Bạn thích loại chuyến đi nào nhất?" },
              b1: [
                { en: "I like short trips the most because I’m usually very busy with my studies at school.", vi: "Tôi thích những chuyến đi ngắn nhất vì tôi thường rất bận rộn với việc học ở trường." },
                { en: "So, a short trip lasting for 1 or 2 days is more suitable for me.", vi: "Vì vậy, một chuyến đi ngắn kéo dài trong 1 hoặc 2 ngày thì phù hợp hơn với tôi." }
              ],
              b2: [
                { en: "Personally speaking, I enjoy short trips the most.", vi: "Cá nhân tôi mà nói, tôi thích những chuyến đi ngắn nhất." },
                { en: "The main reason is that I’m usually very busy with my work, so it’s really hard for me to take a long break.", vi: "Lý do chính là tôi thường rất bận rộn với công việc của mình, vì vậy rất khó để tôi có thể nghỉ một kỳ nghỉ dài." },
                { en: "That’s why a short trip would be much more realistic for me.", vi: "Đó là lý do tại sao một chuyến đi ngắn sẽ thực tế hơn nhiều đối với tôi." },
                { en: "Even just going somewhere for 1 or 2 days is already enough for me.", vi: "Thậm chí chỉ đi đâu đó trong 1 hoặc 2 ngày cũng đã đủ đối với tôi rồi." }
              ]
            }
          ]
        },
        {
          id: "sub3_3",
          title: "Travel plans",
          subVocab: [],
          questions: [
            {
              q: { en: "Do you have any plans for a trip next month?", vi: "Bạn có kế hoạch cho chuyến đi nào vào tháng tới không?" },
              b1: [
                { en: "No, not really.", vi: "Không, không hẳn." },
                { en: "I don’t have any plans for a trip next month because I’m really busy with my studies at the moment.", vi: "Tôi không có kế hoạch nào cho một chuyến đi vào tháng tới vì hiện tại tôi đang rất bận rộn với việc học của mình." },
                { en: "Actually, I’m going to have a few final exams next month, so I want to focus on my studies first.", vi: "Thật ra, tôi sẽ có một vài bài kiểm tra cuối kỳ vào tháng tới, vì vậy tôi muốn tập trung vào việc học trước đã." }
              ],
              b2: [
                { en: "Not really.", vi: "Không hẳn." },
                { en: "I don’t have a detailed plan yet because I’m quite busy with my studies at the moment.", vi: "Tôi chưa có kế hoạch chi tiết vì hiện tại tôi khá bận rộn với việc học của mình." },
                { en: "Next month, I’m going to have several final exams and deadlines, so I need to focus on my schoolwork first.", vi: "Tháng tới, tôi sẽ có một vài bài thi cuối kỳ và các hạn chót, vì vậy tôi cần tập trung vào việc học ở trường trước tiên." },
                { en: "However, once my exams are over, I would love to go on a short trip with my close friends to relax and unwind.", vi: "Tuy nhiên, một khi các kỳ thi của tôi kết thúc, tôi rất muốn thực hiện một chuyến đi ngắn với những người bạn thân của mình để thư giãn và xả hơi." }
              ]
            },
            {
              q: { en: "Where would you like to go?", vi: "Bạn muốn đi đâu?" },
              b1: [
                { en: "If I have some free time, I would like to go to Dalat because it’s a peaceful and beautiful city.", vi: "Nếu tôi có một ít thời gian rảnh, tôi muốn đi Đà Lạt vì đó là một thành phố thanh bình và xinh đẹp." },
                { en: "I really enjoy the cool weather there, especially because my hometown is usually quite hot.", vi: "Tôi thực sự thích thời tiết mát mẻ ở đó, đặc biệt là vì quê tôi thường khá nóng." }
              ],
              b2: [
                { en: "Let me see, if I have some free time, I would like to visit Da Lat because it’s such a peaceful and beautiful city.", vi: "Để tôi xem, nếu có chút thời gian rảnh, tôi muốn đến thăm Đà Lạt vì nó là một thành phố vô cùng thanh bình và xinh đẹp." },
                { en: "What I like most about Dalat is the cool weather there, especially because my hometown is usually hot.", vi: "Điều tôi thích nhất ở Đà Lạt là thời tiết mát mẻ ở đó, đặc biệt là vì quê tôi thường rất nóng." },
                { en: "I would also love to explore some famous attractions, enjoy the fresh air, and take many nice photos with my friends.", vi: "Tôi cũng rất thích khám phá một số điểm tham quan nổi tiếng, tận hưởng không khí trong lành và chụp thật nhiều bức ảnh đẹp với bạn bè của mình." }
              ]
            },
            {
              q: { en: "What do you usually prepare before going on a trip?", vi: "Bạn thường chuẩn bị gì trước khi đi du lịch?" },
              b1: [
                { en: "Before going on a trip, I often prepare some clothes, things like T-shirts, pants, or jackets because I want to take beautiful photos.", vi: "Trước khi đi du lịch, tôi thường chuẩn bị một số quần áo, những thứ như áo thun, quần dài, hoặc áo khoác vì tôi muốn chụp những bức ảnh đẹp." },
                { en: "Besides, I also bring some necessary items like a power bank or sunscreen.", vi: "Bên cạnh đó, tôi cũng mang theo một số vật dụng cần thiết như sạc dự phòng hoặc kem chống nắng." }
              ],
              b2: [
                { en: "Let me see, before going on a trip, I always pack different kinds of clothes, such as T-shirts, jeans, or jackets because I enjoy taking photos during my trips.", vi: "Để tôi xem, trước khi đi du lịch, tôi luôn đóng gói nhiều loại quần áo khác nhau, chẳng hạn như áo thun, quần jeans, hoặc áo khoác vì tôi thích chụp ảnh trong suốt các chuyến đi của mình." },
                { en: "Not only that, I also bring some essential items, such as sunscreen, a power bank, and basic medicine, in case I need them.", vi: "Không chỉ vậy, tôi cũng mang theo một số vật dụng thiết yếu, chẳng hạn như kem chống nắng, sạc dự phòng và các loại thuốc cơ bản, phòng khi tôi cần dùng đến chúng." }
              ]
            }
          ]
        },
        {
          id: "sub3_4",
          title: "The seasons in your country",
          subVocab: [],
          questions: [
            {
              q: { en: "How many seasons are there in your country?", vi: "Có bao nhiêu mùa ở nước bạn?" },
              b1: [
                { en: "In the city where I live, there are 2 seasons: the dry season and the rainy season.", vi: "Ở thành phố nơi tôi sống, có 2 mùa: mùa khô và mùa mưa." },
                { en: "In the dry season, it’s really hot, so I feel really uncomfortable.", vi: "Vào mùa khô, trời rất nóng, vì vậy tôi cảm thấy thực sự không thoải mái." },
                { en: "However, in the rainy season, it rains almost every day, so it’s a bit hard to go outside.", vi: "Tuy nhiên, vào mùa mưa, trời mưa gần như mỗi ngày, vì vậy có chút khó khăn để đi ra ngoài." }
              ],
              b2: [
                { en: "I would say it depends.", vi: "Tôi muốn nói rằng điều đó còn tùy thuộc." },
                { en: "But in the region where I live, the Mekong Delta, there are mainly two seasons: the dry season and the rainy season.", vi: "Nhưng ở khu vực tôi sống, Đồng bằng sông Cửu Long, có chủ yếu hai mùa: mùa khô và mùa mưa." },
                { en: "During the dry season, the weather is usually very hot, which makes me feel really tired and uncomfortable.", vi: "Trong mùa khô, thời tiết thường rất nóng, điều này khiến tôi cảm thấy thực sự mệt mỏi và không thoải mái." },
                { en: "In contrast, it rains very often during the rainy season, so it’s a bit inconvenient to go outside in this season.", vi: "Ngược lại, trời mưa rất thường xuyên trong mùa mưa, vì vậy có chút bất tiện khi ra ngoài vào mùa này." }
              ]
            },
            {
              q: { en: "What is your favorite season?", vi: "Mùa yêu thích của bạn là gì?" },
              b1: [
                { en: "My favorite season is the dry season because the sky is clear and beautiful.", vi: "Mùa yêu thích của tôi là mùa khô vì bầu trời trong xanh và tuyệt đẹp." },
                { en: "Therefore, I can go out easily and don’t have to worry about getting wet.", vi: "Do đó, tôi có thể ra ngoài dễ dàng và không phải lo lắng về việc bị ướt." }
              ],
              b2: [
                { en: "I would say my favorite season would be the dry season because the weather is more pleasant and the sky is often clear.", vi: "Tôi muốn nói rằng mùa yêu thích của tôi sẽ là mùa khô vì thời tiết dễ chịu hơn và bầu trời thường quang đãng." },
                { en: "Since it doesn’t rain very often, I can go out more easily without worrying about getting wet.", vi: "Vì trời không mưa thường xuyên, tôi có thể ra ngoài dễ dàng hơn mà không phải lo lắng về việc bị ướt." },
                { en: "For example, I can go for a walk or hang out with my friends.", vi: "Ví dụ, tôi có thể đi dạo hoặc đi chơi với bạn bè của mình." }
              ]
            },
            {
              q: { en: "What is the best season to visit your country?", vi: "Mùa nào là tốt nhất để đến thăm đất nước của bạn?" },
              b1: [
                { en: "The best season to visit my country is the dry season because the sky is clear and beautiful.", vi: "Mùa tốt nhất để đến thăm đất nước của tôi là mùa khô vì bầu trời trong xanh và tuyệt đẹp." },
                { en: "Therefore, tourists can go out and explore the city in a comfortable way.", vi: "Do đó, du khách có thể ra ngoài và khám phá thành phố một cách thoải mái." }
              ],
              b2: [
                { en: "I would say the best time to visit my country would be the dry season because the weather is usually pleasant and the sky is clear.", vi: "Tôi muốn nói rằng thời gian tốt nhất để đến thăm đất nước của tôi sẽ là mùa khô vì thời tiết thường dễ chịu và bầu trời quang đãng." },
                { en: "There is less rain, so tourists can explore the city without worrying too much about sudden showers.", vi: "Trời ít mưa hơn, vì vậy du khách có thể khám phá thành phố mà không cần phải quá lo lắng về những cơn mưa rào bất chợt." },
                { en: "Another reason is that they can take part in outdoor activities in a comfortable way, such as visiting local markets or trying street food.", vi: "Một lý do khác là họ có thể tham gia vào các hoạt động ngoài trời một cách thoải mái, chẳng hạn như thăm các khu chợ địa phương hoặc thử thức ăn đường phố." }
              ]
            }
          ]
        }
      ]
    };
`;
    content = content.substring(0, idx) + newSubtopics;
    fs.writeFileSync(groupPath, content);
    console.log("Updated group3.js successfully with actual content.");
} else {
    console.log("Could not find 'subtopics: ['");
}

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
                { en: "You know, we can talk together, do everything together, and create a lot of precious memories.", vi: "Bạn biết đấy, chúng tôi có thể trò chuyện cùng nhau, làm mọi việc cùng nhau và tạo ra nhiều kỷ niệm quý giá." }
              ],
              b2: [
                { en: "Personally speaking, I prefer travelling with my friends because it makes the whole experience more fun and enjoyable.", vi: "Cá nhân tôi mà nói, tôi thích đi du lịch với bạn bè hơn vì nó làm cho toàn bộ trải nghiệm vui vẻ và thú vị hơn." },
                { en: "I mean, when travelling with friends, I always have someone to talk to and share exciting moments with.", vi: "Ý tôi là, khi đi du lịch với bạn bè, tôi luôn có người để nói chuyện và chia sẻ những khoảnh khắc thú vị." },
                { en: "For example, we can explore new places, try local food, and take a lot of beautiful photos together.", vi: "Ví dụ, chúng tôi có thể khám phá những địa điểm mới, thử thức ăn địa phương và chụp nhiều bức ảnh đẹp cùng nhau." }
              ]
            },
            {
              q: { en: "What do you usually prepare before going on a trip?", vi: "Bạn thường chuẩn bị gì trước khi đi du lịch?" },
              b1: [
                { en: "Before going on a trip, I often prepare some clothes, things like T-shirts, pants, or jackets because I want to look good in photos.", vi: "Trước khi đi du lịch, tôi thường chuẩn bị một số quần áo, những thứ như áo thun, quần dài, hoặc áo khoác vì tôi muốn trông đẹp trong các bức ảnh." },
                { en: "I also bring some cash, my phone, and some medicine just in case.", vi: "Tôi cũng mang theo một ít tiền mặt, điện thoại và một số loại thuốc để phòng hờ." }
              ],
              b2: [
                { en: "Before going on a trip, I usually pack some clothes, such as T-shirts, pants, and jackets, so I can look good in photos.", vi: "Trước khi đi du lịch, tôi thường xếp một số quần áo, như áo thun, quần dài và áo khoác, để tôi có thể trông đẹp trong các bức ảnh." },
                { en: "Besides, I also bring my phone, some cash, and essential medicines just in case.", vi: "Bên cạnh đó, tôi cũng mang theo điện thoại, một ít tiền mặt và các loại thuốc cần thiết để phòng hờ." }
              ]
            },
            {
              q: { en: "Have you ever traveled abroad?", vi: "Bạn đã bao giờ đi du lịch nước ngoài chưa?" },
              b1: [
                { en: "No, I haven't. But I hope I can travel abroad in the future.", vi: "Chưa, tôi chưa từng. Nhưng tôi hy vọng tôi có thể đi du lịch nước ngoài trong tương lai." },
                { en: "I really want to visit Japan because I love Japanese food and culture.", vi: "Tôi thực sự muốn đến thăm Nhật Bản vì tôi yêu ẩm thực và văn hóa Nhật Bản." }
              ],
              b2: [
                { en: "To be honest, I haven’t had the chance to travel abroad yet.", vi: "Thành thật mà nói, tôi chưa có cơ hội đi du lịch nước ngoài." },
                { en: "But I definitely want to visit Japan in the future because I’m really interested in Japanese food and their unique culture.", vi: "Nhưng tôi chắc chắn muốn đến thăm Nhật Bản trong tương lai vì tôi thực sự quan tâm đến ẩm thực Nhật Bản và nền văn hóa độc đáo của họ." }
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
              q: { en: "Where do you want to visit during your summer holiday?", vi: "Bạn muốn đến thăm nơi nào trong kỳ nghỉ hè của mình?" },
              b1: [
                { en: "During my summer holiday, I want to visit a beach city, maybe Da Nang.", vi: "Trong kỳ nghỉ hè của mình, tôi muốn đến thăm một thành phố biển, có thể là Đà Nẵng." },
                { en: "I love going to the beach because I can swim in the sea, eat fresh seafood, and just relax after a long year of studying.", vi: "Tôi thích đi biển vì tôi có thể bơi dưới biển, ăn hải sản tươi sống và thư giãn sau một năm dài học tập." }
              ],
              b2: [
                { en: "During my summer holiday, I would love to visit a beach destination like Da Nang.", vi: "Trong kỳ nghỉ hè của mình, tôi rất muốn đến thăm một điểm đến ở bãi biển như Đà Nẵng." },
                { en: "I enjoy going to the beach because I can swim in the sea, enjoy fresh seafood, and just relax after a long year of studying.", vi: "Tôi thích đi biển vì tôi có thể bơi dưới biển, thưởng thức hải sản tươi sống và thư giãn sau một năm dài học tập." }
              ]
            },
            {
              q: { en: "What do you usually do during your holidays?", vi: "Bạn thường làm gì trong những kỳ nghỉ của mình?" },
              b1: [
                { en: "During my holidays, I usually spend time with my family and friends.", vi: "Trong những kỳ nghỉ, tôi thường dành thời gian cho gia đình và bạn bè." },
                { en: "We often go out to eat or watch a movie together.", vi: "Chúng tôi thường đi ăn ngoài hoặc xem phim cùng nhau." },
                { en: "Sometimes, I just stay at home, listen to music, and get some rest.", vi: "Đôi khi, tôi chỉ ở nhà, nghe nhạc và nghỉ ngơi." }
              ],
              b2: [
                { en: "During my holidays, I usually spend time with my family and friends.", vi: "Trong những kỳ nghỉ, tôi thường dành thời gian cho gia đình và bạn bè." },
                { en: "We often hang out, grab something to eat, or watch a movie together.", vi: "Chúng tôi thường đi chơi, mua gì đó để ăn, hoặc xem phim cùng nhau." },
                { en: "However, there are also days when I just want to stay at home, listen to music, and recharge my batteries.", vi: "Tuy nhiên, cũng có những ngày tôi chỉ muốn ở nhà, nghe nhạc và nạp lại năng lượng." }
              ]
            },
            {
              q: { en: "Do you prefer spending your holidays in the countryside or the city?", vi: "Bạn thích dành kỳ nghỉ ở nông thôn hay thành phố hơn?" },
              b1: [
                { en: "I prefer spending my holidays in the countryside.", vi: "Tôi thích dành kỳ nghỉ ở nông thôn hơn." },
                { en: "It’s very peaceful and quiet there.", vi: "Ở đó rất thanh bình và yên tĩnh." },
                { en: "I can enjoy the fresh air and feel more relaxed away from the busy city.", vi: "Tôi có thể tận hưởng không khí trong lành và cảm thấy thư giãn hơn khi tránh xa thành phố nhộn nhịp." }
              ],
              b2: [
                { en: "I definitely prefer spending my holidays in the countryside.", vi: "Tôi chắc chắn thích dành kỳ nghỉ ở nông thôn hơn." },
                { en: "The main reason is that it’s much more peaceful and quiet compared to the city.", vi: "Lý do chính là nó thanh bình và yên tĩnh hơn nhiều so với thành phố." },
                { en: "Being there allows me to enjoy the fresh air and feel completely relaxed.", vi: "Ở đó cho phép tôi tận hưởng không khí trong lành và cảm thấy hoàn toàn thư giãn." }
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
              q: { en: "How do you usually plan your trips?", vi: "Bạn thường lên kế hoạch cho các chuyến đi của mình như thế nào?" },
              b1: [
                { en: "I usually search for information on the internet.", vi: "Tôi thường tìm kiếm thông tin trên mạng." },
                { en: "I read reviews from other people to choose a good place to stay and the best places to visit.", vi: "Tôi đọc đánh giá từ những người khác để chọn một nơi ở tốt và những địa điểm tốt nhất để tham quan." },
                { en: "Then, I book the tickets and pack my bags.", vi: "Sau đó, tôi đặt vé và đóng gói hành lý." }
              ],
              b2: [
                { en: "I usually start by searching for information online.", vi: "Tôi thường bắt đầu bằng cách tìm kiếm thông tin trên mạng." },
                { en: "I read reviews from other travelers to find good accommodation and the best tourist attractions.", vi: "Tôi đọc đánh giá từ các du khách khác để tìm chỗ ở tốt và những điểm thu hút khách du lịch tốt nhất." },
                { en: "After that, I book the necessary tickets and pack my bags.", vi: "Sau đó, tôi đặt các vé cần thiết và đóng gói hành lý." }
              ]
            },
            {
              q: { en: "Do you like a well-planned trip or an unplanned trip?", vi: "Bạn thích một chuyến đi được lên kế hoạch kỹ lưỡng hay một chuyến đi không có kế hoạch?" },
              b1: [
                { en: "I prefer a well-planned trip.", vi: "Tôi thích một chuyến đi được lên kế hoạch kỹ lưỡng hơn." },
                { en: "When everything is prepared, I feel more confident and I don’t have to worry about problems during the trip.", vi: "Khi mọi thứ đã được chuẩn bị, tôi cảm thấy tự tin hơn và không phải lo lắng về các vấn đề trong suốt chuyến đi." }
              ],
              b2: [
                { en: "I definitely prefer a well-planned trip.", vi: "Tôi chắc chắn thích một chuyến đi được lên kế hoạch kỹ lưỡng hơn." },
                { en: "I feel much more confident and relaxed when everything is prepared in advance.", vi: "Tôi cảm thấy tự tin và thư giãn hơn nhiều khi mọi thứ đã được chuẩn bị trước." },
                { en: "That way, I don’t have to worry about unexpected problems and can just enjoy the trip.", vi: "Bằng cách đó, tôi không phải lo lắng về những vấn đề bất ngờ và chỉ cần tận hưởng chuyến đi." }
              ]
            },
            {
              q: { en: "What is the most difficult part of planning a trip?", vi: "Phần khó nhất khi lên kế hoạch cho một chuyến đi là gì?" },
              b1: [
                { en: "For me, the most difficult part is choosing a destination.", vi: "Đối với tôi, phần khó nhất là chọn một điểm đến." },
                { en: "There are so many beautiful places, so it’s hard to decide where to go, especially when travelling with a group of friends who have different opinions.", vi: "Có rất nhiều nơi đẹp, nên rất khó để quyết định đi đâu, đặc biệt là khi đi du lịch với một nhóm bạn có nhiều ý kiến khác nhau." }
              ],
              b2: [
                { en: "For me, the most challenging part is choosing the right destination.", vi: "Đối với tôi, phần thử thách nhất là chọn đúng điểm đến." },
                { en: "Since there are so many amazing places to visit, it’s quite hard to make a final decision, especially when travelling with a group of friends who have different preferences.", vi: "Vì có rất nhiều nơi tuyệt vời để tham quan, khá khó để đưa ra quyết định cuối cùng, đặc biệt là khi đi du lịch với một nhóm bạn có những sở thích khác nhau." }
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
              q: { en: "What is your favorite season of the year?", vi: "Mùa yêu thích nhất trong năm của bạn là gì?" },
              b1: [
                { en: "My favorite season is autumn.", vi: "Mùa yêu thích của tôi là mùa thu." },
                { en: "The weather in autumn is very cool and nice.", vi: "Thời tiết vào mùa thu rất mát mẻ và dễ chịu." },
                { en: "It’s not too hot like summer and not too cold like winter, which is perfect for going out.", vi: "Nó không quá nóng như mùa hè và không quá lạnh như mùa đông, điều đó thật hoàn hảo để đi chơi." }
              ],
              b2: [
                { en: "My favorite season is definitely autumn.", vi: "Mùa yêu thích của tôi chắc chắn là mùa thu." },
                { en: "I really love the weather during this time because it’s cool and pleasant.", vi: "Tôi thực sự yêu thời tiết trong khoảng thời gian này vì nó mát mẻ và dễ chịu." },
                { en: "It’s not boiling hot like summer or freezing cold like winter, making it absolutely perfect for outdoor activities.", vi: "Nó không nóng như thiêu đốt giống mùa hè hay lạnh cóng giống mùa đông, làm cho nó hoàn toàn hoàn hảo cho các hoạt động ngoài trời." }
              ]
            },
            {
              q: { en: "Do you prefer hot weather or cold weather?", vi: "Bạn thích thời tiết nóng hay thời tiết lạnh hơn?" },
              b1: [
                { en: "I prefer cold weather because I can wear nice winter clothes like sweaters and jackets.", vi: "Tôi thích thời tiết lạnh hơn vì tôi có thể mặc những bộ quần áo mùa đông đẹp như áo len và áo khoác." },
                { en: "Also, I sleep much better when the weather is cold.", vi: "Ngoài ra, tôi ngủ ngon hơn nhiều khi thời tiết lạnh." }
              ],
              b2: [
                { en: "I definitely prefer cold weather.", vi: "Tôi chắc chắn thích thời tiết lạnh hơn." },
                { en: "The main reason is that I can wear stylish winter clothes like sweaters and jackets.", vi: "Lý do chính là tôi có thể mặc những bộ quần áo mùa đông phong cách như áo len và áo khoác." },
                { en: "Besides, I find that I sleep much better and feel more comfortable when it’s cold.", vi: "Bên cạnh đó, tôi thấy rằng mình ngủ ngon hơn nhiều và cảm thấy thoải mái hơn khi trời lạnh." }
              ]
            },
            {
              q: { en: "How does the weather affect your mood?", vi: "Thời tiết ảnh hưởng đến tâm trạng của bạn như thế nào?" },
              b1: [
                { en: "The weather affects my mood a lot.", vi: "Thời tiết ảnh hưởng đến tâm trạng của tôi rất nhiều." },
                { en: "When it’s sunny, I feel happy and want to go out.", vi: "Khi trời nắng, tôi cảm thấy vui vẻ và muốn ra ngoài." },
                { en: "But when it’s raining, I usually feel a bit sad and lazy.", vi: "Nhưng khi trời mưa, tôi thường cảm thấy hơi buồn và lười biếng." }
              ],
              b2: [
                { en: "The weather has a huge impact on my mood.", vi: "Thời tiết có tác động rất lớn đến tâm trạng của tôi." },
                { en: "When it’s bright and sunny, I usually feel energetic and motivated to go out.", vi: "Khi trời sáng sủa và có nắng, tôi thường cảm thấy tràn đầy năng lượng và có động lực để ra ngoài." },
                { en: "On the other hand, when it’s raining and gloomy, I tend to feel a bit sad and lazy.", vi: "Mặt khác, khi trời mưa và ảm đạm, tôi có xu hướng cảm thấy hơi buồn và lười biếng." }
              ]
            }
          ]
        }
      ]
    };
`;
    content = content.substring(0, idx) + newSubtopics;
    fs.writeFileSync(groupPath, content);
    console.log("Updated group3.js successfully.");
} else {
    console.log("Could not find 'subtopics: ['");
}

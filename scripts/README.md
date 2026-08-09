# Scripts

Các script phụ trợ được tách khỏi thư mục gốc để không lẫn với mã chạy chính.

## Kiểm tra

- `node scripts/check-errors.js`: mở project qua HTTP tạm thời và kiểm tra lỗi runtime bằng Puppeteer.
- `scripts/tests/`: các fixture/test cũ dùng cho thử nghiệm riêng.

## Migrations

`migrations/` chứa các script chỉnh dữ liệu hoặc giao diện theo từng lần cập nhật trước đây. Đây là script một lần, không chạy tự động khi mở project.

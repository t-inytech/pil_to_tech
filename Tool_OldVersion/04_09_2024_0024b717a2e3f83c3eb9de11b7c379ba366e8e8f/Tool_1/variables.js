// Tạo phần tử div và thiết lập ID
const divElement = document.createElement('div');
divElement.id = 'telemetryId';
divElement.style.display = 'none';

// Thêm sự kiện click vào divElement
divElement.addEventListener('click', function() {
    window.GetTelemetryID('public-token-live-e4dbf337-9f27-447f-908f-17038ec8d940', 'https://auth.pixels.xyz/submit')
    .then(function(telemetryId) {
        console.log('Telemetry ID:', telemetryId);
        divElement.textContent = telemetryId;
    });
});

// Thêm divElement vào body của tài liệu
document.body.appendChild(divElement);

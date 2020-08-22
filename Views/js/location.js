navigator.geolocation.getCurrentPosition((position) => {
    fetch('/map', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }),
    });
});

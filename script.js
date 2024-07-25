function fetchSkin() {
    const username = document.getElementById('username').value;
    const skinUrl = `https://minotar.net/skin/${username}`;
    const skinAvatarUrl = `https://minotar.net/helm/${username}`;
    const skinBodyUrl = `https://minotar.net/body/${username}`;
    const skinIsometricHeadUrl = `https://minotar.net/cube/${username}`;

    fetch(skinUrl)
        .then(response => {
            if (response.ok) {
                document.getElementById('skinImage').src = skinUrl;
                document.getElementById('skinImage').style.display = 'block';
                document.getElementById('downloadSkin').href = skinUrl;
                document.getElementById('downloadSkin').style.display = 'block';
            } else {
                document.getElementById('skinImage').style.display = 'none';
                document.getElementById('downloadSkin').style.display = 'none';
                showPopup('Could not find skin for username: ' + username);
            }
        })
        .catch(error => {
            console.error('Error fetching skin:', error);
            showPopup('Error fetching skin.');
        });

    fetch(skinAvatarUrl)
        .then(response => {
            if (response.ok) {
                document.getElementById('skinAvatar').src = skinAvatarUrl;
                document.getElementById('skinAvatar').style.display = 'block';
                document.getElementById('downloadAvatar').href = skinAvatarUrl;
                document.getElementById('downloadAvatar').style.display = 'block';
            } else {
                document.getElementById('skinAvatar').style.display = 'none';
                document.getElementById('downloadAvatar').style.display = 'none';
                showPopup('Could not find avatar for username: ' + username);
            }
        })
        .catch(error => {
            console.error('Error fetching avatar:', error);
            showPopup('Error fetching avatar.');
        });

    fetch(skinBodyUrl)
        .then(response => {
            if (response.ok) {
                document.getElementById('skinBody').src = skinBodyUrl;
                document.getElementById('skinBody').style.display = 'block';
                document.getElementById('downloadBody').href = skinBodyUrl;
                document.getElementById('downloadBody').style.display = 'block';
            } else {
                document.getElementById('skinBody').style.display = 'none';
                document.getElementById('downloadBody').style.display = 'none';
                showPopup('Could not find body for username: ' + username);
            }
        })
        .catch(error => {
            console.error('Error fetching body:', error);
            showPopup('Error fetching body.');
        });

    fetch(skinIsometricHeadUrl)
        .then(response => {
            if (response.ok) {
                document.getElementById('IsometricHead').src = skinIsometricHeadUrl;
                document.getElementById('IsometricHead').style.display = 'block';
                document.getElementById('downloadIsometricHead').href = skinIsometricHeadUrl;
                document.getElementById('downloadIsometricHead').style.display = 'block';
            } else {
                document.getElementById('IsometricHead').style.display = 'none';
                document.getElementById('downloadIsometricHead').style.display = 'none';
                showPopup('Could not find isometric head for username: ' + username);
            }
        })
        .catch(error => {
            console.error('Error fetching isometric head:', error);
            showPopup('Error fetching isometric head.');
        });
}

function showPopup(message) {
    document.getElementById('errorMessage').innerText = message;
    document.getElementById('errorPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('errorPopup').style.display = 'none';
}

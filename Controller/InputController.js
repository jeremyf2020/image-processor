function keyPressed() {
    if (key === ' ') {
        snapshot = video.get();
    }
    if (key === 's') {
        if (snapshot) {
            save(snapshot, 'snapshot.jpg');
        }
    }
}

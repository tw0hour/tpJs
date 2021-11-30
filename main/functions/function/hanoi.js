function hanoi(nb, start, finish) {
    const it = 6 - (start + finish);
    if( nb !== 0) {
        hanoi(nb-1, start, it);
        console.log(start +" -> "+ finish);
        hanoi(nb-1, it, finish);
    }
}

hanoi(3, 1, 3);
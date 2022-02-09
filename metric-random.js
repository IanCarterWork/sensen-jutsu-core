export class SensenMetricRandom {
    static CreateRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static CreateBlock(base, length) {
        let based, out = [];
        if (typeof base == 'string') {
            based = base.split(' ');
        }
        if (Array.isArray(based)) {
            for (let x = 0; x < length; x++) {
                const k = this.CreateRandom(0, based.length - 1);
                out[out.length] = based[k];
            }
        }
        return out;
    }
    static CreateAplpha(length) {
        return this.CreateBlock(`${this.ALPHA_LOWER} ${this.ALPHA_UPPER}`, length);
    }
    static CreateNumeric(length) {
        return this.CreateBlock(`${this.NUMERIC}`, length);
    }
    static Create(length) {
        return this.CreateBlock(`${this.ALPHA_NUMERIC}`, length);
    }
}
SensenMetricRandom.ALPHA_NUMERIC = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
SensenMetricRandom.ALPHA_NUMERIC_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';
SensenMetricRandom.ALPHA_NUMERIC_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
SensenMetricRandom.ALPHA_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
SensenMetricRandom.ALPHA_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
SensenMetricRandom.NUMERIC = '0 1 2 3 4 5 6 7 8 9';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljLXJhbmRvbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ldHJpYy1yYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsTUFBTSxPQUFPLGtCQUFrQjtJQWdCM0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFXLEVBQUUsR0FBVztRQUV4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRXpELENBQUM7SUFLRCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQVksRUFBRSxNQUFjO1FBRTNDLElBQUksS0FBSyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFHcEIsSUFBRyxPQUFPLElBQUksSUFBSSxRQUFRLEVBQUM7WUFFdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7U0FFMUI7UUFHRCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFFcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFN0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFakQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUM7YUFFaEM7U0FFSjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUtELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBYztRQUU5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBRW5CLEdBQUksSUFBSSxDQUFDLFdBQVksSUFBSyxJQUFJLENBQUMsV0FBWSxFQUFFLEVBRTdDLE1BQU0sQ0FFVCxDQUFBO0lBRUwsQ0FBQztJQUtELE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBYztRQUUvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBRW5CLEdBQUksSUFBSSxDQUFDLE9BQVEsRUFBRSxFQUVuQixNQUFNLENBRVQsQ0FBQTtJQUVMLENBQUM7SUFLRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQWM7UUFFeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUVuQixHQUFJLElBQUksQ0FBQyxhQUFjLEVBQUUsRUFFekIsTUFBTSxDQUVULENBQUE7SUFFTCxDQUFDOztBQTlGTSxnQ0FBYSxHQUFvQiw2SEFBNkgsQ0FBQztBQUUvSixzQ0FBbUIsR0FBcUIseUVBQXlFLENBQUM7QUFFbEgsc0NBQW1CLEdBQXFCLHlFQUF5RSxDQUFDO0FBRWxILDhCQUFXLEdBQWtCLHFEQUFxRCxDQUFDO0FBRW5GLDhCQUFXLEdBQWtCLHFEQUFxRCxDQUFDO0FBRW5GLDBCQUFPLEdBQWUscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRyaWNUQWxwaGFMLCBNZXRyaWNUQWxwaGFOdW0sIE1ldHJpY1RBbHBoYU51bUwsIE1ldHJpY1RBbHBoYU51bVUsIE1ldHJpY1RBbHBoYVUsIE1ldHJpY1ROdW0gfSBmcm9tIFwiLlwiO1xuXG5cblxuXG5leHBvcnQgY2xhc3MgU2Vuc2VuTWV0cmljUmFuZG9te1xuXG4gICAgc3RhdGljIEFMUEhBX05VTUVSSUM6IE1ldHJpY1RBbHBoYU51bSA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHogQSBCIEMgRCBFIEYgRyBIIEkgSiBLIEwgTSBOIE8gUCBRIFIgUyBUIFUgViBXIFggWSBaIDAgMSAyIDMgNCA1IDYgNyA4IDknO1xuXG4gICAgc3RhdGljIEFMUEhBX05VTUVSSUNfTE9XRVI6IE1ldHJpY1RBbHBoYU51bUwgPSAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0IHUgdiB3IHggeSB6IDAgMSAyIDMgNCA1IDYgNyA4IDknO1xuXG4gICAgc3RhdGljIEFMUEhBX05VTUVSSUNfVVBQRVI6IE1ldHJpY1RBbHBoYU51bVUgPSAnQSBCIEMgRCBFIEYgRyBIIEkgSiBLIEwgTSBOIE8gUCBRIFIgUyBUIFUgViBXIFggWSBaIDAgMSAyIDMgNCA1IDYgNyA4IDknO1xuXG4gICAgc3RhdGljIEFMUEhBX1VQUEVSOiBNZXRyaWNUQWxwaGFVID0gJ0EgQiBDIEQgRSBGIEcgSCBJIEogSyBMIE0gTiBPIFAgUSBSIFMgVCBVIFYgVyBYIFkgWic7XG5cbiAgICBzdGF0aWMgQUxQSEFfTE9XRVI6IE1ldHJpY1RBbHBoYUwgPSAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0IHUgdiB3IHggeSB6JztcblxuICAgIHN0YXRpYyBOVU1FUklDOiBNZXRyaWNUTnVtID0gJzAgMSAyIDMgNCA1IDYgNyA4IDknO1xuICAgIFxuXG5cbiAgICBzdGF0aWMgQ3JlYXRlUmFuZG9tKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcil7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcblxuICAgIH1cbiAgICBcbiAgICBcblxuXG4gICAgc3RhdGljIENyZWF0ZUJsb2NrKGJhc2U6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpe1xuXG4gICAgICAgIGxldCBiYXNlZCwgb3V0ID0gW107XG5cblxuICAgICAgICBpZih0eXBlb2YgYmFzZSA9PSAnc3RyaW5nJyl7XG5cbiAgICAgICAgICAgIGJhc2VkID0gYmFzZS5zcGxpdCgnICcpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGJhc2VkKSl7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSB0aGlzLkNyZWF0ZVJhbmRvbSgwLCBiYXNlZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAgICAgICAgIG91dFtvdXQubGVuZ3RoXSA9IGJhc2VkWyBrIF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG4gICAgc3RhdGljIENyZWF0ZUFwbHBoYShsZW5ndGg6IG51bWJlcil7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuQ3JlYXRlQmxvY2soXG5cbiAgICAgICAgICAgIGAkeyB0aGlzLkFMUEhBX0xPV0VSIH0gJHsgdGhpcy5BTFBIQV9VUFBFUiB9YCxcblxuICAgICAgICAgICAgbGVuZ3RoXG4gICAgICAgICAgICBcbiAgICAgICAgKVxuXG4gICAgfVxuXG5cblxuXG4gICAgc3RhdGljIENyZWF0ZU51bWVyaWMobGVuZ3RoOiBudW1iZXIpe1xuXG4gICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZUJsb2NrKFxuXG4gICAgICAgICAgICBgJHsgdGhpcy5OVU1FUklDIH1gLFxuXG4gICAgICAgICAgICBsZW5ndGhcblxuICAgICAgICApXG5cbiAgICB9XG5cblxuXG5cbiAgICBzdGF0aWMgQ3JlYXRlKGxlbmd0aDogbnVtYmVyKXtcblxuICAgICAgICByZXR1cm4gdGhpcy5DcmVhdGVCbG9jayhcblxuICAgICAgICAgICAgYCR7IHRoaXMuQUxQSEFfTlVNRVJJQyB9YCxcblxuICAgICAgICAgICAgbGVuZ3RoXG5cbiAgICAgICAgKVxuXG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxufSJdfQ==
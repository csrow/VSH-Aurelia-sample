define(["require", "exports"], function (require, exports) {
    var CapFirstValueConverter = (function () {
        function CapFirstValueConverter() {
        }
        CapFirstValueConverter.prototype.fromView = function (value) {
            if (value.length < 1)
                return value;
            var firstLetterCap = value.slice(0, 1).toUpperCase();
            var restOfIt = value.slice(1);
            var changed = firstLetterCap + restOfIt;
            return changed;
        };
        return CapFirstValueConverter;
    })();
    exports.CapFirstValueConverter = CapFirstValueConverter;
});
//# sourceMappingURL=cap-first-value-converter.js.map
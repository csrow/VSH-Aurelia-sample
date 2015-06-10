define(["require", "exports"], function (require, exports) {
    var LowerValueConverter = (function () {
        function LowerValueConverter() {
        }
        LowerValueConverter.prototype.toView = function (value) {
            return value && value.toLowerCase();
        };
        return LowerValueConverter;
    })();
    exports.LowerValueConverter = LowerValueConverter;
});
//# sourceMappingURL=lower-value-converter.js.map
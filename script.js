var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var circleDi;
var sqrLength;
var recLength;
var recHeight;
var triHeight;
var rectangle_ = document.getElementById("rectangle_btn");
var square_ = document.getElementById("square_btn");
var circle_ = document.getElementById("circle_btn");
var triangle_ = document.getElementById("triangle_btn");
var draw_board = document.getElementById("draw_board");
var display = document.getElementById('display');
var info = document.getElementById('info');
rectangle_.addEventListener('click', function () {
    new rectangle;
});
square_.addEventListener('click', function () {
    new square;
});
circle_.addEventListener('click', function () {
    new circle;
});
triangle_.addEventListener('click', function () {
    new triangle;
});
var shape = /** @class */ (function () {
    function shape() {
        var posx = (Math.random() * 601);
        var posy = (Math.random() * 601);
        this.div = document.createElement('div');
        draw_board.appendChild(this.div);
        this.div.style.position = 'absolute';
        this.div.style.backgroundColor = "green";
        this.div.style.left = posx - 1 + "px";
        this.div.style.top = posy - 1 + "px";
        this.div.addEventListener('click', function () {
            this.display();
        });
        this.div.addEventListener('dblclick', function () {
            this.remove();
        });
    }
    shape.prototype.display = function () {
        var shapename = document.getElementById('shapename');
        var width = document.getElementById('width');
        var height = document.getElementById('height');
        var radius = document.getElementById('radius');
        var area = document.getElementById('area');
        var perimeter = document.getElementById('perimeter');
        shapename.innerText = ("Shape Name: " + this.name);
        width.innerText = ("Width: " + this.width);
        height.innerText = ("Height: " + this.height);
        radius.innerText = ("Radius: " + this.radius);
        area.innerText = ("Area: " + this.area);
        perimeter.innerText = ("Perimeter: " + this.perimeter);
    };
    shape.prototype.remove = function () {
        this.div;
    };
    ;
    return shape;
}());
;
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        var _this = _super.call(this) || this;
        recLength = document.getElementById('rectangle_width').value;
        recHeight = document.getElementById('rectangle_height').value;
        _this.div.id = "rectangle";
        _this.name = 'Rectangle';
        _this.div.style.height = recHeight + "px";
        _this.div.style.width = recLength + "px";
        _this.width = recLength;
        _this.height = recHeight;
        _this.radius = 'This is a Rectangle';
        _this.area = +recLength * +recHeight;
        _this.perimeter = +recHeight + +recLength * 2;
        return _this;
    }
    return rectangle;
}(shape));
;
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square() {
        var _this = _super.call(this) || this;
        sqrLength = document.getElementById('Square_length').value;
        _this.div.id = "square";
        _this.name = "Square";
        _this.div.style.height = sqrLength + "px";
        _this.div.style.width = sqrLength + "px";
        _this.width = sqrLength;
        _this.height = sqrLength;
        _this.radius = 'this is a square';
        _this.area = +sqrLength * +sqrLength;
        _this.perimeter = +sqrLength + +sqrLength * 2;
        return _this;
    }
    return square;
}(shape));
;
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle() {
        var _this = _super.call(this) || this;
        circleDi = document.getElementById('circle_radius').value;
        _this.div.id = 'circle';
        _this.name = 'cirlce';
        _this.div.style.height = circleDi + "px";
        _this.div.style.width = circleDi + "px";
        _this.width = "its a circle";
        _this.height = 'radius x2';
        _this.radius = +circleDi / 2;
        _this.area = Math.round(_this.radius * _this.radius * Math.PI);
        _this.perimeter = Math.round(2 * _this.radius * Math.PI);
        return _this;
    }
    return circle;
}(shape));
;
var triangle = /** @class */ (function (_super) {
    __extends(triangle, _super);
    function triangle() {
        var _this = _super.call(this) || this;
        triHeight = document.getElementById('isoceles_height').value;
        _this.div.id = 'triangle';
        _this.name = 'Triangle';
        _this.div.style.borderBottomWidth = triHeight + "px";
        _this.div.style.borderRightWidth = triHeight + "px";
        _this.width = 'triangle';
        _this.height = triHeight;
        _this.radius = 'This is a Triangle';
        _this.area = +triHeight * +triHeight / 2;
        _this.perimeter = +triHeight * 3;
        return _this;
    }
    return triangle;
}(shape));
;

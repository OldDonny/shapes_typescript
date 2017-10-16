
let circleDi: string;
var sqrLength: string;
let recLength: string;
let recHeight: string;
let triHeight: string;
let rectangle_ = document.getElementById("rectangle_btn");
let square_ = document.getElementById("square_btn");
let circle_ = document.getElementById("circle_btn");
let triangle_ = document.getElementById("triangle_btn");
let draw_board = document.getElementById("draw_board");
let display = document.getElementById('display');
let info= document.getElementById('info')

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

class shape {
    div;
    name;
    width;
    height;
    radius;
    area;
    perimeter;
    constructor() {
        var posx = (Math.random() * 601)
        var posy = (Math.random() * 601)
        this.div = document.createElement('div');
        draw_board.appendChild(this.div);
        this.div.style.position = 'absolute';
        this.div.style.backgroundColor = "green";
        this.div.style.left = `${posx-1}px`;
        this.div.style.top = `${posy-1}px`;
        this.div.addEventListener('click', function () {
            this.display();
            
        });
        this.div.addEventListener('dblclick', function () {
            this.remove()
        });

    }

   display():void {
        let shapename = document.getElementById('shapename');
        let width = document.getElementById('width');
        let height = document.getElementById('height');
        let radius = document.getElementById('radius');
        let area = document.getElementById('area');
        let perimeter = document.getElementById('perimeter');
        shapename.innerText = (`Shape Name: ${this.name}`);
        width.innerText = (`Width: ${this.width}`);
        height.innerText = (`Height: ${this.height}`);
        radius.innerText = (`Radius: ${this.radius}`);
        area.innerText = (`Area: ${this.area}`);
        perimeter.innerText = (`Perimeter: ${this.perimeter}`);
    }

    remove() {
        this.div
    };
};

class rectangle extends shape {
    constructor() {
        super()
        recLength = (<HTMLInputElement>document.getElementById('rectangle_width')).value;
        recHeight = (<HTMLInputElement>document.getElementById('rectangle_height')).value;
        this.div.id = "rectangle";
        this.name = 'Rectangle';
        this.div.style.height = `${recHeight}px`;
        this.div.style.width = `${recLength}px`;
        this.width = recLength;
        this.height = recHeight;
        this.radius = 'This is a Rectangle';
        this.area = +recLength * +recHeight;
        this.perimeter = +recHeight + +recLength * 2;


    }
};

class square extends shape {
    constructor() {
        super()
        sqrLength = (<HTMLInputElement>document.getElementById('Square_length')).value;
        this.div.id = "square";
        this.name = "Square";
        this.div.style.height = `${sqrLength}px`;
        this.div.style.width = `${sqrLength}px`;
        this.width = sqrLength;
        this.height = sqrLength;
        this.radius = 'this is a square';
        this.area = +sqrLength * +sqrLength;
        this.perimeter = +sqrLength + +sqrLength * 2;
        
    }
};

class circle extends shape {
    constructor() {
        super()
        circleDi = (<HTMLInputElement>document.getElementById('circle_radius')).value;
        this.div.id = 'circle';
        this.name = 'cirlce';
        this.div.style.height = `${circleDi}px`;
        this.div.style.width = `${circleDi}px`;
        this.width = "its a circle";
        this.height = 'radius x2';
        this.radius = +circleDi / 2;
        this.area = Math.round(this.radius * this.radius * Math.PI);
        this.perimeter = Math.round(2 * this.radius * Math.PI);
    }
};

class triangle extends shape {
    constructor() {
        super()
        triHeight = (<HTMLInputElement>document.getElementById('isoceles_height')).value;
        this.div.id = 'triangle';
        this.name = 'Triangle';
        this.div.style.borderBottomWidth = `${triHeight}px`;
        this.div.style.borderRightWidth = `${triHeight}px`;
        this.width = 'triangle';
        this.height = triHeight;
        this.radius = 'This is a Triangle';
        this.area = +triHeight * +triHeight / 2;
        this.perimeter = +triHeight * 3;

    }
};


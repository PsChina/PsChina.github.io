/* eslint-disable require-jsdoc */
export default function() {
    const snake = document.getElementsByClassName('snake')[0];
    const snakeHead = document.getElementsByClassName('snakeHead')[0];
    let clientWith = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    // eslint-disable-next-line no-unused-vars
    let timer = null;
    let noFood = true;
    const currentFoodCoordinate = [0, 0];
    let lastPressKeyboardCode = 0x27;

    // library
    function getPoint() {
        const point = [];
        let notOk = 0;

        do {
            point[0]=parseInt(Math.round(Math.random()*parseInt(clientWith/25)*100)/100);
            point[1]=parseInt(Math.round(Math.random()*parseInt(clientHeight/25)*100)/100);

            const bodyList = document.getElementsByClassName('snakeBody');

            let rightPointCount=0;

            for (let i=0; i<bodyList.length; i++) {
                if (bodyList[i].offsetLeft == point[0]*25&&bodyList[i].offsetTop == point[1]*25) {
                    notOk = true;
                } else {
                    rightPointCount++;
                }
            }

            if (bodyList.length == rightPointCount) {
                notOk = false;
            }
        } while (notOk);

        return point;
    }

    function creatFood() {
        const foodDiv = document.createElement('div');

        const potint = getPoint();

        foodDiv.style.width = 25 + 'px';

        foodDiv.style.height = 25 + 'px';

        foodDiv.style.background = 'yellow';

        foodDiv.style.position = 'absolute';

        foodDiv.style.left = potint[0]*25+ 'px';

        foodDiv.style.top = potint[1]*25+ 'px';

        snake.appendChild(foodDiv);

        currentFoodCoordinate[0] = foodDiv.offsetLeft;
        currentFoodCoordinate[1] = foodDiv.offsetTop;

        foodDiv.className = 'food';

        noFood = false;
    }

    function mainFunction() {
        // 如果场上没有食物 那么产生一个
        if (noFood) {
            creatFood();
        }
        // 判断是否吃到食物

        const didEat = snakeHead.style.left==currentFoodCoordinate[0]+'px'&&snakeHead.style.top==currentFoodCoordinate[1]+'px';
        if (didEat) {
            const newBody = document.getElementsByClassName('food')[0];
            newBody.className = 'snakeBody';
            newBody.style.background = 'green';
            noFood = true;
        }
        // 开始移动身体
        const bodyList = document.getElementsByClassName('snakeBody');

        if (bodyList.length) {
            bodyList[bodyList.length-1].style.left = snakeHead.offsetLeft+'px';
            bodyList[bodyList.length-1].style.top = snakeHead.offsetTop+'px';

            for (let i=0; i<bodyList.length-1; i++) {
                bodyList[i].style.left = bodyList[i+1].offsetLeft+'px';
                bodyList[i].style.top = bodyList[i+1].offsetTop+'px';
            }
        }
    }

    function snekeGoingMobileBack() {
        if (snakeHead.offsetLeft + 25 >(clientWith-clientWith%25)) {
            snakeHead.style.left = 0 + 'px';
        }

        if (snakeHead.offsetLeft<0) {
            snakeHead.style.left = ((clientWith-clientWith%25)-25)+ 'px';
        }

        if (snakeHead.offsetTop + 25 >(clientHeight-clientHeight%25)) {
            snakeHead.style.top = 0 + 'px';
        }
        if (snakeHead.offsetTop<0) {
            snakeHead.style.top = ((clientHeight-clientHeight%25)-25) + 'px';
        }
    }

    function isEatOnself() {
        let result = false;
        const bodyList = document.getElementsByClassName('snakeBody');

        for (let i=0; i<bodyList.length; i++) {
            if (bodyList[i].offsetLeft == snakeHead.offsetLeft&&bodyList[i].offsetTop == snakeHead.offsetTop) {
                result = true;
            }
        }

        return result;
    }
    // end_library


    // init

    snakeHead.style.left = 0 + 'px';

    snakeHead.style.top = 0 + 'px';

    for (let i=0; i<4; i++) {
        const BodyDiv = document.createElement('div');

        BodyDiv.style.width = 25 + 'px';

        BodyDiv.style.height = 25 + 'px';

        BodyDiv.style.background = 'green';

        BodyDiv.style.position = 'absolute';

        BodyDiv.style.left = 0+'px';

        BodyDiv.style.top = 0+'px';

        BodyDiv.className = 'snakeBody';

        snake.appendChild(BodyDiv);
    }

    // end_init


    // end


    document.snekeGoingMobile = function() {
        snakeHead.style.left = snakeHead.offsetLeft + 25 +'px';
        // 如果越界那么穿墙
        snekeGoingMobileBack();

        if (isEatOnself()) {
            alert('你挂了')
            location.reload(true);
        }

        mainFunction();
    }
    // 打开定时器 游戏开始
    timer = setInterval('document.snekeGoingMobile()', 100);

    document.onkeydown = function keDown(event) {
        event = event||window.event;
        const keyCode = event.keyCode||event.which;


        switch (keyCode) {
        case 0x25:
            {
                if (lastPressKeyboardCode!=0x27) {
                    document.snekeGoingMobile = function() {
                        snakeHead.style.left = snakeHead.offsetLeft - 25 +'px';
                        snekeGoingMobileBack();
                        if (isEatOnself()) {
                            alert('你挂了'); location.reload(true);
                        }
                        mainFunction();
                        lastPressKeyboardCode=0x25;
                    }
                }
            }
            break;

        case 0x26:
            {
                if (lastPressKeyboardCode!=0x28) {
                    document.snekeGoingMobile = function() {
                        snakeHead.style.top = snakeHead.offsetTop - 25 +'px';
                        snekeGoingMobileBack();
                        if (isEatOnself()) {
                            alert('你挂了'); location.reload(true);
                        }
                        mainFunction();
                        lastPressKeyboardCode=0x26;
                    }
                }
            }
            break;

        case 0x27:
            {
                if (lastPressKeyboardCode!=0x25) {
                    document.snekeGoingMobile = function() {
                        snakeHead.style.left = snakeHead.offsetLeft + 25 +'px';
                        snekeGoingMobileBack();
                        if (isEatOnself()) {
                            alert('你挂了'); location.reload(true);
                        }
                        mainFunction();
                        lastPressKeyboardCode=0x27;
                    }
                }
            }
            break;

        case 0x28:
            {
                if (lastPressKeyboardCode!=0x26) {
                    document.snekeGoingMobile = function() {
                        snakeHead.style.top = snakeHead.offsetTop + 25 +'px';
                        snekeGoingMobileBack();
                        if (isEatOnself()) {
                            alert('你挂了'); location.reload(true);
                        }
                        mainFunction();
                        lastPressKeyboardCode=0x28;
                    }
                }
            }
            break;
        }
    }

    // 适配

    window.addEventListener('resize', ()=>{
        clientWith = document.documentElement.clientWidth
        clientHeight = document.documentElement.clientHeight
    })
}

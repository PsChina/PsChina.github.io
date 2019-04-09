/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import isMobile from '../../../is/mobile.js'
export default function() {
    const successfullCoordinateArray = [0, 0, 134, 0, 269, 0, 0, 151, 134, 151, 269, 151, 0, 302, 134, 302];
    const mainGameBoxUl = document.getElementsByTagName('ul');
    const mainGameBoxLi = mainGameBoxUl[0].getElementsByTagName('li');
    const currentEmptOffset = [269, 302];
    const thisEmptOffset = [0, 0];
    const indexArray = [0, 1, 2, 3, 4, 5, 6, 7];
    const stepViewArray = document.getElementsByClassName('step');
    const stepView = stepViewArray[0];
    let timer = null;
    let step = 0;

    let time = 0;
    let succeed = 0;
    let notOk = 1;

    window.TimeAction = function() {
        time++;
        stepView.innerHTML='步数：'+step+'  时间：'+time;
    }

    for (let i=0; i<mainGameBoxLi.length; i++) {
        if (i<mainGameBoxLi.length-1) {
            mainGameBoxLi[i].style.left = successfullCoordinateArray[2*indexArray[i]] +'px';
            mainGameBoxLi[i].style.top = successfullCoordinateArray[2*indexArray[i]+1] +'px';
        }

        mainGameBoxLi[i].onclick = function() {
            if (!step&&!notOk) {
                if (!time) {
                    timer = setInterval('TimeAction()', 1000);
                }
            }

            let horizontalDistance = currentEmptOffset[0]-this.offsetLeft;
            let verticalDistance = currentEmptOffset[1]-this.offsetTop;

            if (horizontalDistance<0) {
                horizontalDistance*=-1;
            }

            if (verticalDistance<0) {
                verticalDistance*=-1;
            }

            const distance = horizontalDistance+verticalDistance;

            if (distance<=152&&distance>=149) {
                thisEmptOffset[1] = this.offsetTop;
                this.style.top = currentEmptOffset[1]+'px';
                currentEmptOffset[1] = thisEmptOffset[1];
                step++;
            } else if (distance<149) {
                thisEmptOffset[0] = this.offsetLeft;
                this.style.left = currentEmptOffset[0]+'px';
                currentEmptOffset[0] = thisEmptOffset[0];
                step++;
            }


            if (notOk) {
                step = 0;
            }
            stepView.innerHTML='步数：'+step+'  时间：'+time;

            const c1 = mainGameBoxLi[0].offsetLeft==0&&mainGameBoxLi[0].offsetTop==0;
            const c2 = mainGameBoxLi[1].offsetLeft==134&&mainGameBoxLi[1].offsetTop==0;
            const c3 = mainGameBoxLi[2].offsetLeft==269&&mainGameBoxLi[2].offsetTop==0;
            const c4 = mainGameBoxLi[3].offsetLeft==0&&mainGameBoxLi[3].offsetTop==151;
            const c5 = mainGameBoxLi[4].offsetLeft==134&&mainGameBoxLi[4].offsetTop==151;
            const c6 = mainGameBoxLi[5].offsetLeft==269&&mainGameBoxLi[5].offsetTop==151;
            const c7 = mainGameBoxLi[6].offsetLeft==0&&mainGameBoxLi[6].offsetTop==302;
            const c8 = mainGameBoxLi[7].offsetLeft==134&&mainGameBoxLi[7].offsetTop==302;
            succeed = c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8;
            if (succeed&&!notOk) {
                clearInterval(timer);
                mainGameBoxLi[8].style.display = 'block';
                stepView.innerHTML='过关! 步数：'+step+'  时间：'+time;
                for (let i=0; i<mainGameBoxLi.length; i++) {
                    mainGameBoxLi[i].onclick = function() {
                        alert('恭喜过关！耗时：'+time+'秒,共：'+step+'步');
                    }
                }
            }
        }

        if (i==mainGameBoxLi.length-1) {
            let min_setp = 0;
            do {
                min_setp++;
                const suijiIndex = Math.round(Math.random()*7);
                mainGameBoxLi[suijiIndex].click();

                notOk = !(min_setp>500&&!succeed&&currentEmptOffset[0]==269&&currentEmptOffset[1]==302);
            } while (notOk);
        }
    }
    // 禁止拖拽图片
    document.body.ondragstart = function() {
        return false;
    }
}

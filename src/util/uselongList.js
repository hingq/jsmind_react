// 实现无限滚动

const observerHandler = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(observerHandler);


export default function uselongList(array){


}
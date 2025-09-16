
console.log(gsap);


 gsap.registerPlugin(MotionPathPlugin);


addEventListener('click', () => {
   gsap.to("#boom", {duration: 5, motionPath: "#path"});
    console.log('screen clicked');
}
);

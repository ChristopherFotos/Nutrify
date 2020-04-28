let anim = {
  slideHeight: function (element, increment, target, friction) {
    let _a = document.getElementById(element);
    let height = 0;
    let _a3 = target;
    let _a4 = increment;
    let _a5 = friction;

    function _a2(t) {
      _a4 *= _a5;
      height += _a4;
      _a.style.height = height + "px";
      let req = requestAnimationFrame(_a2);
      if (height > _a3) {
        cancelAnimationFrame(req);
        return true;
      }
    }

    _a2();
  },
};

export default anim;

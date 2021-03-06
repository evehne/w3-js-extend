w3.modal = {
  init : function()
  {
    w3.on('[ui-modal-opener]', On.mouse.click, function(){
      var target = w3.getAttr(this, 'ui-modal-target');
      w3.show(target);
    });
    w3.on('[ui-modal-closer]', On.mouse.click, function(){
      var target = w3.getAttr(this, 'ui-modal-target');
      w3.hide(target);
    });
    return w3;
  }
};
w3.registerInitializer(function(){ w3.modal.init(); });

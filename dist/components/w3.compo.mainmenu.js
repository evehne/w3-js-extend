"usestrict";

w3.mainmenu = {
  sidebar : null,
  overlay : null,
  maintoggler: null,
  open : function()
  {
    w3.setAttr(this.sidebar,  'ui-state', 'open');
    w3.addStyle(this.overlay, 'display', 'block');
    w3.addStyle(this.overlay, 'opacity', '1');
    w3.addStyle(this.sidebar, 'transform', 'translateX(0px)');
    w3.addStyle(this.sidebar, 'opacity', '1');
    return w3;
  },
  close : function()
  {
    w3.setAttr(w3.mainmenu.sidebar,'ui-state','close');

    w3.addStyle(w3.mainmenu.sidebar, 'transform', 'translateX(-500px)');
    w3.addStyle(w3.mainmenu.sidebar, 'opacity', '0');

    w3.delay(1000, function(){
      w3.addStyle(w3.mainmenu.overlay, 'opacity', '0');
    });
    w3.delay(1500, function(){
      w3.addStyle(this.overlay, 'display', 'none');
    });
    return w3;
  },
  toggle : function()
  {
    var st = w3.getAttr(w3.mainmenu.sidebar, 'ui-state');
    switch( st )
    {
      case('close'):
        return this.open();
      break;
      case('open'):
        return this.close();
      break;
    }
    return w3;
  },
  init()
  {
    this.sidebar     = w3.get('[ui-main-sidebar]');
    w3.addStyle(this.sidebar, 'transition-property', 'all');
    w3.addStyle(this.sidebar, 'transition-delay', '0');
    w3.addStyle(this.sidebar, 'transition-duration', '1s');
    w3.addStyle(this.sidebar, 'transition-timing-function', 'ease-in-out');
    w3.addStyle(this.sidebar, 'opacity', '0');
    w3.addStyle(this.sidebar, 'transform', 'translate(-500px)');
    w3.addStyle(this.sidebar, 'display', 'block');

    this.overlay     = w3.get('[ui-main-sidebar-overlay]');
    w3.addStyle(this.overlay, 'display', 'none');
    w3.addStyle(this.overlay, 'transition-property', 'all');
    w3.addStyle(this.overlay, 'transition-delay', '0');
    w3.addStyle(this.overlay, 'transition-duration', '.5s');
    w3.addStyle(this.overlay, 'transition-timing-function', 'ease-in-out');
    w3.addStyle(this.overlay, 'opacity', '0');

    this.maintoggler = w3.get('[ui-main-sidebar-toggle] .fa-bars');
    w3.setAttr(this.sidebar, 'ui-state', 'close');
    w3.on('[ui-main-sidebar-open]', On.mouse.click, w3.mainmenu.open);
    w3.on('[ui-main-sidebar-toggle]', On.mouse.click, function(){ w3.mainmenu.toggle(); });
    w3.on('[ui-main-sidebar-close], [ui-main-sidebar-overlay]', On.mouse.click, w3.mainmenu.open);
    return w3;
  }
};

"usestrict";

w3.mainmenu = {
  sidebar : null,
  overlay : null,
  maintoggler: null,
  open : function()
  {
    w3.setAttr(this.sidebar,  'ui-state', 'open');
    w3.setAttr(this.overlay,  'ui-state', 'open');
    return w3;
  },
  close : function()
  {
    w3.setAttr(this.sidebar, 'ui-state', 'close');
    w3.setAttr(this.overlay, 'ui-state', 'close');
    return w3;
  },
  toggle : function()
  {
    var st = w3.getAttr(this.sidebar, 'ui-state');
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
  init : function()
  {
    this.maintoggler = w3.get('[ui-main-sidebar-toggle] .fa-bars');
    this.sidebar     = w3.get('[ui-main-sidebar]');
    this.overlay     = w3.get('[ui-main-sidebar-overlay]');

    w3.setAttr(this.sidebar, 'ui-state', 'close');
    w3.setAttr(this.overlay, 'ui-state', 'close');
    w3.on('[ui-main-sidebar-open]', On.mouse.click, function(){ w3.mainmenu.open(); });
    w3.on('[ui-main-sidebar-toggle]', On.mouse.click, function(){ w3.mainmenu.toggle(); });
    w3.on('[ui-main-sidebar-close], [ui-main-sidebar-overlay]', On.mouse.click, function(){ w3.mainmenu.close(); });
    return w3;
  }
};
w3.registerInitializator(w3.mainmenu.init);

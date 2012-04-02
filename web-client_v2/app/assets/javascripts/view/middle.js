window.MiddleView = Backbone.View.extend({
  
  initialize: function(){
    this.holderView = new HolderView;
    this.middleSignupView = new MiddleSignupView;
    this.middleWelcomeView = new MiddleWelcomeView;
    this.middleJotView = new MiddleJotView({
      model: this.model
    });
    this.middleLoginCompletionView = new MiddleLoginCompletionView;

    this.middleJotDetailView = new MiddleJotDetailView;
    this.middleForgotPasswordView = new MiddleForgotPasswordView;
    this.middleChangePasswordView = new MiddleChangePasswordView;
  },


  createHolder: function(id){
    this.holderView.setElement(this.el);
    this.holderView.render({
      id: id,
      className: 'main-middle-item clearfix'
    });

    return this.holderView.holder_el;
  },

  closeAll: function(){
    $(this.el).children().remove();
  },

  openSignup: function(){
    this.closeAll();
    this.middleSignupView.remove();
    this.middleSignupView.setElement(this.createHolder('main-middle-signup'));
    this.middleSignupView.render();
  },

  openWelcome: function(){
    this.closeAll();
    this.middleWelcomeView.remove();
    this.middleWelcomeView.setElement(this.createHolder('main-middle-welcome'));
    this.middleWelcomeView.render();
  },

  openJot: function(){
    this.closeAll();
    this.middleJotView.setElement(this.createHolder('main-middle-jot'));
    this.middleJotView.render();
  },

  openLoginCompletion: function(data){
    this.closeAll();
    this.middleLoginCompletionView.remove();
    this.middleLoginCompletionView.setElement(this.createHolder('main-middle-login-completion'));
    this.middleLoginCompletionView.render({
      current_user: data.current_user
    });
  },

  openJotDetail: function(data){
    this.closeAll();
    this.middleJotDetailView.remove();
    this.middleJotDetailView.setElement(this.createHolder('main-middle-jot-detail'));
    this.middleJotDetailView.render(data);
  },

  openForgotPassword: function(data){
    this.closeAll();
    this.middleForgotPasswordView.remove();
    this.middleForgotPasswordView.setElement(this.createHolder('main-middle-forgot-password'));
    this.middleForgotPasswordView.render();
  },

  openChangePassword: function(data){
    this.closeAll();
    this.middleChangePasswordView.remove();
    this.middleChangePasswordView.setElement(this.createHolder('main-middle-change-password'));
    this.middleChangePasswordView.render();
  }
});

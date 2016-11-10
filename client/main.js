import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import './main.html';


Template.hello.onCreated(function helloOnCreated() {
  var self=this;
   self.Items=new ReactiveVar([]);
  Meteor.autorun(function(){
  var _self=self.subscribe("AllPosts");
   if(_self.ready()){
     self.Items.set(myCollection.find().fetch());
}
});
});

Template.hello.helpers({
  Items() {
   return Template.instance().Items.get();
  }
});

Template.hello.events({
  'click #btnAdd'(event, instance) {
    Meteor.call("InserItem",function(error,response){

    });
  },
  'click #buttonSerch'(event,instance){
	 if(instance.find("#textHere").value===""){
	 instance.Items.set(myCollection.find({}).fetch());
	 return
	 }else{
     var _searchValue= instance.find("#textHere").value;
   	instance.Items.set(myCollection.find({
      $or:[
        {_id:{$regex :_searchValue}},
        {item:parseInt(_searchValue)}
        ]
      }).fetch()
    );
	 }
  
  }
});

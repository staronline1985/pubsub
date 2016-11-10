import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker'



myCollection.allow({
   
  update: function(userId, doc){
  return true;
  },
  remove: function(userId, doc){
   return   true;
  }
});

myCollection.deny({
insert:function(UserId, doc, fields, modifier){
 return true;
 }
 
})


Meteor.startup(() => {
myCollection.remove({});
   for(i=0; i<=10;i++){
	 myCollection.insert({item:i});
	 }
});

Meteor.publish('AllPosts', function() {
	 var _myCollection= myCollection.find();
    if(_myCollection)
    return _myCollection;
     this.ready();
});

Meteor.methods({

InserItem :function(){
  myCollection.insert({item:myCollection.find().count() +1});
}
})



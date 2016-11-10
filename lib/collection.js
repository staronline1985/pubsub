import { Meteor } from 'meteor/meteor';

this.myCollection =new Meteor.Collection("Posts");

this.Sales=new Meteor.Collection("Sales");

this.myCollection.userCanInsert = function(userId, doc) {
	return true;
};



![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# PP | IronContacts

## Introduction

Over here at Ironlabs, we found students needed a way to keep track of their fellow classmates for future projects and beer get togethers.

Unfortunately, our top developer fell asleep on the project and got distracted. We don't have the resources to put somebody else on it, so we need you!

You can find the code our developer has written in the starter code folder of this github repo.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- You must submit the entire angular2 app

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Instructions

### Iteration 1 | Display Contacts 👍🏽

It looks like our developer left behind some code for displaying a list of all of our contacts.

There is a file with fake contacts, and the collection of contacts is being exposed to the template in a variable called `contacts`.

Using `*ngFor`, display the `name`, `email`, `phoneNumber`, and `image` of the contact.

### Iteration 2 | Add New Contacts

Currently, there's a form wired up to an `[(ngModel)]` called `newContact`.

When a user clicks the button below this form, it's *supposed* to be calling a function called `addContact`.

Look carefully at the following line and see if you can detect the bug:

```html
<!-- contact-list.component.html -->
<button (click)="addContact">Submit New Contact</button>
```

Then, finish the function inside of the component that adds the contact to the list of contacts:

```typescript
addContact(){
  // add contact to contacts list
  // clear inputs
}
```

### Iteration 3 | Styling

Unfortunately, our contacts list isn't really production ready. It doesn't have much styling yet.

Remember the rules when styling. You can add a global stylesheet in your `index.html`, and apply component specific styles in the `.component.css` file.

// Online C compiler to run C program online
#include <stdio.h>
#include<stdlib.h>
int main() {
   struct{
    int data;
    struct node *next;
   }*head,*newnode,*temp;
   int size=3,i=1;
   while(i<=size){
    if(i==1){
        newnode=(struct node*)malloc(sizeof(struct node));
        printf("Enter data: ");
        scanf("%d",&newnode->data);
        temp=head=newnode;
        temp=temp->next;
        newnode->next=0;
    }
    else{
        newnode=(struct node*)malloc(sizeof(struct node));
        printf("Enter data: ");
        scanf("%d",&newnode->data);
        temp->next=newnode;
        temp=temp->next;
        newnode->next=0;

    }
    temp=head;
    while(temp->next!=0){
        printf("%d\n",temp->data);
        temp=temp->next;
    }

    printf("Insert at 1)beggininng  2)End   3)In between");
    int k;
    scanf("%d",&k);
    if(k==1){
        temp=head;
        newnode=(struct node*)malloc(sizeof(struct node));
        printf("Enter data: ");
        scanf("%d",&newnode->data);
        head=newnode;
        newnode->next=temp;
    }
    
   }

    return 0;
}
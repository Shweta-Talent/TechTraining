export interface INotification {
    displayName: string
      emailId: string
      status:"inprogress"| "sent" |"failed"
      notificationId:string
}
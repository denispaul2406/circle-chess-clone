import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

   const DashboardPage: React.FC = () => {
     return (
       <IonPage>
         <IonContent>
           <IonCard>
             <IonCardHeader>
               <IonCardTitle>Square Trainer</IonCardTitle>
             </IonCardHeader>
             <IonCardContent>
               Improve your knowledge of squares.
               <IonButton>Start Trainer</IonButton>
             </IonCardContent>
           </IonCard>
           <IonCard>
             <IonCardHeader>
               <IonCardTitle>Calculation Trainer</IonCardTitle>
             </IonCardHeader>
             <IonCardContent>
               Guess the next move.
               <IonButton>Start Trainer</IonButton>
             </IonCardContent>
           </IonCard>
           <IonCard>
             <IonCardHeader>
               <IonCardTitle>Intuition Trainer</IonCardTitle>
             </IonCardHeader>
             <IonCardContent>
               Perform against GM.
               <IonButton>Start Trainer</IonButton>
             </IonCardContent>
           </IonCard>
         </IonContent>
       </IonPage>
     );
   };

   export default DashboardPage;
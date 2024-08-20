import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const AssessmentPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Overall Assessment Summary</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            View a comprehensive analysis of your games, including your strengths and areas that require attention.
            <IonButton>View Detailed Report</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Opening Mastery</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Check your performance with your most frequently played openings. Click to see the games played in each line.
            <IonButton>View Openings</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Middlegame Analysis</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Analyze your performance in key middlegame aspects, including piece activity and center control.
            <IonButton>View Middlegame Insights</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Endgame Mastery</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Review your endgame performance and identify your strengths and weaknesses in crucial endgame elements.
            <IonButton>View Endgame Insights</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Calculation Depth</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Evaluate your calculation depth and accuracy, and review positions where mistakes were made.
            <IonButton>View Calculation Details</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AssessmentPage;

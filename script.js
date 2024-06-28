document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const meteo = document.getElementById('meteo').value;
    const etatAvant = document.getElementById('etat-avant').value;
    const commentaireEtatAvant = document.getElementById('commentaire-etat-avant').value;
    const etatApres = document.getElementById('etat-apres').value;
    const commentaireEtatApres = document.getElementById('commentaire-etat-apres').value;
    const impactVie = document.getElementById('impact-vie').value;
    const commentaireImpactVie = document.getElementById('commentaire-impact-vie').value;
    const relationSoignant = document.getElementById('relation-soignant').value;
    const commentaireRelationSoignant = document.getElementById('commentaire-relation-soignant').value;
    const confiance = document.getElementById('confiance').value;
    const commentaireConfiance = document.getElementById('commentaire-confiance').value;

    console.log('Météo du jour:', meteo);
    console.log('État avant l’exercice:', etatAvant, 'Commentaire:', commentaireEtatAvant);
    console.log('État après l’exercice:', etatApres, 'Commentaire:', commentaireEtatApres);
    console.log('Impact sur la vie perso/pro:', impactVie, 'Commentaire:', commentaireImpactVie);
    console.log('Impact sur la relation patient/soignant:', relationSoignant, 'Commentaire:', commentaireRelationSoignant);
    console.log('Impact sur le niveau de confiance:', confiance, 'Commentaire:', commentaireConfiance);

    alert('Merci pour vos réponses!');

  
    document.getElementById('quiz-form').reset();
});

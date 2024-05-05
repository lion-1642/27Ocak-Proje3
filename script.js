        // Ikonun hareketini sağlayalım
        let isMovingRight = true;
        let isMovingDown = true;
        
        function moveIcon() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
        
            const icon = document.querySelector('.icon'); // Add this line to select the icon element
        
            const iconWidth = icon.clientWidth;
            const iconHeight = icon.clientHeight;
        
            const maxX = screenWidth - iconWidth;
            const maxY = screenHeight - iconHeight;
        
            const currentX = parseFloat(getComputedStyle(icon).right);
            const currentY = parseFloat(getComputedStyle(icon).top);
        
            let newX = currentX;
            let newY = currentY;
        
            if (isMovingRight) {
                newX += 150;
                if (newX >= maxX) {
                    isMovingRight = false;
                }
            } else {
                newX -= 150;
                if (newX <= 0) {
                    isMovingRight = true;
                }
            }
        
            if (isMovingDown) {
                newY += 150;
                if (newY >= maxY) {
                    isMovingDown = false;
                }
            } else {
                newY -= 150;
                if (newY <= 0) {
                    isMovingDown = true;
                }
            }
        
            icon.style.right = `${newX}px`;
            icon.style.top = `${newY}px`;
        }
        
        // Ikonun küçülüp büyümesini sağlayalım
        setInterval(() => {
            icon.classList.toggle('shrink');
        }, 1000);
        
        // Ikonun hareketini başlat
        setInterval(moveIcon, 1500);
        
        ///maliyet hesaplama işlemmi
        
        document.getElementById('cost-form').onsubmit = function(event) {
           event.preventDefault();
           var materialCost = parseFloat(document.getElementById('material-cost').value);
           var laborCost = parseFloat(document.getElementById('labor-cost').value);
           var overheadCost = parseFloat(document.getElementById('overhead-cost').value);
           var profitMargin = parseFloat(document.getElementById('profit-margin').value);
        
           var totalCost = materialCost + laborCost + overheadCost;
           totalCost += totalCost * (profitMargin / 100);
        
           document.getElementById('cost-value').textContent = totalCost.toFixed(2);
        };
        document.addEventListener('DOMContentLoaded', function() {
            var form = document.querySelector('.container-34 #liquid-form');
            if (form) {
                form.onsubmit = function(event) {
                    event.preventDefault();
                    var containerVolume = parseFloat(document.querySelector('.container-34 #container-volume').value);
                    var density = parseFloat(document.querySelector('.container-34 #density').value);
        
                    var weight = containerVolume * density;
        
                    document.querySelector('.container-34 #weight').textContent = weight.toFixed(2);
                };
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            var form = document.querySelector('.container-35 #tech-analysis-form');
            if (form) {
                form.onsubmit = function(event) {
                    event.preventDefault();
                    var techName = document.querySelector('.container-35 #tech-name').value;
                    var developmentStage = document.querySelector('.container-35 #development-stage').value;
                    var investmentAmount = parseFloat(document.querySelector('.container-35 #investment-amount').value);
                    var impactLevel = document.querySelector('.container-35 #impact-level').value;
        
                    var table = document.querySelector('.container-35 #analysis-table').getElementsByTagName('tbody')[0];
                    var newRow = table.insertRow(table.rows.length);
        
                    var cell1 = newRow.insertCell(0);
                    var cell2 = newRow.insertCell(1);
                    var cell3 = newRow.insertCell(2);
                    var cell4 = newRow.insertCell(3);
        
                    cell1.textContent = techName;
                    cell2.textContent = developmentStage;
                    cell3.textContent = investmentAmount.toFixed(2);
                    cell4.textContent = impactLevel;
                };
            }
        });
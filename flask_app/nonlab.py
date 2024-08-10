from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load Excel file
df = pd.read_excel('non_lab.xlsx')

# Function to categorize risk
def categorize_risk(value):
    if value <= 5:
        return 'เสี่ยงน้อยมาก'
    elif value > 5 and value <= 10:
        return 'เสี่ยงน้อย'
    elif value > 10 and value <= 20:
        return 'เสี่ยงปานกลาง'
    elif value > 20 and value <= 30:
        return 'เสี่ยงสูง'
    else:
        return 'เสี่ยงสูงมาก'

# Route to handle comparison
@app.route('/compare', methods=['POST'])
def compare_nonLab_CVD():
    data = request.json
    sex = data['sex']
    smk = data['smk']
    sbp = data['sbp']
    bmi = data['bmi']
    age = data['age']

    existing_data = df.loc[(df['sex'] == sex) & (df['smk'] == smk) & (df['sbp'] == sbp) & (df['bmi'] == bmi) & (df['age'] == age)]

    if len(existing_data) > 0:
        nonLab_CVD = existing_data.iloc[0]['nonLab-CVD']
        risk_level = existing_data.iloc[0]['Risk_Level']
        return jsonify({
            'nonLab_CVD': nonLab_CVD,
            'Risk_Level': risk_level
        })
    else:
        return jsonify({
            'message': 'Data not found in existing dataset.'
        })

if __name__ == '__main__':
    app.run(debug=True)
